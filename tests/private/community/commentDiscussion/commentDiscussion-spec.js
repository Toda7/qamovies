var commentDiscussion = require('./commentDiscussion-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');

describe('Comment Discussion Action', function(){

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
        browser.sleep(3000);
    });

    it('Klik na Comment dugme', function(){
        commentDiscussion.clickComment();
    });

    it('Comment Text', function(){
        commentDiscussion.commentText();
    });

    it('Attach Document', function(){
        commentDiscussion.attachDoc();
    });

    it('klik na Comment dugme', function(){
        commentDiscussion.postComment();
    });

    it('Provera da li je uspesno objavljen komentar', function(){
        commentDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});