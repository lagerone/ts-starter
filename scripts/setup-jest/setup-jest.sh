#!/bin/bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
GREEN='\033[0;32m'
NC='\033[0m' # No Color
PROJECT_PATH=${CWD}/../../
JEST_CONFIG_PATH=${CWD}/jest.config.js

echo -e "${GREEN}setup-jest${NC} copying ${JEST_CONFIG_PATH}"
cp $JEST_CONFIG_PATH $PROJECT_PATH

echo -e "${GREEN}setup-jest${NC} installing dependencies..."
yarn --cwd $PROJECT_PATH add --dev jest @types/jest ts-jest

echo -e "${GREEN}setup-jest${NC} adding test script to package.json"
node ${CWD}/package.js

echo -e "${GREEN}setup-jest${NC} setup done."