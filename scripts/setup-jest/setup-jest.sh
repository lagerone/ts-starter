#!/bin/bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
GREEN='\033[0;32m'
NC='\033[0m' # No Color
TASK=${GREEN}setup-jest${NC}
PROJECT_PATH=${CWD}/../../
JEST_CONFIG_PATH=${CWD}/jest.config.js

echo -e "${TASK} copying ${JEST_CONFIG_PATH}"
cp $JEST_CONFIG_PATH $PROJECT_PATH

echo -e "${TASK} installing dependencies..."
npm install --save-dev jest@23 @types/jest ts-jest --prefix $PROJECT_PATH

echo -e "${TASK} adding test script to package.json"
node ${CWD}/package.js

echo -e "${TASK} setup done."