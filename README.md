# Info

Builder repo for [https://eoinfarrell.dev](eoinfarrell.dev) using Hugo.
Repo is built and pushed to [https://github.com/EoinFarrell/EoinFarrell.github.io.](EoinFarrell.github.io.), where the built version is served by Github pages, fronted by Cloudflare.

## Commands

- Run Locally
  - `hugo server`
- Build and minify
  - `hugo --minify`

## Workflow

Note: Workflow pushes minified build to https://github.com/EoinFarrell/EoinFarrell.github.io.
PAT token `GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}` requires the below access:

> Contents
> Repository contents, commits, branches, downloads, releases, and merges. 