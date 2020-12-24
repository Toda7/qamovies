var testProductMessage = require('./testProductMessage-po.js');

describe('Validation poruka za dodavanje previse proizvoda u korpu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testProductMessage.landOnBowfishingPage();
        browser.sleep(4000)
    });

    it('Klik na Product', function () {
        testProductMessage.click6Product();
    });

    it('Klik na Options', function () {
        testProductMessage.clickOnOptions();
    });

    it('Selektovanje opcije', function () {
        testProductMessage.clickOnOptions();
    });

    it('Unos broja producta', function () {
        testProductMessage.enterNumber();
    });

    it('Click Add to Cart', function () {
        testProductMessage.clickAddToCart();
    });

    it('Check error message', function () {
        testProductMessage.checkErrorMsg();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});