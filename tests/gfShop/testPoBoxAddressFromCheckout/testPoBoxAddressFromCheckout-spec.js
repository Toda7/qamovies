var testPoBoxAddressFromCheckout = require('./testPoBoxAddressFromCheckout-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPoBoxAddress = require('../testPoBoxAddress/testPoBoxAddress-po.js');

describe('Test restricted area message from checkout', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
    it('Dolazak na product details', function(){
        testPoBoxAddressFromCheckout.lendOnProductDetails();
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(6000);
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Klik on NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnNewAddressButton();
    });

    it('Unesi Street', function () {
        testPoBoxAddressFromCheckout.enterStreet();
    });

    it('Unesi city', function () {
        testPoBoxAddressFromCheckout.enterCity();
    });
    it('Klik to select option from state drop', function () {
        testPoBoxAddressFromCheckout.clickToSelectProvince();
    });

    it('Unesi zip', function () {
        testPoBoxAddressFromCheckout.enterZip();
    });

    it('Unesi phone number', function () {
        testPoBoxAddressFromCheckout.enterPhoneNumber();
    });

    it('Klik on SAVE NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnSaveNewAddressButton();
    });

    it('Provera da li se pojavila restricted message ', function () {
        testPoBoxAddress.checkPoBoxNotAllowedMessage();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});