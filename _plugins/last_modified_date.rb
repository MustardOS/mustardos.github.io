# frozen_string_literal: true

# just-the-docs' footer looks for `page.last_modified_date`, but jekyll-last-modified-at
# only sets `page.last_modified_at` (a Determinator, not a Time). Bridge the two here so
# the theme's built-in "Page last modified" footer line works without overriding footer.html.
Jekyll::Hooks.register %i[pages documents], :post_init do |item|
  # Skip virtual pages (e.g. the theme's own generated CSS/JS assets) that don't
  # resolve to a real file under the site source - they have nothing to date.
  full_path = Jekyll.sanitized_path(item.site.source, item.path)
  next unless File.exist?(full_path)

  determinator = Jekyll::LastModifiedAt::Determinator.new(item.site.source, item.path)
  item.data["last_modified_date"] = determinator.last_modified_at_time
end
