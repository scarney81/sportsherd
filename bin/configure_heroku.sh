#!/bin/bash
facebook_client_id=$1
facebook_client_secret=$2
facebook_callback_url=$3

if [ -z "$facebook_client_id" ]; then read -p 'Facebook Client ID: ' facebook_client_id; fi
if [ -z "$facebook_client_secret" ]; then read -p 'Facebook Client Secret: ' facebook_client_secret; fi
if [ -z "$facebook_callback_url" ]; then read -p 'Facebook Client Secret: ' facebook_callback_url; fi

heroku config:set FACEBOOK_CLIENT_ID=$facebook_client_id
heroku config:set FACEBOOK_CLIENT_SECRET=$facebook_client_secret
heroku config:set FACEBOOK_CALLBACK_URL=$facebook_callback_url