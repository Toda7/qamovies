var testCuddebackShipping = require('./testCuddebackShipping-po.js');
var testEditQtyCart = require('../testEditQtyCart/testEditQtyCart-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testMyOrders = require('../testMyOrders/testMyOrders-po.js');

describe('Test Shipping Cuddeback shop', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it(' Dolazak u Cuddeback Shop', function(){
        testCuddebackShipping.landOnCuddebackShop();
        browser.sleep(4000)
    });

    it('Click na Cudelink sekciju', function(){
        testCuddebackShipping.clickOnCuddeLink();
        browser.sleep(4000);
    });

    it('Click na product 1', function(){
        testCuddebackShipping.click1Product();
        browser.sleep(4000);
    });

    it('Dodavanje Producta u cart', function(){
        testCuddebackShipping.clickAddToCart();
        browser.sleep(4000);
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
        browser.sleep(4000);
    });

    it('Go to Checkout', function(){
        testCuddebackShipping.clickGoToCheckout();
        browser.sleep(7000);
    });

    it('Check shipping to be 10$', function(){
        testCuddebackShipping.checkShipping1Product();
        browser.navigate().back();
        browser.sleep(2000);
    });

    it(' Dolazak u Cuddeback Shop', function(){
        testCuddebackShipping.landOnCuddebackShop();
        browser.sleep(2000);
    });

    it('Click na Cudelink sekciju', function(){
        testCuddebackShipping.clickOnCuddeLink();
        browser.sleep(2000);
    });

    it('Click na product 2', function(){
        testCuddebackShipping.click2Product();
        browser.sleep(2000);
    });

    it('Dodavanje Producta u cart', function(){
        testCuddebackShipping.clickAddToCart();
        browser.sleep(2000);
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
        browser.sleep(2000);
    });

    it('Go to Checkout', function(){
        testCuddebackShipping.clickGoToCheckout();
        browser.sleep(5000);
    });

    it('Check shipping to be 13$', function(){
        testCuddebackShipping.checkShipping2Product();
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Dolazak u Cuddeback Shop', function(){
        testCuddebackShipping.landOnCuddebackShop();
        browser.sleep(3000);
    });

    it('Click na Cudelink sekciju', function(){
        testCuddebackShipping.clickOnCuddeLink();
        browser.sleep(2000);
    });

    it('Click na product 3', function(){
        testCuddebackShipping.click3Product();
        browser.sleep(2000);
    });

    it('Dodavanje Producta u cart', function(){
        testCuddebackShipping.clickAddToCart();
        browser.sleep(2000);
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
        browser.sleep(2000);
    });

    it('Go to Checkout', function(){
        testCuddebackShipping.clickGoToCheckout();
        browser.sleep(7000);
    });

    it('Check shipping to be 16$', function(){
        testCuddebackShipping.checkShipping3Product();
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(5000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(5000);
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
        browser.sleep(5000);
    });

    it('Klik na prvi View Order link', function () {
        testMyOrders.clickFirstViewOrderLink();
        browser.sleep(3000);
    });

    it('Order detail shipping to be 16$', function(){
        testCuddebackShipping.checkShippingPriceWithCoupon();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});