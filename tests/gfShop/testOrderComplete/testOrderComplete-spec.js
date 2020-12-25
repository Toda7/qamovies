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
        browser.refresh();
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
        browser.sleep(6000);
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

    it('Dolazak My Orders stranu', function(){
        testOrderComplete.landOnMyOrders();
        browser.sleep(2000);
    });

    it('Klik na prvi View Order link', function () {
        testOrderComplete.clickOnOrderView();
        browser.sleep(3000);
    });

    it('Cekiranje Order Shipped labele u Order listi', function () {
        testOrderComplete.checkOrderShippedLabelInOrderList();
        browser.sleep(1000);
    });

    it('Cekiranje Order Shipped labele u Order Details', function () {
        testOrderComplete.checkOrderShippedLabelInOrderDetails();
        browser.sleep(1000);
    });

    it('Klik na naziv proizvoda u orderu', function () {
        testOrderComplete.clickProductName();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
        browser.sleep(3000);
    });

    it('Provera URL-a na product details u Shopu', function () {
        testOrderComplete.checkShopProductUrl();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(1000);
    });

    it('Provera SKU-a u Order Details', function () {
        testOrderComplete.checkProductSKU();
        browser.sleep(1000);
    });

    it('Provera Qty i Cene', function () {
        testOrderComplete.checkQtyAndPrice();
        browser.sleep(1000);
    });

    it('Klik na Leave Review link u orderu', function () {
        testOrderComplete.clickLeaveReview();
        browser.sleep(1000);
    });

    it('Provera URL-a na Create Review strani', function () {
        testOrderComplete.checkCreateReviewUrl();
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Provera Shipping adrese', function () {
        testOrderComplete.checkShippingAddress();
        browser.sleep(1000);
    });

    it('Provera Shipping Method', function () {
        testOrderComplete.checkShippingMethod();
        browser.sleep(1000);
    });

    it('Provera Billing adrese', function () {
        testOrderComplete.checkBillingAddress();
        browser.sleep(1000);
    });

    it('Provera Payment Method', function () {
        testOrderComplete.checkPaymentMethod();
        browser.sleep(1000);
    });

    // it('Klik na Print link', function () {
    //     testOrderComplete.clickPrintLink();
    //     browser.getAllWindowHandles().then(function (handles) {
    //         browser.switchTo().window(handles[1]);
    //         browser.sleep(5000);
    //     });
    // });

    // it('Klik Escape na tastaturi', function () {
    //     testOrderComplete.clickEsc();
    //     browser.getAllWindowHandles().then(function (handles) {
    //         browser.switchTo().window(handles[1]);
    //         browser.sleep(3000);
    //     });
    // });

    // it('Cekiranje Order Shipped labele na Print Order strani', function () {
    //     testOrderComplete.checkOrderShippedLabelInPrintOrder();
    //     browser.sleep(2000);
    // });

    it('Provera da li na strani postoji Print link', function () {
        testOrderComplete.checkIfPrintLinkIsPresent();
        browser.sleep(1000);
    });

    it('Klik na Close link', function () {
        testOrderComplete.clickCloseLink();
        browser.sleep(1000);
    });

    it('Provera Important texta kada je zatvorena Order Details sekcija', function () {
        testOrderComplete.checkImportantText2();
        browser.sleep(1000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});