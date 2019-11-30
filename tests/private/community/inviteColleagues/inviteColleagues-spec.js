var inviteColleagues = require('./inviteColleagues-po.js');

describe('Invite Colleagues Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Klik na Invite Colleagues dugme', function(){
        inviteColleagues.clickOnInviteColleagues();
    });

    it('Unos email adrese', function(){
        inviteColleagues.enterEmailAddress();
    });

    it('Klik na Send dugme', function(){
        inviteColleagues.clickOnSendButton();
    });

    // it('Klik na Snack Bar', function(){
    //     inviteColleagues.clickOnSnackBar();
    // });

    it('Provera da li je uspesno pozvan kolega', function(){
        inviteColleagues.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
