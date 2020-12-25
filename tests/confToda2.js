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

    logInAsUser: [
      './gfShop/logInAsUser/logInAsUser-spec.js'
    ],

    testOrderComplete: [
      './gfShop/testOrderComplete/testOrderComplete-spec.js'
    ],

    // testCartWithFFLAndRegularProduct: [
    //   './gfShop/testCartWithFFLAndRegularProduct/testCartWithFFLAndRegularProduct-spec.js'
    // ],

    // testViewProduct: [
    //   './gfShop/testViewProduct/testViewProduct-spec.js'
    // ],

    // testProductMessage: [
    //   './gfShop/testProductMessage/testProductMessage-spec.js'
    // ],

    // testDeleteProductCart: [
    //   './gfShop/testDeleteProductCart/testDeleteProductCart-spec.js'
    // ],

    // testEditQtyEditPage: [
    //   './gfShop/testEditQtyEditPage/testEditQtyEditPage-spec.js'
    // ],

  },

  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'chromeOptions': {
      'args': ['--disable-gpu', '--window-size=2880,1800',]
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