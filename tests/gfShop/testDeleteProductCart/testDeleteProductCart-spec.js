var testDeleteProductCart = require('./testDeleteProductCart-po.js');

describe('Brisanje Producta iz Mini Carta', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testDeleteProductCart.landOnBowfishingPage();
        browser.sleep(3000);
    });

    it('Klik na Product', function () {
        testDeleteProductCart.click1Product();
        browser.sleep(3000);
    });

    it('Click Add to Cart', function () {
        testDeleteProductCart.clickAddToCart();
        browser.sleep(5000);
    });

    it('Check Success message', function () {
        testDeleteProductCart.checkSuccessMsg();
        browser.sleep(3000);
    });

    it('Click on Cart', function () {
        testDeleteProductCart.clickOnCart();
        browser.sleep(3000);
    });

    it('Click on Delete icon', function () {
        testDeleteProductCart.clickOnDelete();
        browser.sleep(3000);
    });

    it('Potvrda brisanja Producta', function () {
        testDeleteProductCart.clickOnDeleteConfirmation();
        browser.sleep(3000);
    });

    it('Potvrda Empty Carta', function () {
        testDeleteProductCart.checkEmptyCart();
        browser.sleep(3000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
