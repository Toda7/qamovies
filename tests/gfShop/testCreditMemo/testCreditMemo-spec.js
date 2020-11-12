var testCreditMemo = require('../testCreditMemo/testCreditMemo-po.js');
var testPoBoxAddressFromCheckout = require('../testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPoBoxAddress = require('../testPoBoxAddress/testPoBoxAddress-po.js');
var testOrderComplete = require('../testOrderComplete/testOrderComplete-po.js');
var testAddBillingAddress = require('../testAddBillingAddress/testAddBillingAddress-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');
var testMyOrders = require('../testMyOrders/testMyOrders-po.js');
var testReturnPolicy = require('../testReturnPolicy/testReturnPolicy-po.js');


describe('Refunded order i cekiranje na my orders', function(){

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
    
    // logovanje u magentu vec postoji u testovima, zato je ovo zakomentarisano
    // it('Dolazak u magento', function(){
    //     testAddBillingAddress.lendOnMagento();
    //     browser.sleep(4000);
    // });

    // it('Unesi Username', function(){
    //     prepareMagentoCoupon.enterUsername();
    // });

    // it('Unesi Password', function(){
    //     prepareMagentoCoupon.enterPass();
    // });

    // it('Klik na Sign In dugme', function(){
    //     prepareMagentoCoupon.clickOnSignIn();
    //     browser.sleep(5000);
    // });

    it('Dolazak na user datails stranu u magentu', function(){
        testAddBillingAddress.goToUserDetail();
        browser.sleep(5000);
    });

    it('Klik na Orders', function(){
        testOrderComplete.clickOnOrdersLink();
        browser.sleep(2000);
    });

    it('Klik na poslednji Order', function(){
        testOrderComplete.clickOnOrdersLastOrder();
        browser.sleep(5000);
    });

    it('Klik na Credit Memo link', function(){
        testCreditMemo.clickOnCreditMemoLink();
        browser.sleep(5000);
    });

    it('Klik na Refunded offline ', function(){
        testCreditMemo.clickOnRefundedOfflineButton();
        browser.sleep(5000);
    });

    it('Dolazak na my account page page', function(){
        testReturnPolicy.landOnMyAccountPage();
        browser.sleep(5000);
    });

    it('Provera da li se ucitala Closed labela', function () {
        testCreditMemo.checkClosedLabel();
        browser.sleep(1000);
    });

    it('Klik na prvi View Order link', function () {
        testOrderComplete.clickOnOrderView();
        browser.sleep(3000);
    });

    it('Provera da li se ucitala Closed labela na order details strani', function () {
        testCreditMemo.checkClosedLabelOnOrderDetailsPage();
        browser.sleep(3000);
    });

    it('Klik na Refunds da bi dobili Refund tab', function () {
        testCreditMemo.clickOnRefundsToGetRefundTab();
        browser.sleep(3000);
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

    it('Da li se ucitao Print Refunded link', function () {
        testCreditMemo.checkPrintRefundedLink;
        browser.sleep(1000);
    });



    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});