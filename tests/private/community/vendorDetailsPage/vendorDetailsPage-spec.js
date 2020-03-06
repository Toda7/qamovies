var vendorDetailsPage = require('./vendorDetailsPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

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

    it('Klik na vendor name', function(){
        followUnfollowVendor.clickOnVendorName();
        browser.sleep(5000);
    });

    it('Provera Vendor name, Urla, follow and Contact buttona na details page', function(){
        vendorDetailsPage.checkDetailsPage();
        browser.sleep(2000);
    });

    it('Provera da li je dobar AFT logo na vendor details page', function(){
        vendorDetailsPage.checkAFTLogo();
        browser.sleep(1000);
    });

    it('Provera da li se na strani nalazi Overview link', function(){
        vendorDetailsPage.checkOverviewLink();
    });

    it('Provera da li se na strani nalazi Products link', function(){
        vendorDetailsPage.checkProductsLink();
    });

    it('Provera da li se na strani nalazi Employees link', function(){
        vendorDetailsPage.checkEmployeesLink();
    });

    it('Provera da li se na strani nalazi About link', function(){
        vendorDetailsPage.checkAboutTitle();
    });

    it('Klik on More link', function(){
        vendorDetailsPage.clickOnMore();
        browser.sleep(2000);
    });

    it('Proveravanje more sekcije', function(){
        vendorDetailsPage.checkMoreDetails();
    });

    it('Provera da li se na strani nalazi 15 diskusija', function(){
        vendorDetailsPage.count15dics();
    });

    it('Provera da li se START DISCUSSION button ucitao na strani', function(){
        docLibraryCheck.checkStartDiscussionButton();
    });
    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
