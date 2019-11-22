var deleteDiscussion = require('./deleteDiscussion-po.js');

describe('Delete Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        deleteDiscussion.landOnFIProfessionalsHome();
    });

    it('Pronadji napravljenu diskusiju i klikni', function(){
        deleteDiscussion.findDiscussion();
    });

    it('Klik na Action menu', function(){
        deleteDiscussion.clickAction();
    });

    it('Klik na Delete dugme', function(){
        deleteDiscussion.clickDelete();
    });

    it('Provera da li obrisana diskusija', function(){
        deleteDiscussion.checkSuccess();
    });

    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
