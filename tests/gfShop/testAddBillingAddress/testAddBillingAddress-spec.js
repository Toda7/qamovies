var testAddBillingAddress = require('./testAddBillingAddress-po.js');
var testCuddebackShipping = require('../testCuddebackShipping/testCuddebackShipping-po.js');
var testEditQtyCart = require('../testEditQtyCart/testEditQtyCart-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testMyOrders = require('../testMyOrders/testMyOrders-po.js');

describe('Add billing adresu i error poruke za required polja', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it(' Dolazak u Peak Shop', function(){
        testAddBillingAddress.landOnPeakShop();
    });

    it('Click na Cudelink sekciju', function(){
        testAddBillingAddress.clickOnMealsLink();
    });

    it('Click na product 1', function(){
        testCuddebackShipping.click1Product();
    });

    it('Dodavanje Producta u cart', function(){
        testCuddebackShipping.clickAddToCart();
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
    });

    it('Go to Checkout', function(){
        testCuddebackShipping.clickGoToCheckout();
        browser.sleep(2000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
    });

    it('Click na Uncheck same shipping and billing', function(){
        testAddBillingAddress.clickToUncheck();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});