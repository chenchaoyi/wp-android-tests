var expect = require('chai').expect;
var test = require('../../test/test.js');
var testData = test.testData;

describe('Publish new post user flow', function() {
  before(function() {
    driver = test.driver;
  });

  beforeEach(function(done) {
    driver.run(function() {
      test.pages.signin.signIn(driver);
      test.pages.mysite.goToMySite(driver);
      done();
    });
  });

  it('Publish a new post with valid title, text content and an image gallery of two jpg images in it [C001] @smoke', function(done) {
    driver.run(function() {
      test.pages.mysite.createNewPost(driver);
      test.pages.editor.editNewPost(driver);
      test.pages.editor.createGallery(driver);
      test.pages.editor.publishPost(driver);
      driver.sleep(2000);
      done();
    });
  });

  it('Edit gallery before publish [C002] @smoke', function(done) {
    driver.run(function() {
      test.pages.mysite.createNewPost(driver);
      test.pages.editor.createGallery(driver);
      driver.sleep(2000);
      done();
    });
  });

});
