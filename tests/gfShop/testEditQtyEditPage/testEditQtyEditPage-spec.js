var testEditQtyEditPage = require('./testEditQtyEditPage-po.js');

describe('Edit qty na edit cart strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testEditQtyEditPage.landOnBowfishingPage();
    });

    it('Klik na Product', function () {
        testEditQtyEditPage.click1Product();
    });

    it('Click Add to Cart', function () {
        testEditQtyEditPage.clickAddToCart();
    });

    it('Click On Cart', function () {
        testEditQtyEditPage.clickOnCart();
    });

    it('Click On View and Edit', function () {
        testEditQtyEditPage.clickOnViewEdit();
    });

    it('Check URL View and Edit', function () {
        testEditQtyEditPage.checkViewEditCartURL();
    });

    it('klik na qty opolje', function () {
        testEditQtyEditPage.clickOnQtyField();
    });
    
    it('Unos broja Productae', function () {
        testEditQtyEditPage.enterNumber();
    });

    it('Click na Update button', function () {
        testEditQtyEditPage.clickOnUpadateCart();
    });

    it('Check edit success', function () {
        testEditQtyEditPage.checkSuccessEdit();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});