var sendMessage = require('./sendMessage-po.js');

describe('Slanje poruke', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        sendMessage.landOnFIProfessionalsHome();
    });

    it('Klik na User Menu', function(){
        sendMessage.clickUserMenu();
    });

    it('Klik na Inbox link', function(){
        sendMessage.clickInbox();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    });

    it('Klik na New Message dugme', function(){
        sendMessage.clickNewMessage();
    });

    it('Klik na Search Contact polje', function(){
        sendMessage.findContact();
    });

    it('Klik na kontakt', function(){
        sendMessage.clickContact();
    });

    it('Tekst poruke', function(){
        sendMessage.messageText();
    });

    it('Klik na Send dugme', function(){
        sendMessage.clickSendButton();
    });
    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
