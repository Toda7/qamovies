var testPoBoxAddressFromCheckout = require('./testPoBoxAddressFromCheckout-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPoBoxAddress = require('../testPoBoxAddress/testPoBoxAddress-po.js');

describe('Test PO box address from checkout', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
    it('Dolazak na product details', function(){
        testPoBoxAddressFromCheckout.lendOnProductDetails();
        browser.sleep(5000);
    });

    it('Klik na Add To Cart', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(6000);
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
        browser.sleep(2000);
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
        browser.sleep(2000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(5000);
    });

    it('Klik on NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnNewAddressButton();
        browser.sleep(2000);
    });

    it('Unesi Street', function () {
        testPoBoxAddressFromCheckout.enterStreet();
        browser.sleep(2000);
    });

    it('Unesi city', function () {
        testPoBoxAddressFromCheckout.enterCity();
        browser.sleep(1000);
    });
    it('Klik to select option from state drop', function () {
        testPoBoxAddressFromCheckout.clickToSelectProvince();
        browser.sleep(4000);
    });

    it('Unesi zip', function () {
        testPoBoxAddressFromCheckout.enterZip();
        browser.sleep(2000);
    });

    it('Unesi phone number', function () {
        testPoBoxAddressFromCheckout.enterPhoneNumber();
        browser.sleep(2000);
    });

    it('Klik on SAVE NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnSaveNewAddressButton();
        browser.sleep(7000);
    });

    it('Provera da li se pojavila restricted message', function () {
        testPoBoxAddress.checkPoBoxNotAllowedMessage();
        browser.sleep(2000);
    });

    it('Klik na Ship here button za prvi adresu', function () {
        testPoBoxAddressFromCheckout.clickOnShipHereButtonForFirstAddress();
        browser.sleep(3000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(5000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(4000);
    });
    

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});