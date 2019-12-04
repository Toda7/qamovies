var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testCouponOrder = require('../testCouponOrder/testCouponOrder-po.js');
var testWrongCouponCode = require('./testWrongCouponCode-po.js');

describe('Wrong coupon code', function () {

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

    it('Unesi pogresan kod kupona', function () {
        testWrongCouponCode.enterWrongCouponCode();
    });

    it('Klik on Apply Discount button', function () {
        testCouponOrder.clickApplyDiscount();
    });

    it('Da li se pojavila validation poruka za pogresan kod kupona', function () {
        testWrongCouponCode.checkValidationMessage();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Provera shipping cene na Shipping strani', function () {
        testWrongCouponCode.checkShippingPrice1();
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
    });

    it('Provera shipping cene na Payment strani', function () {
        testWrongCouponCode.checkShippingPrice2();
    });

    it('Dolazak na Firearm Tactical page', function () {
        testWrongCouponCode.landOnFirearmTacticalPage();
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