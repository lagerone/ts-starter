#!/bin/bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
GREEN='\033[0;32m'
NC='\033[0m' # No Color
TASK=${GREEN}reset${NC}
PROJECT_PATH=${CWD}/../../

echo -e "${TASK} remove files"
rm -f ./jest.config.js
rm -rf -f ./src/server && rm -f ./package.json
rm -rf -f ./node_modules && rm -f ./package-lock.lock
rm -rf -f ./dist

echo -e "${TASK} copy initial package.json"
cp ${CWD}/package.json $PROJECT_PATH
