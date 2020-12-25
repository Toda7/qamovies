var testUnavailableQuantityMessage = require('./testUnavailableQuantityMessage-po.js');

describe('Validation poruka za dodavanje previse proizvoda u korpu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testUnavailableQuantityMessage.landOnBowfishingPage();
        browser.sleep(4000)
    });

    it('Klik na Product', function () {
        testUnavailableQuantityMessage.click6Product();
    });

    it('Klik na Options', function () {
        testUnavailableQuantityMessage.clickOnOptions();
    });

    it('Selektovanje opcije', function () {
        testUnavailableQuantityMessage.clickOnOptions();
    });

    it('Unos broja producta', function () {
        testUnavailableQuantityMessage.enterNumber();
    });

    it('Click Add to Cart', function () {
        testUnavailableQuantityMessage.clickAddToCart();
    });

    it('Check error message', function () {
        testUnavailableQuantityMessage.checkErrorMsg();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});