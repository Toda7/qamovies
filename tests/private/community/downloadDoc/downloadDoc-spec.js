var downloadDoc = require('./downloadDoc-po.js');

describe('Delete Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        downloadDoc.landOnFIProfessionalsHome();
    });

    it('Pronadji napravljenu diskusiju i klikni', function(){
        downloadDoc.findDiscussion();
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
