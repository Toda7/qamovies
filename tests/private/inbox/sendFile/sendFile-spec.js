var sendFile = require('./sendFile-po.js');

describe('Slanje fajla', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        sendFile.landOnFIProfessionalsHome();
    });

    it('Klik na User Menu', function(){
        sendFile.clickUserMenu();
    });

    it('Klik na Inbox link', function(){
        sendFile.clickInbox();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    });

    it('Klik na New Message dugme', function(){
        sendFile.clickNewMessage();
    });

    it('Klik na Search Contact polje', function(){
        sendFile.findContact();
    });

    it('Klik na kontakt', function(){
        sendFile.clickContact();
    });

    it('Attach doc', function(){
        sendFile.attachDoc();
    });

    it('Klik na Send dugme', function(){
        sendFile.clickSendButton();
    });
    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
