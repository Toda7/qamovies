var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testMyOrders = require('../testMyOrders/testMyOrders-po.js');
var testCouponOrder = require('./testCouponOrder-po.js');

describe('Coupon order', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
        browser.sleep(5000);
    });

    it('Klik na prvi proizvod', function () {
        testTwentyProductsOrder.click1stProduct();
        browser.sleep(2000);
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(2000);
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

    it('Provera shipping cene bez iskoriscenog kupona', function () {
        testCouponOrder.checkShippingPriceWithoutCoupon();
        browser.navigate().back();
    });

    it('Povratak na view and edit cart stranu', function () {
        testCouponOrder.landOnViewAndEditCart();
        browser.sleep(5000);
    });

    it('Klik na Apply Discount Coupon link', function () {
        testCouponOrder.clickApplyDiscountCoupon();
        browser.sleep(1000);
    });

    it('Unesi kod kupona', function () {
        testCouponOrder.enterCouponCode();
        browser.sleep(1000);
    });

    it('Klik on Apply Discount button', function () {
        testCouponOrder.clickApplyDiscount();
        browser.sleep(5000);
    });

    it('Da li se pojavila poruka da je dobar kod kupona', function () {
        testCouponOrder.checkSuccessMessage();
        browser.sleep(1000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(5000);
    });

    it('Provera shipping cene sa iskoriscenim kuponom na Shipping strani', function () {
        testCouponOrder.checkShippingPriceWithCoupon();
        browser.sleep(1000);
    });

    
    it('Klik na first address to select it as ship address', function () {
        testCouponOrder.clickToSelectFirstAddressToShip();
        browser.sleep(1000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(5000);
    });

    it('Provera shipping cene sa iskoriscenim kuponom na Payment strani', function () {
        testCouponOrder.checkShippingPriceWithCoupon2();
        browser.sleep(2000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(4000);
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
        browser.sleep(3000);
    });

    it('Klik na prvi View Order link', function () {
        testMyOrders.clickFirstViewOrderLink();
        browser.sleep(3000);
    });

    it('Provera shipping cene sa iskoriscenim kuponom na My Order strani', function () {
        testCouponOrder.checkShippingPriceWithCoupon3();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});