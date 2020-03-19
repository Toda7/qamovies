var loadMoreOnVendorDirectoryPage = require('./loadMoreOnVendorDirectoryPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');


describe('Load more na Vendor Directory strani', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na vendor directory page', function(){
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Provera da li se na strani nalazi 15 vendora', function(){
        loadMoreOnVendorDirectoryPage.count18vendors();
    });

    it('Klik na Space na tastaturi za Load More na strani', function(){
        var step;
        for (step = 0; step < 6; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });

    it('Provera da li se na strani nalazi 23 vendora', function(){
        loadMoreOnVendorDirectoryPage.count23vendors();
        browser.sleep(2000);
    });

    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(2000);
    });

    it('Provera da li se na strani nalazi 18 documenta', function(){
        loadMoreOnVendorDirectoryPage.count18vendors();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
