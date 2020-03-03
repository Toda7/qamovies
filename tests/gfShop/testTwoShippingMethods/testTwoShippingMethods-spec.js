var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var prepareTestCreditCard = require('../prepareTestCreditCard/prepareTestCreditCard-po.js');
var testPoBoxAddressFromCheckout = require('../testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-po.js');
var testDeleteAddress = require('../testDeleteAddress/testDeleteAddress-po.js');
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

    it('Klik on NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnNewAddressButton();
    });

    it('Unesi Street', function () {
        testTwoShippingMethods.enterStreet();
    });

    it('Unesi city', function () {
        testTwoShippingMethods.enterCity();
    });

    it('Klik to select option from state drop', function () {
        testPoBoxAddressFromCheckout.clickToSelectProvince();
    });

    it('Unesi ZIP', function () {
        testTwoShippingMethods.enterZip();
    });

    it('Unesi phone number', function () {
        testPoBoxAddressFromCheckout.enterPhoneNumber();
    });

    it('Klik on SAVE ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnSaveNewAddressButton();
        browser.sleep(5000);
    });

    it('Klik on United Parcel Service opciju', function () {
        testTwoShippingMethods.clickUnitedParcelService();
        browser.sleep(5000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(5000);
    });

    it('Provera United Parcel shipping metode na Payment strani', function () {
        testTwoShippingMethods.checkUnitedParcelMethodOnPaymentPage();
        browser.navigate().back();
        browser.sleep(5000);
    });

    it('Dolazak na Shipping page', function () {
        testTwoShippingMethods.landOnShippingPage();
        browser.sleep(5000);
    });

    it('Klik on United States Postal Service opciju', function () {
        testTwoShippingMethods.clickUnitedStatesPostalService();
        browser.sleep(5000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(5000);
    });

    it('Provera United States Postal shipping metode na Payment strani', function () {
        testTwoShippingMethods.checkUnitedStatesPostalService();
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(5000);
    });

    it('Dolazak na Address Book page', function () {
        testTwoShippingMethods.landOnAddressBookPage();
    });

    it('Klik na Poslednje Delete Address dugme', function () {
        testTwoShippingMethods.clickLastDeleteAddress();
    });

    it('Klik on OK link to confirm delete ', function(){
        testDeleteAddress.clickToConfirmToDelete();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});