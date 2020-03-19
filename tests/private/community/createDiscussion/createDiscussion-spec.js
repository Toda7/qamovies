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

    it('Provera Select Audience title na strani', function(){
        createDiscussion.checkSelectAudienceTitleOnPage();
    });

    it('Provera texta na strani ', function(){
        createDiscussion.checkTextOnPage();
    });

    it('Odabir grupe', function(){
        createDiscussion.selectGroup();
    });

    it('Provera da li smo izabrali dobru grupu', function(){
        createDiscussion.checkSelectedGroup();
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

    it('Klik na View Discussion dugme', function(){
        createDiscussion.clickOnViewDiscussion();
    });

    it('Provera title of discussion', function () {
        createDiscussion.checkTitleOfDiscussion();
    });

    it('Provera topics of discussion', function () {
        createDiscussion.checkTopicsOfDiscussion();
    });

    it('Provera da li se ucitao user name', function () {
        createDiscussion.checkUserName();
    });

    it('Provera da li se ucitao user function level', function () {
        createDiscussion.checkFunctionLevel();
    });

    it('Provera da li se ucitao org size', function () {
        createDiscussion.checkOrgSize();
    });

    it('Provera da li se ucitao org link', function () {
        createDiscussion.checkOrgLink();
    });

    it('Provera dokumenta u discussion card', function () {
        createDiscussion.checkDocumentInDiscussionCard();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
