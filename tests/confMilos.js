let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let failFast = require('protractor-fail-fast');

exports.config = {
  plugins: [failFast.init()],
  afterLaunch: function () {
    failFast.clean(); // Removes the fail file once all test runners have completed.
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {

    // opt: [
    //   './todo-spec.js',     (poziva 'todo' fajl koji ne sluzi nicemu. to je samo primer)
    // ],

    login: [
      './private/account/login/login-spec.js'
    ],

    // docLibraryCheck: [
    //   './private/community/docLibraryCheck/docLibraryCheck-spec.js'
    // ],

    // vendorDirectoryCheck: [
    //   './private/community/vendorDirectoryCheck/vendorDirectoryCheck-spec.js'
    // ],   

    // vendorDetailsPage: [
    //   './private/community/vendorDetailsPage/vendorDetailsPage-spec.js'
    // ],

    // logOut: [
    //   './private/education/logOutAsAdmin/logOutAsAdmin-spec.js'
    // ],

    miloslogin: [
      './private/community/milosLogIn/login-spec.js'
    ],

    // loadMoreOnDocLibPage: [
    //   './private/community/loadMoreOnDocLibPage/loadMoreOnDocLibPage-spec.js'
    // ],

    // searchOnDocLibPage: [
    //   './private/community/searchOnDocLibPage/searchOnDocLibPage-spec.js'
    // ],

    // poll
    // documentDetailsPage: [
    //   './private/community/documentDetailsPage/documentDetailsPage-spec.js'
    // ],

    // poll
    // anonymousDocumentDetailsPage: [
    //   './private/community/anonymousDocumentDetailsPage/anonymousDocumentDetailsPage-spec.js'
    // ],

    // shareDocument: [
    //   './private/community/shareDocument/shareDocument-spec.js'
    // ],

    // checkOptInMsgAfterDownloadDoc: [
    //   './private/community/checkOptInMsgAfterDownloadDoc/checkOptInMsgAfterDownloadDoc-spec.js'
    // ],

    // loadMoreOnVendorDirectoryPage: [
    //   './private/community/loadMoreOnVendorDirectoryPage/loadMoreOnVendorDirectoryPage-spec.js'
    // ],   
    
    // searchOnVendorDirectoryPage: [
    //   './private/community/searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-spec.js'
    // ],

    // followUnfollowVendor: [
    //   './private/community/followUnfollowVendor/followUnfollowVendor-spec.js'
    // ],

    // checkPollOnDocumentLibPage: [
    //   './private/community/checkPollOnDocumentLibPage/checkPollOnDocumentLibPage-spec.js'
    // ],

    // checkPollOnHomePage: [
    //   './private/community/checkPollOnHomePage/checkPollOnHomePage-spec.js'
    // ],

    bannersOnVendorDetailsPage: [
      './private/community/bannersOnVendorDetailsPage/bannersOnVendorDetailsPage-spec.js'
    ],

  },

  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      'args': ['--disable-gpu', '--window-size=2880,1800']
    }
  },
  jasmineNodeOpts: {
    print: function () { },
    showColors: true,
    defaultTimeoutInterval: 300000
  },

  allScriptsTimeout: 60 * 1000 * 60,

  onPrepare: function () {
    // Ovaj deo koda je za Jasmin reporter u terminalu
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  }

};