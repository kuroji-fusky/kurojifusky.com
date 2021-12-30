#!/usr/bin/env sh

# No errors lmao
set -e

npm run build

# Serves the site locally
serve -s dist
