var editComment = require('./editComment-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');

describe('Edit Comment', function(){
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
        browser.sleep(2000);
    });
    it('Klik na Action menu', function(){
        editComment.clickAction();
        browser.sleep(1000);
    });
    it('Klik na Edit dugme', function(){
        editComment.clickEditButton();
        browser.sleep(1000);
    });
    it('Edit Comment texta', function(){
        editComment.editCommentText();
        browser.sleep(1000);
    });
    it('Klik na Update Comment dugme', function(){
        editComment.clickUpdateCommentButton();
        browser.sleep(1000);
    });
    it('Provera da li je uspesno editovan Comment', function(){
        editComment.checkSuccess();
    });
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});