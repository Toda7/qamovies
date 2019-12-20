var createDiscussion = require('./createDiscussion-po.js');

describe('Create Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Home stranu', function(){
        createDiscussion.landOnHome();
    });

    it('Klik na Start Discussion dugme', function(){
        createDiscussion.clickOnStartDiscussion();
    });

    it('Odabir grupe', function(){
        createDiscussion.selectGroup();
    });

    it('Discussion title', function(){
        createDiscussion.discussionTitle();
    });

    it('Discussion Description', function(){
        createDiscussion.discussionDesc();
    });

    it('Attach Document', function(){
        createDiscussion.attachDoc();
    });

    it('Dodavanje topika', function(){
        createDiscussion.selectTopic();
    });

    it('Klik na Post Discussion', function(){
        createDiscussion.postDiscussion();
    });

    it('Provera da li je uspesno objavljena diskusija', function(){
        createDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
