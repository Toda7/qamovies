var reportSpam = require('./reportSpam-po.js');

describe('Report spam', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        reportSpam.landOnFIProfessionalsHome();
    });

    it('Klik na User Menu', function(){
        reportSpam.clickUserMenu();
    });

    it('Klik na Inbox link', function(){
        reportSpam.clickInbox();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    });

    it('Klik na kontakt', function(){
        reportSpam.clickContact();
    });

    it('Klik na Action menu', function(){
        reportSpam.clickAction();
    });

    it('Klik na Report Spam dugme', function(){
        reportSpam.clickReport();
    });

    it('Klik na Report Back dugme', function(){
        reportSpam.clickBack();
    });

    it('Klik na User Menu', function(){
        reportSpam.clickAvatar();
    });

    it('Klik na Sign Out', function(){
        reportSpam.signOut()
    });
    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
