var thankComment = require('./thankComment-po.js');

describe('Thankovanje commenta', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na stranu diskusije', function(){
        thankComment.landOnDiscussionDetailsPage();
    });

    it('Klikni na Thank dugme', function(){
        thankComment.clickOnThank();
    });

    it('Provera da li se Thank count povecao za 1', function(){
        thankComment.checkThankCount1();
    });

    it('Provera Snek Bara', function(){
        thankComment.checkSnackbar1();
    });

    it('Klikni na Thanked dugme', function(){
        thankComment.clickOnThanked();
    });

    it('Provera da li se Thank count smanjio za 1', function(){
        thankComment.checkThankCount2();
    });

    it('Provera Snek Bara', function(){
        thankComment.checkSnackbar2();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});