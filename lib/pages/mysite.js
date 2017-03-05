// Page object for My Site page

var expect = require('chai').expect;

var internals = {};

internals.Page = function () {};

// Locators
internals.Page = {
  mySiteTab: {
    locator: 'My Site',
    using: 'accessibility id'
  },

  newPostButton: {
    locator: 'New post',
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
