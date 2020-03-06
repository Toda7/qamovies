var loadMoreOnDocLibPage = require('./loadMoreOnDocLibPage-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Load more na Document Library strani', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Documents Library page', function(){
        docLibraryCheck.landOnDocsLibraryPage();
    });

    it('Provera da li se na strani nalazi 15 documenta', function(){
        loadMoreOnDocLibPage.count15docs();
    });

    it('Scoll 1 ', function(){
        loadMoreOnDocLibPage.scrollDown();
        browser.sleep(1000);
    });

    it('Scroll 2', function(){
        loadMoreOnDocLibPage.scrollDown();
        browser.sleep(1000);
    });

    it('Scroll 3', function(){
        loadMoreOnDocLibPage.scrollDown();
        browser.sleep(1000);
    });

    it('Scroll 4', function(){
        loadMoreOnDocLibPage.scrollDown();
        browser.sleep(1000);
    });

    it('Provera da li se na strani nalazi 30 documenta', function(){
        loadMoreOnDocLibPage.count30docs();
        browser.sleep(2000);
    });

    it('Refresh page', function(){
        browser.refresh(); 
        browser.sleep(2000);
    });

    it('Provera da li se na strani nalazi 15 documenta', function(){
        loadMoreOnDocLibPage.count15docs();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
