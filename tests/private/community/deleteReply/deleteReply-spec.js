var deleteReply = require('./deleteReply-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');

describe('Delete Reply Action', function(){

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
        deleteReply.clickAction();
    });

    it('Klik na Delete dugme', function(){
        deleteReply.clickDelete();
    });

    it('Provera da li obrisana diskusija', function(){
        deleteReply.checkSnackbar();
    });

    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
