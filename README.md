# Info

Builder repo for [eoinfarrell.dev](https://eoinfarrell.dev) using Hugo.
Repo is built and pushed to [EoinFarrell.github.io](https://github.com/EoinFarrell/EoinFarrell.github.io) repo, where it is served by Github pages, fronted by Cloudflare.

## Commands

- Run Locally
  - `hugo server`
- Build and minify
  - `hugo --minify`

## Workflow

PAT token `GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}` requires the below access to [EoinFarrell.github.io](https://github.com/EoinFarrell/EoinFarrell.github.io):

> Contents
> Repository contents, commits, branches, downloads, releases, and merges.
