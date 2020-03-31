var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testCouponOrder = require('../testCouponOrder/testCouponOrder-po.js');
var testWrongCouponCode = require('../testWrongCouponCode/testWrongCouponCode-po.js');
var testCancelCoupon = require('./testCancelCoupon-po.js');

describe('Cancel coupon order', function () {

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

    it('Klik on Cancel Coupon button', function () {
        testCancelCoupon.clickCancelCoupon();
    });

    it('Da li se pojavila poruka da je otkazan kupon kod', function () {
        testCancelCoupon.checkCancelCouponSuccessMessage();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Provera shipping cene bez iskoriscenog kupona', function () {
        testCouponOrder.checkShippingPriceWithoutCoupon();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
    });

    it('Isprazni korpu', function () {
        testWrongCouponCode.emptyCart();
    });

    it('Klik OK za potvrdu brisanja', function () {
        testWrongCouponCode.confirmDelete();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});