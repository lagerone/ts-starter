#!/bin/bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
GREEN='\033[0;32m'
NC='\033[0m' # No Color
TASK=${GREEN}setup-express${NC}
PROJECT_PATH=${CWD}/../../
SRC_PATH=${CWD}/../../src/

echo -e "${TASK} CWD=${CWD}"
echo -e "${TASK} copying server modules to ${SRC_PATH}"
cp -r ${CWD}/server/ $SRC_PATH

echo -e "${TASK} installing dependencies..."
npm install --save-dev @types/body-parser @types/compression @types/errorhandler @types/express --prefix $PROJECT_PATH
npm install --save body-parser compression errorhandler express --prefix $PROJECT_PATH

echo -e "${TASK} adding test script to package.json"
node ${CWD}/package.js

echo -e "${TASK} setup done."