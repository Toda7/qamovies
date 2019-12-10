var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var prepareTestCreditCard = require('../prepareTestCreditCard/prepareTestCreditCard-po.js');
var testSaveCcForNextTime = require('./testSaveCcForNextTime-po.js');

describe('Coupon order', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na drugi proizvod', function () {
        testTwentyProductsOrder.click2ndProduct();
    });

    it('Dodaj drugi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
    });

    it('Klik Go To Checkout page', function(){
        prepareTestCreditCard.clickToGoToCheckoutPage();
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
    });

    it('Klik on credit cart to open drop ', function(){
        prepareTestCreditCard.clickOnCreditCartToOpenDrop();
    });

    it('Klik to add new card', function(){
        prepareTestCreditCard.clickToAddNewCard();
    });

    it('Unosenje broja kreditne kartice', function(){
        testSaveCcForNextTime.enterCreditCardNumber();
    });

    it('Klik to open month drop', function(){
        prepareTestCreditCard.clickToOpenMonth();
    });

    it('Biranje meseca', function(){
        prepareTestCreditCard.selectMonth();
    });

    it('Klik to open year drop', function(){
        prepareTestCreditCard.clickToOpenYear();
    });

    it('Selektovanje godine', function(){
        prepareTestCreditCard.selectYear();
    });

    it('Unosenje cvv broja', function(){
        prepareTestCreditCard.enterCvvNumber();
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});