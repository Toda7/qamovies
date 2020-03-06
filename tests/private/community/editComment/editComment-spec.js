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
    });
    it('Klik na Action menu', function(){
        editComment.clickAction();
    });
    it('Klik na Edit dugme', function(){
        editComment.clickEditButton();
    });
    it('Edit Comment texta', function(){
        editComment.editCommentText();
    });
    it('Klik na Update Comment dugme', function(){
        editComment.clickUpdateCommentButton();
    });
    it('Provera da li je uspesno editovan Comment', function(){
        editComment.checkSuccess();
    });
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});