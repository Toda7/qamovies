var testColorLinksOnProductsListPage = require('./testColorLinksOnProductsListPage-po.js');

describe('Color and more link on list products', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na list of products', function () {
        testColorLinksOnProductsListPage.lendOnProductsLinks();
    });

    it('Klik on More link for first product', function () {
        testColorLinksOnProductsListPage.clickOnMore();
    });

    it('Klik on last color for first product', function () {
        testColorLinksOnProductsListPage.clickOnLastColorForFirstProduct();
    });

    it('Klik on Add to cart', function () {
        testColorLinksOnProductsListPage.clickOnAddToCart();
    });

    it('Provera product URL-a', function () {
        testColorLinksOnProductsListPage.checkProductURL();
    });

    it('Provera product SKU-a', function () {
        testColorLinksOnProductsListPage.checkSku();
    });

    
    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});