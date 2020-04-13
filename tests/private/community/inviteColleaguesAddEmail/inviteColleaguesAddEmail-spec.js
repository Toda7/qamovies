var inviteColleaguesAddEmail = require('./inviteColleaguesAddEmail-po.js');
var inviteColleagues = require('../inviteColleagues/inviteColleagues-po.js');

describe('Invite Colleagues Add Email Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na community', function(){
        inviteColleaguesAddEmail.landOnHomePage();
    });

    it('Klik na Invite Colleagues dugme', function(){
        inviteColleagues.clickOnInviteColleagues();
    });

    it('Unos email adrese', function(){
        inviteColleagues.enterEmailAddress();
    });

    it('Klik na Add Email button', function(){
        inviteColleaguesAddEmail.clickOnAddEmailButton();
    });

    it('Unos email adrese u 4 polje', function(){
        inviteColleaguesAddEmail.enterEmailAddress2();
    });

    it('Klik na Send dugme', function(){
        inviteColleagues.clickOnSendButton();
    });

    it('Provera da li su uspesno pozvane kolege', function(){
        inviteColleaguesAddEmail.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
