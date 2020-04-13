var downloadDoc = require('./downloadDoc-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');

describe('Download dokument', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        replyDiscussion.landOnFIProfessionalsHome();
    });

    it('Klikni na Search polje', function(){
        replyDiscussion.clickSearch();
    });

    it('Unesi rec za pretragu u Search polje', function(){
        replyDiscussion.enterSearchWord();
    });

    it('Klikni na prvi search rezultat', function(){
        replyDiscussion.clickFirstResult();
    });

    it('Klik na Dokument', function(){
        downloadDoc.clickDoc();
    });

    it('Klik na Download dugme', function(){
        downloadDoc.clickDownload();
    });

    it('Refresh stranu', function(){
        downloadDoc.refreshPage();
    });

    it('Provera da li je Dokument uspesno downloadovan', function(){
        downloadDoc.checkSuccess();
    });
    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
