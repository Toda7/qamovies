var testPoBoxAddressFromCheckout = require('../testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPoBoxAddress = require('../testPoBoxAddress/testPoBoxAddress-po.js');
var testOrderComplete = require('../testOrderComplete/testOrderComplete-po.js');
var testAddBillingAddress = require('../testAddBillingAddress/testAddBillingAddress-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');
var testMyOrders = require('../testMyOrders/testMyOrders-po.js');


describe('Complete order i cekiranje na my orders', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product details', function(){
        testOrderComplete.lendOnProductDetails();
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

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(10000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(10000);
    });
    
    // it('Dolazak u magento', function(){
    //     testAddBillingAddress.lendOnMagento();
    // });

    // it('Unesi Username', function(){
    //     prepareMagentoCoupon.enterUsername();
    // });

    // it('Unesi Password', function(){
    //     prepareMagentoCoupon.enterPass();
    // });

    // it('Klik na Sign In dugme', function(){
    //     prepareMagentoCoupon.clickOnSignIn();
    // });

    it('Dolazak na user datail', function(){
        testAddBillingAddress.goToUserDetail();
        browser.sleep(5000);
    });

    it('Klik na Orders', function(){
        testOrderComplete.clickOnOrdersLink();
        browser.sleep(2000);
    });

    it('Klik na poslednji Order', function(){
        testOrderComplete.clickOnOrdersLastOrder();
        browser.sleep(2000);
    });

    it('Klik na Ship', function(){
        testOrderComplete.clickOnShip();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za scroll', function () {
        var step;
        for (step = 0; step < 1; step++) {
            testOrderComplete.scrollPage();
            browser.sleep(3000);
        }
    });

    it('Klik na Add trucking number', function(){
        testOrderComplete.clickOnAddNumber();
        browser.sleep(3000);
    });

    it('Dodavanje trucking number-a ', function(){
        testOrderComplete.addNumber();
        browser.sleep(3000);
    });

    it('Submit Shippment', function(){
        testOrderComplete.clickOnSubmitShip();
        browser.sleep(3000);
    });

    it('Dolazak na My Account', function(){
        testOrderComplete.landOnMyAccount();
        browser.sleep(3000);
    });

    it('Cekiranje da li je Order Complete', function(){
        testOrderComplete.checkIfOrderComplete();
        browser.sleep(2000);
    });

    it('Klik na prvi View Order link', function () {
        testOrderComplete.clickOnOrderView();
        browser.sleep(3000);
    });

    it('Klik na Order Shippment', function () {
        testOrderComplete.clickOnOrderShippments();
        browser.sleep(5000);
    });

    it('Cekiranje Tracking Numbera', function () {
        testOrderComplete.checkTrackNumber();
        browser.sleep(1000);
    });

    it('Cekiranje Imena Producta', function () {
        testOrderComplete.checkProductName();
        browser.sleep(1000);
    });

    it('Cekiranje SKU-a', function () {
        testOrderComplete.checkProductSKU();
        browser.sleep(1000);
    });

    it('Cekiranje QTY-a', function () {
        testOrderComplete.checkQtyShipped;
        browser.sleep(1000);
    });

    it('Da li se ucitao Print Order Link', function () {
        testOrderComplete.checkPrintOrderLink;
        browser.sleep(1000);
    });

    it('Da li se ucitao Print All Shippments Link', function () {
        testOrderComplete.checkPrintAllShipLink;
        browser.sleep(1000);
    });

    it('Da li se ucitao Print Shippment Link', function () {
        testOrderComplete.checkPrintShippmentLink;
        browser.sleep(1000);
    });

    it('Da li se ucitao Track All Shippments Link', function () {
        testOrderComplete.checkTrackAllShipmentsLink;
        browser.sleep(1000);
    });

    it('Da li se ucitao Track This Shippment Link', function () {
        testOrderComplete.checkTrackThisShipmentsLink;
        browser.sleep(1000);
    });

    it('Cekiranje Shipping Address', function () {
        testOrderComplete.checkShippingAddressSection;
        browser.sleep(1000);
    });

    it('Cekiranje Billing Addrese', function () {
        testOrderComplete.checkBilingAddressSection;
        browser.sleep(1000);
    });

    it('Cekiranje Payment Metod sekcije', function () {
        testOrderComplete.checkPaymentSection;
        browser.sleep(1000);
    });



    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});