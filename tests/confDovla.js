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

    logInAsUser: [
      './gfShop/logInAsUser/logInAsUser-spec.js'
    ],

    // testCartWithFFLAndRegularProduct: [
    //   './gfShop/testCartWithFFLAndRegularProduct/testCartWithFFLAndRegularProduct-spec.js'
    // ],

    // testCancelCoupon: [
    //   './gfShop/testCancelCoupon/testCancelCoupon-spec.js'
    // ],

    // testMoultrieShipping: [
    //   './gfShop/testMoultrieShipping/testMoultrieShipping-spec.js'
    // ],

    // testTwoShippingMethods: [
    //   './gfShop/testTwoShippingMethods/testTwoShippingMethods-spec.js'
    // ],

    // testAdminSwitch: [
    //   './gfShop/testAdminSwitch/testAdminSwitch-spec.js'
    // ],

    // TestSecondAttentionWindow: [
    //   './gfShop/TestSecondAttentionWindow/TestSecondAttentionWindow-spec.js'
    // ],

    // testFooterLinks: [
    //   './gfShop/testFooterLinks/testFooterLinks-spec.js'
    // ],

    // testRestrictedAreaMessage: [
    //   './gfShop/testRestrictedAreaMessage/testRestrictedAreaMessage-spec.js'
    // ],

    // testPoBoxAddress: [
    //   './gfShop/testPoBoxAddress/testPoBoxAddress-spec.js'
    // ],

    // testPoBoxAddressFromCheckout: [
    //   './gfShop/testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-spec.js'
    // ],

    testSaveInAddressBookOptionForNewAddress: [
      './gfShop/testSaveInAddressBookOptionForNewAddress/testSaveInAddressBookOptionForNewAddress-spec.js'
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