var testEditQtyCart = require('./testEditQtyCart-po.js');

describe('Editovanje QTY iz mini cart-a', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testEditQtyCart.landOnBowfishingPage();
        browser.sleep(3000);
    });

    it('Klik na Product', function () {
        testEditQtyCart.click1Product();
        browser.sleep(3000);
    });

    it('Click Add to Cart', function () {
        testEditQtyCart.clickAddToCart();
        browser.sleep(3000);
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
        browser.sleep(3000);
    });

    it('Click On qty', function () {
        testEditQtyCart.clickOnQtyField();
        browser.sleep(3000);
    });

    it('Unos broja producta', function () {
        testEditQtyCart.enterNumber();
        browser.sleep(3000);
    });

    it('Klik na Update Cart', function () {
        testEditQtyCart.clickOnUpdate();
        browser.sleep(3000);
    });

    it('Check update success', function () {
        testEditQtyCart.checkSuccessEdit();
        browser.sleep(3000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});