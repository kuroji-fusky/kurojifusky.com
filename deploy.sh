#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'vue deploy'

git push -f git@github.com:skepfusky/skepfusky-net.git main:gh-pages

cd -
