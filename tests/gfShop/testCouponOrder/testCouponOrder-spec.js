var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testMyOrders = require('../testMyOrders/testMyOrders-po.js');
var testCouponOrder = require('./testCouponOrder-po.js');

describe('Coupon order', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na prvi proizvod', function () {
        testTwentyProductsOrder.click1stProduct();
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Provera shipping cene bez iskoriscenog kupona', function () {
        testCouponOrder.checkShippingPriceWithoutCoupon();
        browser.navigate().back();
    });

    it('Klik na Apply Discount Coupon link', function () {
        testCouponOrder.clickApplyDiscountCoupon();
    });

    it('Unesi kod kupona', function () {
        testCouponOrder.enterCouponCode();
    });

    it('Klik on Apply Discount button', function () {
        testCouponOrder.clickApplyDiscount();
    });

    it('Da li se pojavila poruka da je dobar kod kupona', function () {
        testCouponOrder.checkSuccessMessage();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Provera shipping cene sa iskoriscenim kuponom na Shipping strani', function () {
        testCouponOrder.checkShippingPriceWithCoupon();
    });

    
    it('Klik na first address to select it as ship address', function () {
        testCouponOrder.clickToSelectFirstAddressToShip();
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
    });

    it('Provera shipping cene sa iskoriscenim kuponom na Payment strani', function () {
        testCouponOrder.checkShippingPriceWithCoupon2();
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
    });

    it('Klik na prvi View Order link', function () {
        testMyOrders.clickFirstViewOrderLink();
    });

    it('Provera shipping cene sa iskoriscenim kuponom na My Order strani', function () {
        testCouponOrder.checkShippingPriceWithCoupon3();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});