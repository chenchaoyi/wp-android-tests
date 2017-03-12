// Page object for My Site page

var expect = require('chai').expect;
var localeRes = require('../locale_map').localeRes;

var internals = {};

// Locators
internals.Page = {
  mySiteTab: {
    locator: localeRes.tabbar_accessibility_label_my_site,
    using: 'accessibility id'
  },

  newPostButton: {
    locator: localeRes.new_post,
    using: 'accessibility id'
  }
};

// Go to My Site tab
internals.Page.goToMySite = function (driver) {
  driver.clickEl(this.mySiteTab);
};

// Create new post
internals.Page.createNewPost = function (driver) {
  driver.clickEl(this.newPostButton);
};

exports = module.exports = internals.Page;
