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

    testPlaceFFLOrder: [
      './gfShop/testPlaceFFLOrder/testPlaceFFLOrder-spec.js'
    ],

    testTwentyProductsOrder: [
      './gfShop/testTwentyProductsOrder/testTwentyProductsOrder-spec.js'
    ],

    testSortingByName: [
      './gfShop/testSortingByName/testSortingByName-spec.js'
    ],

    testSortingByPrice: [
      './gfShop/testSortingByPrice/testSortingByPrice-spec.js'
    ],

    testSortingByPosition: [
      './gfShop/testSortingByPosition/testSortingByPosition-spec.js'
    ],

    testSortingByShoppingOptions: [
      './gfShop/testSortingByShoppingOptions/testSortingByShoppingOptions-spec.js'
    ],

    testSortingByDescendingDirection: [
      './gfShop/testSortingByDescendingDirection/testSortingByDescendingDirection-spec.js'
    ],

    testAddNewAddress: [
      './gfShop/testAddNewAddress/testAddNewAddress-spec.js'
    ],

    testAddressToDefaultShipping: [
      './gfShop/testAddressToDefaultShipping/testAddressToDefaultShipping-spec.js'
    ],

    testDeleteAddress: [
      './gfShop/testDeleteAddress/testDeleteAddress-spec.js'
    ],

    testReturnPolicy: [
      './gfShop/testReturnPolicy/testReturnPolicy-spec.js'
    ],

    testAdminSwitch: [
      './gfShop/testAdminSwitch/testAdminSwitch-spec.js'
    ],

    testShowPerPage: [
      './gfShop/testShowPerPage/testShowPerPage-spec.js'
    ],

    testPagination: [
      './gfShop/testPagination/testPagination-spec.js'
    ],

    testProductWithOneBox: [
      './gfShop/testProductWithOneBox/testProductWithOneBox-spec.js'
    ],

    testProductWithTwoBoxes: [
      './gfShop/testProductWithTwoBoxes/testProductWithTwoBoxes-spec.js'
    ],

    testProductWithTwoDrops: [
      './gfShop/testProductWithTwoDrops/testProductWithTwoDrops-spec.js'
    ],

    testGrowlMessageToSelectOption: [
      './gfShop/testGrowlMessageToSelectOption/testGrowlMessageToSelectOption-spec.js'
    ],

    TestAttentionWindow: [
      './gfShop/TestAttentionWindow/TestAttentionWindow-spec.js'
    ],

    TestSecondAttentionWindow: [
      './gfShop/TestSecondAttentionWindow/TestSecondAttentionWindow-spec.js'
    ],

    TestZendesk: [
      './gfShop/TestZendesk/TestZendesk-spec.js'
    ],

    testRegularVSDiscountPrice: [
      './gfShop/testRegularVSDiscountPrice/testRegularVSDiscountPrice-spec.js'
    ],

    testSearchShop: [
      './gfShop/testSearchShop/testSearchShop-spec.js'
    ],

    testMyAccount: [
      './gfShop/testMyAccount/testMyAccount-spec.js'
    ],

    testMyOrders: [
      './gfShop/testMyOrders/testMyOrders-spec.js'
    ],

    testSkuOneDrop: [
      './gfShop/testSkuOneDrop/testSkuOneDrop-spec.js'
    ],

    testCartWithFFLAndRegularProduct: [
      './gfShop/testCartWithFFLAndRegularProduct/testCartWithFFLAndRegularProduct-spec.js'
    ],

    testPrintOrderPage: [
      './gfShop/testPrintOrderPage/testPrintOrderPage-spec.js'
    ],

    testCouponOrder: [
      './gfShop/testCouponOrder/testCouponOrder-spec.js'
    ],

    testWrongCouponCode: [
      './gfShop/testWrongCouponCode/testWrongCouponCode-spec.js'
    ],

    testViewProduct: [
      './gfShop/testViewProduct/testViewProduct-spec.js'
    ],

    testProductMessage: [
      './gfShop/testProductMessage/testProductMessage-spec.js'
    ],

    testEditQtyCart: [
      './gfShop/testEditQtyCart/testEditQtyCart-spec.js'
    ],

    testDeleteProductCart: [
      './gfShop/testDeleteProductCart/testDeleteProductCart-spec.js'
    ],

    testEditQtyEditPage: [
      './gfShop/testEditQtyEditPage/testEditQtyEditPage-spec.js'
    ],

    testDeleteProductEditCart: [
      './gfShop/testDeleteProductEditCart/testDeleteProductEditCart-spec.js'
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
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  }

};