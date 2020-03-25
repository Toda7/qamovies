var deleteDiscussionWithUndoneDeletion = require('./deleteDiscussionWithUndoneDeletion-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');

describe('Orisi diskusiju koja je vec bila obrisana pa je uradjen Undo brisanja', function(){

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
        deleteDiscussionWithUndoneDeletion.clickAction();
    });

    it('Klik na Delete dugme', function(){
        deleteDiscussionWithUndoneDeletion.clickDelete();
    });

    it('Provera da li obrisana diskusija', function(){
        deleteDiscussionWithUndoneDeletion.checkSuccess();
    });

    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
