var searchOnVendorDirectoryPage = require('./searchOnVendorDirectoryPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnDocLibPage = require('../searchOnDocLibPage/searchOnDocLibPage-po.js');


describe('Search na vendor directory page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na vendor directory page', function(){
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Unosenje texta u search polje da dobijemo no vendors poruku', function(){
        searchOnDocLibPage.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala poruka za no vendors', function(){
        searchOnVendorDirectoryPage.checkNoVendorsMessage();
        browser.sleep(1000);
    });

    it('Provera da li smo dobili search URL', function(){
        searchOnVendorDirectoryPage.checkURLwithSearchWord();
    });

    it('Brisanje texta iz search polja', function(){
        searchOnDocLibPage.removeTextFromTheField();
        browser.sleep(2000);
    });

    it('Unosenje texta u search polje', function(){
        searchOnVendorDirectoryPage.enterearchWord();
        browser.sleep(2000);
    });

    it('Provera da li se na strani nalazi 1 vendor', function(){
        searchOnVendorDirectoryPage.countOneVendor();
    });

    it('Provera da li se ucitao vendor name u kartici', function(){
        searchOnVendorDirectoryPage.checkVendorName();
        browser.sleep(1000);
    });

    it(' Provera da li je dobar vendor avatar', function(){
        searchOnVendorDirectoryPage.checkVendorAvatar();
    });

    it('Provera da li se ucitao FOLLOW button', function(){
        searchOnVendorDirectoryPage.checkFollowButton();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
