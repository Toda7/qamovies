var productDetailsPageFromSimilarProducts = require('./productDetailsPageFromSimilarProducts-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');
var productsPage = require('../productsPage/productsPage-po.js');
var productDetailsPage = require('../productDetailsPage/productDetailsPage-po.js');



describe('Products details page from Similar Products', function () {

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

    it('Klik on product iz Similar Products sekcije', function () {
        productDetailsPageFromSimilarProducts.clickOnDocumentFromSimilarProducts();
        browser.sleep(1000);
    }); 

    it('Provera da li se ucitao Breadcrumb u headeru', function () {
        productDetailsPageFromSimilarProducts.checkBreadcrumbs();
    }); 

    it('Provera da li se ucitao drugi Breadcrumb u headeru', function () {
        productDetailsPageFromSimilarProducts.checkSecondBreadcrumbs();
    }); 

    it('Provera da li se ucitao title of product', function () {
        productDetailsPageFromSimilarProducts.checkTitleOfProduct();
    }); 

    it('Provera da li se ucitao link vendora', function () {
        productDetailsPageFromSimilarProducts.checkLinkOfVendor();
    }); 

    it('Provera da li se ucitao contact vendor button', function () {
        productDetailsPageFromSimilarProducts.checkContactVendorButton();
    }); 

    it('Provera da li se ucitao description of product', function () {
        productDetailsPageFromSimilarProducts.checkDescriptionOfProduct();
    }); 

    it('Provera da li se ucitao title of product for product in similar section', function () {
        productDetailsPageFromSimilarProducts.checkTitleOfProductInSimilarSection();
    }); 
    

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
