var testDeleteProductEditCart = require('./testDeleteProductEditCart-po.js');

describe('Brisanje Producta sa Edit Cart strane', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testDeleteProductEditCart.landOnBowfishingPage();
    });

    it('Klik na Product', function () {
        testDeleteProductEditCart.click1Product();
    });

    it('Click Add to Cart', function () {
        testDeleteProductEditCart.clickAddToCart();
    });

    it('Click On Cart', function () {
        testDeleteProductEditCart.clickOnCart();
    });

    it('Click na View&Edit cart', function () {
        testDeleteProductEditCart.clickOnViewEditCart();
    });

    it('Check View&Edit URL', function () {
        testDeleteProductEditCart.checkViewEditCartURL();
    });

    it('Click on Delete Product', function () {
        testDeleteProductEditCart.clickOnDeleteProductIcon();
    });

    it('Cekira da li je Cart Empty', function () {
        testDeleteProductEditCart.checkEmptyCart();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});