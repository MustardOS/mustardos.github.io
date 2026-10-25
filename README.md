The MustardOS Website, please feel free to open a PR for review as this website is open-source.

## Contributing

Small documentation and accuracy fixes are welcome. If you'd like to contribute:

1. Fork the repository and create a branch for your change.
2. Set up a local preview:
   - Install Ruby and Bundler if needed.
   - Run `bundle install`.
   - Run `bundle exec jekyll serve` to preview the site locally.
3. Open a pull request.

CI builds the site with `bundle exec jekyll build`, so a local build is a good sanity check before opening a PR.

### Where to look

- `release/` — release pages and metadata
- `installation/` — installation guide
- `_data/` — shared site data
- `_includes/` and `_layouts/` — shared templates
