#!/bin/bash

# parameter=$1

# if [ -z "$parameter" ]; then read -p 'Paramter: ' parameter; fi

echo 'Creating ./bin/start.sh'
rm ./bin/start.sh
cp ./bin/start.sh.template ./bin/start.sh
# sed -i -e 's/%PARAMTER%/'$parameter'/g' ./bin/start.sh
# rm ./bin/start.sh-e

echo 'Setting permission on shell scripts'
chmod u+x ./bin/start.sh
chmod u+x ./bin/test.sh

echo 'Removing node modules'
rm -rf ./node_modules

echo 'Installing node modules'
npm install -d --silent

echo ''
echo 'To test the application run npm test'
echo ''
echo 'To start the application run npm start'