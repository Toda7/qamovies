var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
// var testSearchShop = require('../testSearchShop/testSearchShop-po.js');
// var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
// var testMyAccount = require('../testMyAccount/testMyAccount-po.js');
var testSkuOneDrop = require('./testSkuOneDrop-po.js');

describe('Test SKU change - 1 drop down menu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na Sedmi proizvod', function () {
        testSkuOneDrop.click6thProduct();
    });

    it('Provera da li je dobar Parent SKU', function () {
        testSkuOneDrop.checkParentSku();
    });

    it('Izaberi opciju iz dropa', function () {
        testTwentyProductsOrder.chooseOption();
    });

    it('Provera da li je dobar SKU za prvi Child', function () {
        testSkuOneDrop.checkFirstChildSku();
    });

    it('Izaberi drugu opciju iz dropa', function () {
        testSkuOneDrop.chooseSecondOption();
    });

    it('Provera da li je dobar SKU za drugi Child', function () {
        testSkuOneDrop.checkSecondChildSku();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});