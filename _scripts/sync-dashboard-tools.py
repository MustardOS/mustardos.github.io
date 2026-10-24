#!/usr/bin/env python3
# Copies the website tools into the Web Dashboard so they work on the device without internet access.
# The tools keep their website markup and scripts; tool-storage.js switches on the device features
# when it finds the mustardos-device marker that this script adds to each copied page.

import argparse
import html
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

SITE = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SITE_URL = "https://muos.dev"

DOCS = [("api", "web/dashboard/api.html", "dash", "Documentation")]

PAGE = """<!DOCTYPE html>
<html lang="en-AU">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="dark">
    <meta name="mustardos-device" content="1">
    <title>{title} | MustardOS Web Dashboard</title>
    <link rel="icon" href="../logo.svg" type="image/svg+xml">
    <link rel="stylesheet" href="assets/css/site.css">
</head>
<body class="device-page">
<header class="side-bar">
    <div class="site-header">
        <a href="../" class="site-title lh-tight"><img class="site-logo" src="../logo.svg" alt="" width="48" height="48"> MustardOS</a>
        <button id="menu-button" class="site-button btn-reset" type="button" aria-label="Menu" aria-controls="site-nav" aria-expanded="false">
            <svg viewBox="0 0 24 24" class="icon" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
    </div>
{nav}
{footer}
</header>
<div class="main" id="top">
{header}
    <div class="main-content-wrap">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
            <ol class="breadcrumb-nav-list">
                <li class="breadcrumb-nav-list-item"><a href="../#{crumb_view}">{crumb}</a></li>
                <li class="breadcrumb-nav-list-item"><span>{title}</span></li>
            </ol>
        </nav>
        <div id="main-content" class="main-content">
            <main>
{content}
            </main>
        </div>
    </div>
</div>
<script src="../js/toolnav.js" defer></script>
</body>
</html>
"""


def build_site(destination):
    subprocess.run(["bundle", "exec", "jekyll", "build", "--quiet", "--destination", destination], cwd=SITE, check=True)


def tool_rows(built):
    index = open(os.path.join(built, "tools.html"), encoding="utf-8").read()
    rows = []
    for match in re.finditer(r'<a class="tool-row" href="([^"]+)">(.*?)</a>', index, re.S):
        if "/tools/" not in match.group(1):
            continue
        slug = match.group(1).rstrip("/").split("/")[-1].removesuffix(".html")
        body = match.group(2)
        icon = re.search(r'<img src="([^"]+)"', body)
        title = re.search(r'<span class="tool-row-title">(.*?)</span>', body, re.S)
        description = re.search(r'<span class="tool-row-desc">(.*?)</span>', body, re.S)
        rows.append({
            "slug": slug,
            "title": html.unescape(re.sub(r"<[^>]+>", "", title.group(1))).strip() if title else slug,
            "description": html.unescape(re.sub(r"<[^>]+>", "", description.group(1))).strip() if description else "",
            "icon": icon.group(1) if icon else ""
        })
    return rows


def page_content(built, slug, source=None):
    path = os.path.join(built, source or os.path.join("tools", f"{slug}.html"))
    text = open(path, encoding="utf-8").read()
    start, end = text.find("<main>"), text.find("</main>")
    if start < 0 or end < 0:
        raise SystemExit(f"No main content in {path}")
    content = text[start + len("<main>"):end]

    content = re.sub(r'<a href="#[^"]*" class="anchor-heading"[^>]*>.*?</a>', "", content, flags=re.S)
    content = re.sub(r'(src)="/assets/', r'\1="assets/', content)
    content = re.sub(r'href="/(?!/)', f'href="{SITE_URL}/', content)

    if re.search(r'\sstyle="', content):
        raise SystemExit(f"{slug} has an inline style, which the dashboard security policy blocks")
    for attributes in re.findall(r"<script(?![^>]*\ssrc=)([^>]*)>", content):
        if "application/json" not in attributes:
            raise SystemExit(f"{slug} has an inline script, which the dashboard security policy blocks")

    title = re.search(r"<h1[^>]*>(.*?)</h1>", content, re.S)
    plain = html.unescape(re.sub(r"<[^>]+>", "", title.group(1))).strip() if title else slug
    return plain, content, re.findall(r'src="(assets/[^"]+)"', content)


