# WordPress Android App Appium tests

Android App test automation for WordPress using Appium


## Setup

* Install Android Studio
* Install [Node.js >= v4.2.3 and npm](http://nodejs.org/)
* Clone this repo and install npm package dependencies:
```
npm install
```

Note: For the first time running the tests:

* You may want to check your Appium setup by running:

```bash
# install appium-doctor
$ npm install appium-doctor -g
# check that all Android dependencies are set up correctly
$ appium-doctor --android
```

## Run tests

#### Start Appium server (from this folder):

```bash
./node_modules/.bin/appium
```

#### Run tests:
```bash
# Run all the tests:
./node_modules/.bin/mocha test/wp/publish.js

# Run all the tests with all Appium command traffic in Charles proxy (https://www.charlesproxy.com/):
NODE_CONFIG='{"proxy": "http://127.0.0.1:8888"}' ./node_modules/.bin/mocha test/wp/publish.js
```

