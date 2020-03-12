var productsPage = require('./productsPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');



describe('Products page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na vendor directory page', function () {
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Unosenje texta u search polje', function () {
        searchOnVendorDirectoryPage.enterearchWord();
        browser.sleep(5000);
    });

    it('Klik na vendor name', function () {
        followUnfollowVendor.clickOnVendorName();
        browser.sleep(5000);
    });

    it('Klik on PRODUCTS link', function () {
        productsPage.clickOnProductsLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao prvi product', function () {
        productsPage.checkFristProductOnPage();
    });


    it('Provera da li se ucitao drugi product', function () {
        productsPage.checkSecondProductOnPage();
    });


    it('Provera da li se ucitao treci product', function () {
        productsPage.checkThirdProductOnPage();
    });

    


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
