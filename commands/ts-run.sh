#!/usr/bin/bash

# place in commands/ inside of a project's root folder

set -e

ROOT_DIR="$(cd -- "$(dirname "$0")" > /dev/null 2>&1; cd ../ && pwd -P)"

set -a

if [[ -f "$ROOT_DIR/.ci.env" ]]; then
  source "$ROOT_DIR/.ci.env"
elif [[ -f "$ROOT_DIR/.env" ]]; then
  source "$ROOT_DIR/.env"
fi

set +a

exec npx ts-node --project=$ROOT_DIR/tsconfig.json -r tsconfig-paths/register "$@"
