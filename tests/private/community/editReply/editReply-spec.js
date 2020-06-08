var editReply = require('./editReply-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');

describe('Edit Reply', function(){
    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
    it('Dolazak na FI Professionals', function(){
        replyDiscussion.landOnFIProfessionalsHome();
    });
    it('Klikni na Search polje', function(){
        replyDiscussion.clickSearch();
    });
    it('Unesi rec za pretragu u Search polje', function(){
        replyDiscussion.enterSearchWord();
        browser.sleep(1000);
    });
    it('Klikni na prvi search rezultat', function(){
        replyDiscussion.clickFirstResult();
        browser.sleep(1000);
    });
    it('Klik na Action menu', function(){
        editReply.clickAction();
        browser.sleep(1000);
    });
    it('Klik na Edit dugme', function(){
        editReply.clickEditButton();
        browser.sleep(1000);
    });
    it('Edit Reply texta', function(){
        editReply.editReplyText();
        browser.sleep(1000);
    });
    it('Klik na Update Reply dugme', function(){
        editReply.clickUpdateReplyButton();
        browser.sleep(1000);
    });
    it('Provera da li je uspesno editovan Reply', function(){
        editReply.checkSuccess();
        browser.sleep(1000);
    });
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});