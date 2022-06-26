# State Map Suggestion Demo

## Install required nodejs packages
- `npm install`

## Setup Google cloud authentication
https://cloud.google.com/sdk/docs/install#deb

1. `sudo apt-get install apt-transport-https ca-certificates gnupg`
1. `echo "deb https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list`
1. `curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -`
1. `sudo apt-get update && sudo apt-get install google-cloud-cli`
1. `gcloud init`
    1. It will automatically pop up a page in browser.
    1. Click allow in browser.
1. `gcloud auth login --no-launch-browser`
    1. Copy & paste the link in your browser.
    1. Login and copy the authorization code back to command line.

## Run application on your local machine

- `npm start`
- Visit http://localhost:8080

## Deploy and run application on App Engine

- `gcloud app deploy`
- `gcloud app browse`
- You browser should redirect to https://map-demo-202206.uw.r.appspot.com/ automatically.

