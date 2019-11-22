var sendMessageToVendor = require('./sendMessageToVendor-po.js');

describe('Send Message To Vendor', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Klik na ime vendora', function(){
        sendMessageToVendor.clickOnVendorName();
    });

    it('Klikni na Contact dugme', function(){
        sendMessageToVendor.clickOnContactButton();
    });

    it('Unos texta poruke', function(){
        sendMessageToVendor.enterMessageText();
    });

    it('Klik na Send dugme', function(){
        sendMessageToVendor.clickOnSendButton();
    });

    it('Provera da li je slanje poruke uspesno', function(){
        sendMessageToVendor.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});