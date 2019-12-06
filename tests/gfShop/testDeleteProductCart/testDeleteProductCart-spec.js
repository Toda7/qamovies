var testDeleteProductCart = require('./testDeleteProductCart-po.js');

describe('Brisanje Producta iz Mini Carta', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testDeleteProductCart.landOnBowfishingPage();
    });

    it('Klik na Product', function () {
        testDeleteProductCart.click1Product();
    });

    it('Click Add to Cart', function () {
        testDeleteProductCart.clickAddToCart();
    });

    it('Check Success message', function () {
        testDeleteProductCart.checkSuccessMsg();
    });

    it('Click on Cart', function () {
        testDeleteProductCart.clickOnCart();
    });

    it('Click on Delete icon', function () {
        testDeleteProductCart.clickOnDelete();
    });

    it('Potvrda brisanja Producta', function () {
        testDeleteProductCart.clickOnDeleteConfirmation();
    });

    it('Potvrda Empty Carta', function () {
        testDeleteProductCart.checkEmptyCart();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
