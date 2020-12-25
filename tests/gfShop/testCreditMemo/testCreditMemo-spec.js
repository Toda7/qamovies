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

    it('Refresh page', function(){
        // ovo koristimo zbog "Invalid session" errora u shopu 
        browser.refresh(); 
        browser.sleep(3000);
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
        browser.sleep(8000);
    });

    it('Klik na Orders', function(){
        testCreditMemo.clickOnOrdersLink();
        browser.sleep(7000);
    });

    it('Klik na poslednji Order', function(){
        testOrderComplete.clickOnOrdersLastOrder();
        browser.sleep(7000);
    });

    it('Klik na Credit Memo link', function(){
        testCreditMemo.clickOnCreditMemoLink();
        browser.sleep(7000);
    });

    it('Klik na Refunded offline ', function(){
        testCreditMemo.clickOnRefundedOfflineButton();
        browser.sleep(7000);
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
        testCreditMemo.clickOnOrderLink();
        browser.sleep(3000);
    });

    it('Provera da li se ucitala Refunded labela u listi ordera', function () {
        testCreditMemo.checkRefundedLabelInOrdersList();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao Close button za order details', function () {
        testCreditMemo.checkCloseButtonForOrderDetails();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao Print link', function () {
        testCreditMemo.checkPrintLink();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao logo trijicon brenda', function () {
        testCreditMemo.checkBrandLogoLink();
        browser.sleep(3000);
    });

    it('Provera da li se ucitala Refunded labela in order details', function () {
        testCreditMemo.checkRefundedLabelInOrderDetails();
        browser.sleep(3000);
    });

    it('Provera da li se ucitala Refunded labela in order details ', function () {
        testCreditMemo.checkProductDetails();
        browser.sleep(3000);
    });

    it('Provera cene za Subtotal, Shipping, Taxes, Total, Saving', function () {
        testCreditMemo.checkPricesSectionDetails();
        browser.sleep(3000);
    });

    it('Provera Shipping adrese', function () {
        testCreditMemo.checkShippingAddress();
        browser.sleep(3000);
    });

    it('Provera Shipping Method', function () {
        testCreditMemo.checkShippingMethod();
        browser.sleep(3000);
    });

    it('Provera Billing adrese', function () {
        testCreditMemo.checkBillingAddress();
        browser.sleep(3000);
    });

    it('PProvera Shipping Method', function () {
        testCreditMemo.checkPaymentMethod();
        browser.sleep(3000);
    });






    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});