#!/bin/bash

facebook_client_id=$1
facebook_client_secret=$2

if [ -z "$facebook_client_id" ]; then read -p 'Facebook Client ID: ' facebook_client_id; fi
if [ -z "$facebook_client_secret" ]; then read -p 'Facebook Client Secret: ' facebook_client_secret; fi

echo 'Creating ./bin/start.sh'
rm ./bin/start.sh
cp ./bin/start.sh.template ./bin/start.sh
sed -i -e 's/{{FACEBOOK_CLIENT_ID}}/'$facebook_client_id'/g' ./bin/start.sh
sed -i -e 's/{{FACEBOOK_CLIENT_SECRET}}/'$facebook_client_secret'/g' ./bin/start.sh
rm ./bin/start.sh-e

echo 'Setting permission on shell scripts'
chmod u+x ./bin/start.sh

echo 'Removing node modules'
rm -rf ./node_modules

echo 'Installing node modules'
npm install -d --silent

echo ''
echo 'To test the application run npm test'
echo ''
echo 'To start the application run npm start'