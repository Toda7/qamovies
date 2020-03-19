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
    });
    it('Klikni na prvi search rezultat', function(){
        replyDiscussion.clickFirstResult();
    });
    it('Klik na Action menu', function(){
        editReply.clickAction();
    });
    it('Klik na Edit dugme', function(){
        editReply.clickEditButton();
    });
    it('Edit Reply texta', function(){
        editReply.editReplyText();
    });
    it('Klik na Update Reply dugme', function(){
        editReply.clickUpdateReplyButton();
    });
    it('Provera da li je uspesno editovan Reply', function(){
        editReply.checkSuccess();
    });
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});