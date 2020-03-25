var followUnfollowVendor = require('./followUnfollowVendor-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');


describe('Follow i Unfollow vendora vendor directory i vendor details strane', function(){

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

    it('Provera da li se ucitao FOLLOW button', function(){
        searchOnVendorDirectoryPage.checkFollowButton();
        browser.sleep(1000);
    });

    it('Klik on Follow button', function(){
        followUnfollowVendor.clickOnFollowLink();
        browser.sleep(1000);
    });

    it('Provera snackbar poruke za follow message', function(){
        followUnfollowVendor.checkSnackbarMessageForFollow();
        browser.sleep(2000);
    });


    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(3000);
    });

    it('Provera da li se ucitao UNFOLLOW button', function(){
        followUnfollowVendor.checkUnfollowButton();
    });

    it('Klik on vendor name da dobijemo details page', function(){
        followUnfollowVendor.clickOnVendorName();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao UNFOLLOW button na details page', function(){
        followUnfollowVendor.checkUnfollowButton();
    });

    it('Klik on Unfollow button na details page', function(){
        followUnfollowVendor.clickOnUnfollowLink();
        browser.sleep(1000);
    });

    it('Provera snackbar poruke za unfollow message na details page', function(){
        followUnfollowVendor.checkSnackbarMessageForUnfollow();
        browser.sleep(2000);
    });

    it('Klik on Follow button na details page', function(){
        followUnfollowVendor.clickOnFollowLinkOnDetailsPAge();
        browser.sleep(1000);
    });

    it('Provera snackbar poruke za follow message na details page', function(){
        followUnfollowVendor.checkSnackbarMessageForFollow();
        browser.sleep(2000);
    });

    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(3000);
    });

    it('Dolazak na vendor directory page', function(){
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Unosenje texta u search polje', function(){
        searchOnVendorDirectoryPage.enterearchWord();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao UNFOLLOW button na details page', function(){
        followUnfollowVendor.checkUnfollowButton();
    });

    it('Klik on Unfollow button na details page', function(){
        followUnfollowVendor.clickOnUnfollowLink();
        browser.sleep(1000);
    });

    it('Provera snackbar poruke za unfollow message na details page', function(){
        followUnfollowVendor.checkSnackbarMessageForUnfollow();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao FOLLOW button', function(){
        searchOnVendorDirectoryPage.checkFollowButton();
        browser.sleep(1000);
    });
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
