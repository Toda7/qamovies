var testEditQtyEditPage = require('./testEditQtyEditPage-po.js');

describe('Edit qty na edit cart strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testEditQtyEditPage.landOnBowfishingPage();
        browser.sleep(3000);
    });

    it('Klik na Product', function () {
        testEditQtyEditPage.click1Product();
        browser.sleep(3000);
    });

    it('Click Add to Cart', function () {
        testEditQtyEditPage.clickAddToCart();
        browser.sleep(3000);
    });

    it('Click On Cart', function () {
        testEditQtyEditPage.clickOnCart();
        browser.sleep(3000);
    });

    it('Click On View and Edit', function () {
        testEditQtyEditPage.clickOnViewEdit();
        browser.sleep(3000);
    });

    it('Check URL View and Edit', function () {
        testEditQtyEditPage.checkViewEditCartURL();
        browser.sleep(3000);
    });

    it('klik na qty polje', function () {
        testEditQtyEditPage.clickOnQtyField();
        browser.sleep(3000);
    });
    
    it('Unos broja Producta', function () {
        testEditQtyEditPage.enterNumber();
        browser.sleep(3000);
    });

    it('Click na Update button', function () {
        testEditQtyEditPage.clickOnUpadateCart();
        browser.sleep(5000);
    });

    it('Check edit success', function () {
        testEditQtyEditPage.checkSuccessEdit();
        browser.sleep(3000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});