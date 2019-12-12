var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var prepareTestCreditCard = require('../prepareTestCreditCard/prepareTestCreditCard-po.js');
var testSaveInAddressBookOptionForNewAddress = require('../testSaveInAddressBookOptionForNewAddress/testSaveInAddressBookOptionForNewAddress-po.js');
var testTwoShippingMethods = require('./testTwoShippingMethods-po.js');

describe('Two Shipping methods', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Product Details page', function () {
        testTwoShippingMethods.landOnProductDetailsPage();
    });

    it('Dodaj proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
    });

    it('Klik Go To Checkout page', function(){
        prepareTestCreditCard.clickToGoToCheckoutPage();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});