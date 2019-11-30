var thankDoc = require('./thankDoc-po.js');

describe('Thankovanje dokumenta', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Home stranu', function(){
        thankDoc.landOnHome();
    });

    it('Dolazak na Doc Library stranu', function(){
        thankDoc.landOnDocLibrary();
    });

    it('Klikni na Search Doc polje', function(){
        thankDoc.clickOnSearchDocField();
    });

    it('Unesi text u search polje', function(){
        thankDoc.enterSearchWord();
    });

    it('Klikni na dokument', function(){
        thankDoc.clickOnDoc();
    });

    it('Klikni na Thank dugme', function(){
        thankDoc.thankDoc();
    });

    it('Provera da li je dokument uspesno thankovan', function(){
        thankDoc.checkSuccess1();
    });

    it('Unthankuj dokument (klikni na Thanked dugme)', function(){
        thankDoc.unThankDoc();
    });

    it('Provera da li je dokument uspesno unthankovan', function(){
        thankDoc.checkSuccess2();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});