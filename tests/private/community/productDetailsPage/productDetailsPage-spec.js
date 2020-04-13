var productDetailsPage = require('./productDetailsPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');
var productsPage = require('../productsPage/productsPage-po.js');

describe('Products details page', function () {

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

    it('Klik on prvi product link', function () {
        productDetailsPage.clickOnFirstProduct();
        browser.sleep(1000);
    }); 

    it('Provera da li se ucitao Breadcrumb u headeru', function () {
        productDetailsPage.checkBreadcrumbs();
    }); 

    it('Provera da li se ucitao drugi Breadcrumb u headeru', function () {
        productDetailsPage.checkSecondBreadcrumbs();
    }); 

    it('Provera da li se ucitao title of product', function () {
        productDetailsPage.checkTitleOfProduct();
    }); 

    it('Provera da li se ucitao link vendora', function () {
        productDetailsPage.checkLinkOfVendor();
    }); 

    it(' Klik on vendor link', function () {
        productDetailsPage.clickOnVendorLink();
        browser.sleep(1000);
    }); 

    it('Provera da li se ucitao vendor URL', function () {
        productDetailsPage.checkVendorURL();
        browser.navigate().back();
        browser.sleep(1000);
    }); 

    it('Provera da li se ucitao contact vendor button', function () {
        productDetailsPage.checkContactVendorButton();
    }); 

    it('Provera da li se ucitao description of product', function () {
        productDetailsPage.checkDescriptionOfProduct();
    }); 
    

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
