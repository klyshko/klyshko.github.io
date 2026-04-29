# klyshko.github.io

Personal academic website for Eugene Klyshko, built with Jekyll and hosted on GitHub Pages.

**Live site:** [klyshko.github.io](https://klyshko.github.io)

## Structure

| Path | Description |
|------|-------------|
| `_pages/` | Main site pages (About, Research, Publications, CV) |
| `_publications/` | Individual publication entries |
| `_talks/` | Conference talks and posters |
| `_teaching/` | Teaching experience entries |
| `_includes/` | Reusable HTML components (header, sidebar, author profile, etc.) |
| `_layouts/` | Page layout templates |
| `_sass/` | SCSS stylesheets, including `_iso-style.scss` for custom theming |
| `assets/` | Compiled CSS and JavaScript |
| `images/` | Site images and figures |
| `files/` | Downloadable PDFs and documents |

## Design

The site uses a clean, modern aesthetic inspired by [Isomorphic Labs](https://www.isomorphiclabs.com/):

- **Typography:** Inter font, light weight (300) for a thin, elegant look
- **Layout:** Sticky left sidebar on desktop, compact top bar on mobile
- **Accent color:** Navy blue (`#132d56`) used consistently for borders, links, and highlights
- **Cards:** Research topics and methods displayed as styled card blocks

Originally forked from [academicpages](https://github.com/academicpages/academicpages.github.io) (based on [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)), then heavily customized.

## Local development

Requires Ruby and Bundler. On macOS with Homebrew:

```bash
brew install ruby@3.1
export PATH="/opt/homebrew/opt/ruby@3.1/bin:$PATH"
```

Then install dependencies and serve:

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.local.yml
```

The site will be available at `http://localhost:4000/`.

## Deployment

Push to the `master` branch. GitHub Pages builds and deploys automatically.
