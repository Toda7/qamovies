var testAddBillingAddress = require('./testAddBillingAddress-po.js');
var testCuddebackShipping = require('../testCuddebackShipping/testCuddebackShipping-po.js');
var testEditQtyCart = require('../testEditQtyCart/testEditQtyCart-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');

describe('Add billing adresu i error poruke za required polja', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it(' Dolazak u Peak Shop', function () {
        testAddBillingAddress.landOnPeakShop();
    });

    it('Click na Cudelink sekciju', function () {
        testAddBillingAddress.clickOnMealsLink();
    });

    it('Click na product 1', function () {
        testCuddebackShipping.click1Product();
    });

    it('Dodavanje Producta u cart', function () {
        testCuddebackShipping.clickAddToCart();
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
    });

    it('Go to Checkout', function () {
        testCuddebackShipping.clickGoToCheckout();
        browser.sleep(2000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(5000);
    });

    it('Click na Uncheck same shipping and billing', function () {
        testAddBillingAddress.clickToUncheck();
    });

    it('Click na Address select', function () {
        testAddBillingAddress.clickOnAddressSelect();
    });

    it('Brisanje imena', function () {
        testAddBillingAddress.deleteFirstName();
    });

    it('Check error poruke za first name', function () {
        testAddBillingAddress.checkMsg1();
    });

    it('Brisanje prezimena', function () {
        testAddBillingAddress.deleteLastName();
    });

    it('Check error poruke za last name', function () {
        testAddBillingAddress.checkMsg2();
    });

    it('Klik na Update dugme', function () {
        testAddBillingAddress.clickOnUpdate();
    });

    it('Check error poruke za Street', function () {
        testAddBillingAddress.checkMsg3();
    });

    it('Check error poruke za City', function () {
        testAddBillingAddress.checkMsg4();
    });

    it('Check error poruke za State/Province', function () {
        testAddBillingAddress.checkMsg5();
    });

    it('Check error poruke za ZIP code', function () {
        testAddBillingAddress.checkMsg6();
    });

    it('Check error poruke za Phone number', function () {
        testAddBillingAddress.checkMsg7();
    });

    it('Unosenje First name', function () {
        testAddBillingAddress.enterFirstName();
    });

    it('Unosenje Last name', function () {
        testAddBillingAddress.enterLastName();
    });

    it('Unosenje street Address', function () {
        testAddBillingAddress.enterStreetAddress();
    });

    it('Unosenje City', function () {
        testAddBillingAddress.enterCity();
    });

    it('Select State', function () {
        testAddBillingAddress.clickToSelectProvince();
    });

    it('Unosenje Zip coda', function () {
        testAddBillingAddress.enterZip();
    });

    it('Unosenje telefona', function () {
        testAddBillingAddress.enterPhone();
    });

    it('Klik na Update dugme', function () {
        testAddBillingAddress.clickOnUpdate();
    });

    it('Klik na PlaceOrder', function () {
        testAddBillingAddress.clickPlaceOrder();
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
    });

    it('Click na address', function(){
        testAddBillingAddress.clickOnAddressesLink();
    });

    it('Click Remove link', function(){
        testAddBillingAddress.clickOnRemoveLink();
    });

    it('Confirm delete address', function(){
        testAddBillingAddress.clickToConfirmDelete();
    });

    it('Click na Save', function(){
        testAddBillingAddress.clickOnSaveButton();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});