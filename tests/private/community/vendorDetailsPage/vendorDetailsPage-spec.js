var vendorDetailsPage = require('./vendorDetailsPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');

describe('Vendor details page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na vendor directory page', function(){
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Unosenje texta u search polje', function(){
        searchOnVendorDirectoryPage.enterearchWord();
        browser.sleep(5000);
    });

    it('Klik on vendor name da dobijemo details page', function(){
        followUnfollowVendor.checkDetailsPage();
        browser.sleep(2000);
    });

    it('Provera Vendor name, Urla, follow and Contact buttona na details page', function(){
        vendorDetailsPage.checkVendorName();
        browser.sleep(1000);
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
