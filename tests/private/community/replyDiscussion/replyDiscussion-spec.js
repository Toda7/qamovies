var replyDiscussion = require('./replyDiscussion-po.js');

describe('Reply Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na FI Professionals', function(){
        replyDiscussion.landOnFIProfessionalsHome();
    });

    it('Pronadji napravljenu diskusiju i klikni', function(){
        replyDiscussion.findDiscussion();
    });

    it('Klik na Reply dugme', function(){
        replyDiscussion.clickReply();
    });

    it('Reply tekst', function(){
        replyDiscussion.replyText();
    });

    it('Attach Document', function(){
        replyDiscussion.attachDoc();
    });

    it('Klik na Post Reply dugme', function(){
        replyDiscussion.postReply();
    });

    it('Provera da li je uspesno objavljen Reply', function(){
        replyDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
