var createDiscussion = require('./createDiscussion-po.js');

describe('Create Discussion Action', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Home stranu', function(){
        createDiscussion.landOnHome();
        browser.sleep(2000);
    });

    it('Klik na Start Discussion dugme', function(){
        createDiscussion.clickOnStartDiscussion();
        browser.sleep(1000);
    });

    it('Provera Select Audience title na strani', function(){
        createDiscussion.checkSelectAudienceTitleOnPage();
    });

    it('Provera texta na strani ', function(){
        createDiscussion.checkTextOnPage();
    });

    it('Odabir grupe', function(){
        createDiscussion.selectGroup();
        browser.sleep(1000);
    });

    it('Provera da li smo izabrali dobru grupu', function(){
        createDiscussion.checkSelectedGroup();
    });

    it('Discussion title', function(){
        createDiscussion.discussionTitle();
        browser.sleep(1000);
    });

    it('Discussion Description', function(){
        createDiscussion.discussionDesc();
        browser.sleep(1000);
    });

    it('Attach Document', function(){
        createDiscussion.attachDoc();
        browser.sleep(500);
    });

    it('Dodavanje topika', function(){
        createDiscussion.selectTopic();
        browser.sleep(200);
    });

    it('Klik na Post Discussion', function(){
        createDiscussion.postDiscussion();
        browser.sleep(2000);
    });

    it('Provera da li je uspesno objavljena diskusija', function(){
        createDiscussion.checkSuccess();
        browser.sleep(2000);
    });

    it('Klik na View Discussion dugme', function(){
        createDiscussion.clickOnViewDiscussion();
        browser.sleep(1000);
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
        browser.sleep(1000);
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
