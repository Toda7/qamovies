var commentDiscussion = require('./commentDiscussion-po.js');

describe('Comment Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('dolazak na FI Professionals page', function(){
        commentDiscussion.landOnFIProfessionalsHome();
    });

    it('Pronadji napravljenu diskusiju i klikni', function(){
        commentDiscussion.findDiscussion();
    });

    it('Klik na Comment dugme', function(){
        commentDiscussion.clickComment();
    });

    it('Comment Text', function(){
        commentDiscussion.commentText();
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