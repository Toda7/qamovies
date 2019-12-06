var createAnonymousDiscussion = require('./createAnonymousDiscussion-po.js');

describe('Create Anonymous Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('dolazak na FI Professionals stranu', function(){
        createAnonymousDiscussion.landOnFIProfessionalsHome();
    });

    it('Klik na Start Discussion dugme', function(){
        createAnonymousDiscussion.clickOnStartDiscussion();
    });

    // it('Odabir grupe', function(){
    //     createAnonymousDiscussion.selectGroup();
    // });

    it('Discussion title', function(){
        createAnonymousDiscussion.discussionTitle();
    });

    it('Discussion Description', function(){
        createAnonymousDiscussion.discussionDesc();
    });

    it('Odabir topika', function(){
        createAnonymousDiscussion.selectTopic();
    });

    it('Anonymous switch', function(){
        createAnonymousDiscussion.makeAnonymous();
    });

    it('Klik na Post Discussion', function(){
        createAnonymousDiscussion.postDiscussion();
    });

    it('Klik na View Discussion dugme', function(){
        createAnonymousDiscussion.clickOnViewDiscussion();
    });

    it('Provera da li je objavljena diskusija objavljena anonimno', function(){
        createAnonymousDiscussion.checkSuccess();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});