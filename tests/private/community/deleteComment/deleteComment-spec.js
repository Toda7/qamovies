var deleteComment = require('./deleteComment-po.js');

describe('Delete Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        deleteComment.landOnFIProfessionalsHome();
    });

    it('Pronadji napravljenu diskusiju i klikni', function(){
        deleteComment.findDiscussion();
    });

    it('Klik na Action menu', function(){
        deleteComment.clickAction();
    });

    it('Klik na Delete dugme', function(){
        deleteComment.clickDelete();
    });

    it('Provera da li obrisana diskusija', function(){
        deleteComment.checkSuccess();
    });

    
        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
