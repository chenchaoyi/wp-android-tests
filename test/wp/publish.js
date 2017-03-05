var expect = require('chai').expect;
var test = require('../../test/test.js');
var testData = test.testData;

describe('Publish new post user flow', function() {
  before(function() {
    driver = test.driver;
  });

  beforeEach(function(done) {
    driver.run(function() {
      //test.pages.home.disableAlert(driver);
      done();
    });
  });

  it('Creat new post [C001] @smoke', function(done) {
    driver.run(function() {
      test.pages.signin.signIn(driver);
      test.pages.mysite.goToMySite(driver);
      test.pages.mysite.createNewPost(driver);
      test.pages.editor.editNewPost(driver);
      test.pages.editor.createGallery(driver);
      test.pages.editor.publishPost(driver);
      driver.sleep(5000);
      done();
    });
  });

});
