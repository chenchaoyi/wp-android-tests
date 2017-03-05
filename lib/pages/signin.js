// Page object for SignIn page

var expect = require('chai').expect;

var internals = {};

internals.Page = function () {};

// Locators
internals.Page = {
  signInButton: {
    locator: 'org.wordpress.android:id/nux_sign_in_button',
    using: 'id'
  }
}

// Go to Account page
internals.Page.signIn = function (driver) {
  driver.clickEl(this.signInButton);
  driver.clickEl(this.signInButton);
};

exports = module.exports = internals.Page;
