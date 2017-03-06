// Page object for New Post Editor page (including insert media subpage)

var expect = require('chai').expect;

var internals = {};

internals.Page = function () {};

// Locators
internals.Page = {
  titleView: {
    locator: 'Post Title',
    using: 'accessibility id'
  },

  contentView: {
    locator: 'Share your story here…',
    using: 'accessibility id'
  },

  insertMediaButton: {
    locator: 'Insert media',
    using: 'accessibility id'
  },

  allowAccessButton: {
    locator: 'com.android.packageinstaller:id/permission_allow_button',
    using: 'id'
  },

  createGalleryTextView: {
    locator: "//android.widget.TextView[@text='Create gallery']",
    using: 'xpath'
  },

  galleryMediaCheckbox: {
    locator: 'org.wordpress.android:id/media_grid_item_checkstate',
    using: 'id'
  },

  doneImageView: {
    locator: 'Done',
    using: 'accessibility id'
  },

  saveTextView: {
    locator: 'Save',
    using: 'accessibility id'
  },

  publishTextView: {
    locator: 'Publish',
    using: 'accessibility id'
  },

  actionBarTitleTextView: {
    locator: 'org.wordpress.android:id/action_bar_title',
    using: 'id'
  },

  settingsTextView: {
    locator: 'Settings',
    using: 'accessibility id'
  },

  addMediaTextView: {
    locator: 'Add media',
    using: 'accessibility id'
  },

  boldToggleButton: {
    locator: 'Bold',
    using: 'accessibility id'
  },

  italicButton: {
    locator: 'Italic',
    using: 'accessibility id'
  },

  backQuoteButton: {
    locator: 'Block quote',
    using: 'accessibility id'
  }

};

// Edit post
internals.Page.editNewPost = function (driver) {
  driver.clickEl(this.titleView);
  driver.keys('TEST title: ' + Date.now());
  // verify basic edit option is disabled when editing post title
  expect(driver.getElAttr(this.boldToggleButton, 'enabled')).to.eql('false');
  expect(driver.getElAttr(this.italicButton, 'enabled')).to.eql('false');
  expect(driver.getElAttr(this.backQuoteButton, 'enabled')).to.eql('false');

  driver.clickEl(this.contentView);
  driver.clickEl(this.contentView);
  // verify basic edit option elements are available
  expect(driver.hasEl(this.boldToggleButton)).to.be.true
  expect(driver.hasEl(this.italicButton)).to.be.true
  expect(driver.hasEl(this.backQuoteButton)).to.be.true
  driver.keys('This is a TEST post content: ' + new Date());
};

// Allow access
internals.Page.permissionAllow = function (driver) {
  return driver.clickEl(this.allowAccessButton);
};

// Insert media to the post
internals.Page.insertMedia = function (driver, permissionAllow) {
  driver.clickEl(this.insertMediaButton);
  if (permissionAllow) {
    this.permissionAllow(driver);
    this.permissionAllow(driver);
  }
};

// Create gallery with first two images selected
internals.Page.createGallery = function (driver, permissionAllow) {
  this.insertMedia(driver, permissionAllow);
  driver.clickEl(this.createGalleryTextView);
  var mediaIds = driver.elements(this.galleryMediaCheckbox.locator, this.galleryMediaCheckbox.using);
  // TODO: only select first two medias for now
  // will make it to be controlled through parameters
  driver.elementClick(mediaIds[0]);
  driver.elementClick(mediaIds[1]);
  // verify media files selected number is correctly shown in the top action bar
  expect(driver.getElAttr(this.actionBarTitleTextView, 'text')).to.eql('2 selected');

  driver.clickEl(this.doneImageView);
  driver.clickEl(this.saveTextView);
};

// Create gallery with first two images selected
// then click on Add media again to update selected images
internals.Page.createAndUpdateGallery = function (driver, permissionAllow) {
  this.insertMedia(driver, permissionAllow);
  driver.clickEl(this.createGalleryTextView);
  var mediaIds = driver.elements(this.galleryMediaCheckbox.locator, this.galleryMediaCheckbox.using);
  // TODO: only select first two medias for now
  // will make it to be controlled through parameters
  driver.elementClick(mediaIds[0]);
  driver.elementClick(mediaIds[1]);
  // verify media files selected number is correctly shown in the top action bar
  expect(driver.getElAttr(this.actionBarTitleTextView, 'text')).to.eql('2 selected');

  driver.clickEl(this.doneImageView);
  driver.clickEl(this.addMediaTextView);
  // deselect a previously selected image
  driver.elementClick(mediaIds[0]);
  // verify media files selected number is correctly shown in the top action bar
  expect(driver.getElAttr(this.actionBarTitleTextView, 'text')).to.eql('1 selected');
  // select a new image again
  driver.elementClick(mediaIds[3]);
  // verify media files selected number is correctly shown in the top action bar
  expect(driver.getElAttr(this.actionBarTitleTextView, 'text')).to.eql('2 selected');

  driver.clickEl(this.doneImageView);
  driver.clickEl(this.saveTextView);
};

// Publish post
internals.Page.publishPost = function (driver) {
  return driver.clickEl(this.publishTextView);
};

exports = module.exports = internals.Page;
