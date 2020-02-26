var testSearchShop = require('./testSearchShop-po.js');

describe('Test Search in Shop', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Truglo Shop homepage', function () {
        testSearchShop.landOnShopHomepage();
    });

    it('Unesi titanium u search polje', function () {
        testSearchShop.enterSearchWord1();
    });

    it('Provera da li je dobar prvi search', function () {
        testSearchShop.checkSuccess1();
    });

    it('Unesi splatter u search polje', function () {
        testSearchShop.enterSearchWord2();
    });

    it('Provera da li je dobar drugi search search', function () {
        testSearchShop.checkSuccess2();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});