let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// let failFast = require('protractor-fail-fast');

exports.config = {
  // plugins: [failFast.init()],
  // afterLaunch: function () {
  //   failFast.clean(); // Removes the fail file once all test runners have completed.
  // },
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

    // testTwentyProductsOrder: [
    // imamo tiket - https://guidefitter.atlassian.net/browse/SHOP-1106 
        // imamo tiket - https://guidefitter.atlassian.net/browse/SHOP-1106 
    // ],

    testBreadcrumbs: [
      './gfShop/testBreadcrumbs/testBreadcrumbs-spec.js'
    ],

    testMyAccount: [
      './gfShop/testMyAccount/testMyAccount-spec.js'
    ],

    testUserMenuLinks: [
      './gfShop/testUserMenuLinks/testUserMenuLinks-spec.js'
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

    testAdvancedSorting: [
      './gfShop/testAdvancedSorting/testAdvancedSorting-spec.js'
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

    testFooterLinks: [
      './gfShop/testFooterLinks/testFooterLinks-spec.js'
    ],

    testRestrictedAreaMessage: [
      './gfShop/testRestrictedAreaMessage/testRestrictedAreaMessage-spec.js'
    ],

    testRegularVSDiscountPrice: [
      './gfShop/testRegularVSDiscountPrice/testRegularVSDiscountPrice-spec.js'
    ],

    testSearchShop: [
      './gfShop/testSearchShop/testSearchShop-spec.js'
    ],

    // testColorLinksonProductsListPage: [
    //   // imamo tiket - https://guidefitter.atlassian.net/browse/SHOP-1108
    //   './gfShop/testColorLinksonProductsListPage/testColorLinksonProductsListPage-spec.js'
    // ],

    testPoBoxAddress: [
      './gfShop/testPoBoxAddress/testPoBoxAddress-spec.js'
    ],

    testPoBoxAddressFromCheckout: [
      './gfShop/testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-spec.js'
    ],

    testCouponOrder: [
      './gfShop/testCouponOrder/testCouponOrder-spec.js'
    ],

    testSaveInAddressBookOptionForNewAddress: [
      './gfShop/testSaveInAddressBookOptionForNewAddress/testSaveInAddressBookOptionForNewAddress-spec.js'
    ],

    testNotSaveInAddressBookForNewAddress: [
      './gfShop/testNotSaveInAddressBookForNewAddress/testNotSaveInAddressBookForNewAddress-spec.js'
    ],

    testErrorMessageOnProductDetails: [
      './gfShop/testErrorMessageOnProductDetails/testErrorMessageOnProductDetails-spec.js'
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

    // testPrintOrderPage: [
    //   './gfShop/testPrintOrderPage/testPrintOrderPage-spec.js'
    // ],

    // testPrintInvoicePage: [
    //   './gfShop/testPrintInvoicePage/testPrintInvoicePage-spec.js'
    // ],

    // testSaveCcForNextTime: [
    //   // Ovo sranje ne radi dok ne provalimo u cemu je fora sa Authorize.net errorom na Payment strani
    //   './gfShop/testSaveCcForNextTime/testSaveCcForNextTime-spec.js'
    // ],

    testWrongCouponCode: [
      './gfShop/testWrongCouponCode/testWrongCouponCode-spec.js'
    ],

    testCancelCoupon: [
      './gfShop/testCancelCoupon/testCancelCoupon-spec.js'
    ],

    testViewProduct: [
      './gfShop/testViewProduct/testViewProduct-spec.js'
    ],

    testUnavailableQuantityMessage: [
      './gfShop/testUnavailableQuantityMessage/testUnavailableQuantityMessage-spec.js'
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

    testAdvanceSearchProductName: [
      './gfShop/testAdvanceSearchProductName/testAdvanceSearchProductName-spec.js'
    ],

    testAdvanceSearchSKU: [
      './gfShop/testAdvanceSearchSKU/testAdvanceSearchSKU-spec.js'
    ],

    // testAllTab: [
    // ne radi na frontu jos uvek nemamo tiket za to
    //   './gfShop/testAllTab/testAllTab-spec.js'
    // ],

    testMessageForNoOrders: [
      './gfShop/testMessageForNoOrders/testMessageForNoOrders-spec.js'
    ],

    testAddFirstAddressOnAddressBook: [
      './gfShop/testAddFirstAddressOnAddressBook/testAddFirstAddressOnAddressBook-spec.js'
    ],

    testAddFirstAddressOnCheckout: [
      './gfShop/testAddFirstAddressOnCheckout/testAddFirstAddressOnCheckout-spec.js'
    ],

    testMessageNoPayment: [
      './gfShop/testMessageNoPayment/testMessageNoPayment-spec.js'
    ],

    testMoultrieShipping: [
      './gfShop/testMoultrieShipping/testMoultrieShipping-spec.js'
    ],

    testAdvancedSearchPagination: [
      './gfShop/testAdvancedSearchPagination/testAdvancedSearchPagination-spec.js'
    ],

    testTwoShippingMethods: [
      './gfShop/testTwoShippingMethods/testTwoShippingMethods-spec.js'
    ],

    testAdvanceSearchDescription: [
      './gfShop/testAdvanceSearchDescription/testAdvanceSearchDescription-spec.js'
    ],

    testAdvanceSearchShortDescription: [
      './gfShop/testAdvanceSearchShortDescription/testAdvanceSearchShortDescription-spec.js'
    ],

    testAdvanceSearchPriceRange: [
      './gfShop/testAdvanceSearchPriceRange/testAdvanceSearchPriceRange-spec.js'
    ],

    testAdvanceSearchProductView: [
      './gfShop/testAdvanceSearchProductView/testAdvanceSearchProductView-spec.js'
    ],

    testCartBetweenShops: [
      './gfShop/testCartBetweenShops/testCartBetweenShops-spec.js'
    ],

    testCuddebackShipping: [
      './gfShop/testCuddebackShipping/testCuddebackShipping-spec.js'
    ],

    testAddBillingAddress: [
      './gfShop/testAddBillingAddress/testAddBillingAddress-spec.js'
    ],

    // Novi testovi 

    testOrderComplete: [
      './gfShop/testOrderComplete/testOrderComplete-spec.js'
    ],

    // testPrintShipment: [
    //   './gfShop/testPrintShipment/testPrintShipment-spec.js'
    // ],

    // testTrackShipment: [
    //   './gfShop/testTrackShipment/testTrackShipment-spec.js'
    // ],

    testCreditMemo: [
      './gfShop/testCreditMemo/testCreditMemo-spec.js'
    ],

    // testPrintRefundPage: [
    //   './gfShop/testPrintRefundPage/testPrintRefundPage-spec.js'
    // ],

    testTwoUsersTheSameProduct: [
      './gfShop/testTwoUsersTheSameProduct/testTwoUsersTheSameProduct-spec.js'
    ],
    
    testMyPaymentDataPage: [
      './gfShop/testMyPaymentDataPage/testMyPaymentDataPage-spec.js'
    ],  

  },

  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts : true,
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
    // Ovaj deo koda je za HTML reporter
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));

    // Ovaj deo koda je za Screenshotove
    var fs = require('fs-extra');

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('reports/GF/screenshots/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });
    // Ovaj deo koda je za Jasmin reporter u terminalu
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  },

  //HTMLReport called once tests are finished
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');
      var today = new Date(),
      timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + '-' + today.getMinutes() + '-' + + today.getSeconds();

      testConfig = {
        reportTitle: 'GF Shop Test Report',
        outputPath: './reports/GF/',
        outputFilename: 'GF Shop Test Report - '+timeStamp,
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }

};