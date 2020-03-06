var deleteComment = require('./deleteComment-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');
describe('Delete Comment Action', function(){
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
        deleteComment.clickAction();
    });
    it('Klik na Delete dugme', function(){
        deleteComment.clickDelete();
    });
    it('Provera da li obrisana diskusija', function(){
        deleteComment.checkSnackbar();
    });
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});