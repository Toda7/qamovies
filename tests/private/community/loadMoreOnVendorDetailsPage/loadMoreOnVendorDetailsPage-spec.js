var loadMoreOnVendorDetailsPage = require('./loadMoreOnVendorDetailsPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');

describe('Load more na Vendor details strani', function(){

    beforeAll(function(){
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

    it('Provera da li se na strani nalazi 15 diskusija', function(){
        loadMoreOnVendorDetailsPage.count15discussions();
    });

    it('Klik na Space na tastaturi za Load More na strani', function(){
        var step;
        for (step = 0; step < 6; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });

    it('Provera da li se na strani nalazi 30 diskusija', function(){
        loadMoreOnVendorDetailsPage.count30discussions();
        browser.sleep(2000);
    });

    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(2000);
    });

    it('Provera da li se na strani nalazi 15 diskusija', function(){
        loadMoreOnVendorDetailsPage.count15discussions();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
