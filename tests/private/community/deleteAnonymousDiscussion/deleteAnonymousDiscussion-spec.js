var deleteAnonymousDiscussion = require('./deleteAnonymousDiscussion-po.js');
var replyDiscussion = require('../replyDiscussion/replyDiscussion-po.js');

describe('Obrisi anonimnu diskusiju', function(){

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
        deleteAnonymousDiscussion.enterSearchWord();
    });

    it('Klikni na prvi search rezultat', function(){
        replyDiscussion.clickFirstResult();
    });

    it('Klik na Action menu', function(){
        deleteAnonymousDiscussion.clickAction();
    });

    it('Klik na Delete dugme', function(){
        deleteAnonymousDiscussion.clickDelete();
    });

    it('Provera da li obrisana diskusija', function(){
        deleteAnonymousDiscussion.checkSuccess();
    });

    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