def dashboard_parts(internal):
    """The sidebar, footer and top bar of the dashboard, so tool pages show them from the first paint."""
    text = open(os.path.join(internal, "share", "web", "index.html"), encoding="utf-8").read()
    parts = {}
    for name, pattern in (("nav", r'    <nav class="site-nav" id="site-nav".*?</nav>'),
                          ("footer", r'    <footer class="site-footer">.*?</footer>'),
                          ("header", r'    <div class="main-header">.*?</nav>\s*</div>')):
        found = re.search(pattern, text, re.S)
        if not found:
            raise SystemExit(f"No {name} found in the dashboard index.html")
        parts[name] = found.group(0)

    nav = re.sub(r'\s*<li class="nav-list-item" data-library-tools>.*?</li>', "", parts["nav"], flags=re.S)
    nav = re.sub(r'<button class="nav-list-link" type="button" data-view="([\w-]+)">(.*?)</button>',
                 r'<a class="nav-list-link" href="../#\1">\2</a>', nav, flags=re.S)
    nav = re.sub(r'href="tools/', 'href="', nav)
    parts["nav"] = nav
    return parts


def tool_nav(parts, listed, current):
    """The dashboard sidebar with every tool listed and the current page marked."""
    items = "".join(
        f'\n            <li class="nav-list-item"><a class="nav-list-link{" active" if tool["slug"] == current else ""}"'
        f' href="{tool["slug"]}"{" aria-current=\"page\"" if tool["slug"] == current else ""}>'
        f'{html.escape(tool["title"])}</a></li>' for tool in listed)
    nav = re.sub(r'(<ul class="nav-list" id="nav-tools">.*?</li>)', lambda m: m.group(1) + items, parts["nav"],
                 count=1, flags=re.S)
    return nav.replace(f'<a class="nav-list-link" href="{current}">',
                       f'<a class="nav-list-link active" href="{current}" aria-current="page">')


def copy(source, destination):
    os.makedirs(os.path.dirname(destination), exist_ok=True)
    shutil.copyfile(source, destination)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("internal", nargs="?", default=os.path.join(SITE, "..", "internal"))
    parser.add_argument("--built", help="use an existing build instead of building the site")
    args = parser.parse_args()

    target = os.path.join(os.path.abspath(args.internal), "share", "web", "tools")
    if not os.path.isdir(os.path.dirname(target)):
        raise SystemExit(f"Web Dashboard folder not found: {os.path.dirname(target)}")

    with tempfile.TemporaryDirectory() as scratch:
        built = args.built or os.path.join(scratch, "site")
        if not args.built:
            build_site(built)

        rows = tool_rows(built)
        parts = dashboard_parts(os.path.abspath(args.internal))
        tools_listed = [{"slug": row["slug"], "title": row["title"]} for row in rows]
        assets = {"assets/css/just-the-docs-default.css": "assets/css/site.css",
                  "assets/data/profile-schema.json": "assets/data/profile-schema.json"}
        listed = []

        for row in rows:
            title, content, scripts = page_content(built, row["slug"])
            os.makedirs(target, exist_ok=True)
            with open(os.path.join(target, f"{row['slug']}.html"), "w", encoding="utf-8") as page:
                page.write(PAGE.format(title=html.escape(title), content=content.strip(), crumb_view="tools",
                                       crumb="Editors and Tools", nav=tool_nav(parts, tools_listed, row["slug"]),
                                       footer=parts["footer"], header=parts["header"]))
            for script in scripts:
                assets[script] = script

            icon = ""
            if row["icon"]:
                icon = "assets/icons/" + row["icon"].strip("/").replace("/", "-")
                assets[row["icon"].lstrip("/")] = icon
            listed.append({"slug": row["slug"], "title": row["title"], "description": row["description"], "icon": icon})

        for slug, source, view, crumb in DOCS:
            title, content, scripts = page_content(built, slug, source)
            with open(os.path.join(target, f"{slug}.html"), "w", encoding="utf-8") as page:
                page.write(PAGE.format(title=html.escape(title), content=content.strip(), crumb_view=view,
                                       crumb=crumb, nav=tool_nav(parts, tools_listed, slug), footer=parts["footer"],
                                       header=parts["header"]))
            for script in scripts:
                assets[script] = script

        for source, destination in assets.items():
            copy(os.path.join(built, source), os.path.join(target, destination))

        with open(os.path.join(target, "tools.json"), "w", encoding="utf-8") as index:
            json.dump(listed, index, indent=2, ensure_ascii=False)
            index.write("\n")

    print(f"Copied {len(listed)} tools and {len(DOCS)} documentation page(s) to {target}")


if __name__ == "__main__":
    sys.exit(main())
