var Config = require('config');
var Cyancat = require('cyancat');
var Pages = require('../lib').Pages

var sauce_username = process.env.SAUCE_USERNAME;
var sauce_password = process.env.SAUCE_ACCESS_KEY;

if (process.env.SAUCE === "true") {
  // update SauceLabs settings
  Config.server = "http://" +
    sauce_username + ":" + sauce_password + "@ondemand.saucelabs.com:80/wd/hub";
  Config.capabilities.app = "sauce-storage:" + Config.remoteAppName;
}


var driver = new Cyancat(Config.server, {
  maxWaitTime: 10000,
  proxy: Config.proxy
});

beforeEach(function(done) {
  driver.run(function() {
    driver.init(Config.capabilities);
    done();
  });
});

afterEach(function(done) {
  driver.run(function() {
    driver.quit();
    done();
  });
});

exports.driver = driver;
exports.pages = Pages;
exports.testData = require('../config/testData');
