var contactVendorFromProduct = require('./contactVendorFromProduct-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');
var productsPage = require('../productsPage/productsPage-po.js');
var productDetailsPage = require('../productDetailsPage/productDetailsPage-po.js');



describe('Contact vendor from product details page', function () {

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

    it('Klik on CONTACT VENDOR button', function () {
        contactVendorFromProduct.clickOnContactVendorButton();
        browser.sleep(1000);
    }); 

    it('Provera da li se ucitao Contact Vendor title', function () {
        contactVendorFromProduct.checkContactVendorTitle();
    }); 

    it('Provera da li se ucitao description on page', function () {
        contactVendorFromProduct.checkDescriotionOnPage();
    }); 

    it('Provera da li se ucitao placeholder in message field', function () {
        contactVendorFromProduct.checkPlaceholderInField();
    }); 

    it('Provera da li se ucitao SEND button', function () {
        contactVendorFromProduct.checkSendButton();
    }); 

    it('Provera da li se ucitao CANCEL button', function () {
        contactVendorFromProduct.checkCancelButton();
    }); 

    it('Unosenje texta u polje za poruku', function () {
        contactVendorFromProduct.enterMessageInField();
        browser.sleep(1000);
    }); 

    it('Klik na SEND button', function () {
        contactVendorFromProduct.clickOnSendButton();
        browser.sleep(1500);
    }); 
    
    it('Provera snackbar poruke za send message to vendor', function () {
        contactVendorFromProduct.checkSnackbarMessageForSendMessageToVendor();
    }); 
    
    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
