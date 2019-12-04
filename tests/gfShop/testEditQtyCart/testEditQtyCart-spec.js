var testEditQtyCart = require('./testEditQtyCart-po.js');

describe('Brisanje Producta sa Edit Cart strane', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testEditQtyCart.landOnBowfishingPage();
    });

    it('Klik na Product', function () {
        testEditQtyCart.click1Product();
    });

    it('Click Add to Cart', function () {
        testEditQtyCart.clickAddToCart();
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
    });

    it('Click On qty', function () {
        testEditQtyCart.clickOnQtyField();
    });

    it('Unos broja producta', function () {
        testEditQtyCart.enterNumber();
    });

    it('Klik na Update Cart', function () {
        testEditQtyCart.clickOnUpdate();
    });

    it('Check update success', function () {
        testEditQtyCart.checkSuccessEdit();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});