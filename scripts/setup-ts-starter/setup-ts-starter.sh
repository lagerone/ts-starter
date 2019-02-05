#!/bin/bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
GREEN='\033[0;32m'
NC='\033[0m' # No Color
TASK=${GREEN}setup-ts-starter${NC}
PROJECT_PATH=${CWD}/../../
SRC_PATH=${CWD}/../../src/

echo -e "${TASK} CWD=${CWD}"
echo -e "${TASK} init npm"
cd ${CWD}/../../ && npm init -y

echo -e "${TASK} installing dependencies..."
npm install --save-dev @types/node eslint nodemon ts-node tslint tslint-config-prettier typescript --prefix $PROJECT_PATH
npm install --save dotenv winston --prefix $PROJECT_PATH

echo -e "${TASK} adding scripts to package.json"
node ${CWD}/package.js

echo -e "${TASK} setup done."