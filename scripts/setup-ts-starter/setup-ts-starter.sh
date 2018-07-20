#!/bin/bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
GREEN='\033[0;32m'
NC='\033[0m' # No Color
TASK=${GREEN}setup-express${NC}
PROJECT_PATH=${CWD}/../../
SRC_PATH=${CWD}/../../src/

echo -e "${TASK} CWD=${CWD}"
echo -e "${TASK} init npm"
cd ${CWD}/../../ && npm init -y

echo -e "${TASK} installing dependencies..."
yarn --cwd $PROJECT_PATH add --dev @types/shelljs @types/node @types/winston eslint nodemon ts-node tslint tslint-config-prettier typescript
yarn --cwd $PROJECT_PATH add shelljs dotenv winston

echo -e "${TASK} adding scripts to package.json"
node ${CWD}/package.js

echo -e "${TASK} setup done."