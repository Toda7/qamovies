var thankReply = require('./thankReply-po.js');

describe('Thankovanje riplaja', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na stranu diskusije', function(){
        thankReply.landOnDiscussionDetailsPage();
    });

    it('Klikni na Thank dugme', function(){
        thankReply.clickOnThank();
    });

    it('Provera da li se Thank count povecao za 1', function(){
        thankReply.checkThankCount1();
    });

    it('Provera Snek Bara', function(){
        thankReply.checkSnackbar1();
    });

    it('Klikni na Thanked dugme', function(){
        thankReply.clickOnThanked();
    });

    it('Provera da li se Thank count smanjio za 1', function(){
        thankReply.checkThankCount2();
    });

    it('Provera Snek Bara', function(){
        thankReply.checkSnackbar2();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});