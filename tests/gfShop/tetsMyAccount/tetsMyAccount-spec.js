// var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testSearchShop = require('../testSearchShop/testSearchShop-po.js');
// var tetsMyAccount = require('./tetsMyAccount-po.js');

describe('My Account', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testSearchShop.landOnShopHomepage();
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});