var globalSearchDiscussionByTitle = require('./globalSearchDiscussionByTitle-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Pretraga diskusije po titleu na Global Search Discussion tabu', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Home stranu', function(){
        createDiscussion.landOnHome();
        browser.sleep(1000);
    });

    it('Klik na search field da dobijemo search stranu', function () {
        docLibraryCheck.clickOnSearchField();
        browser.sleep(1000);
    });

    it('Idi na Discussions tab', function () {
        globalSearchDiscussionByTitle.clickDiscussionsTab();
        browser.sleep(1000);
    });

    it('Unesi text u search polje', function () {
        globalSearchDiscussionByTitle.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera broja rezultata pretrage', function () {
        globalSearchDiscussionByTitle.checkSearchResultsNumber();
        browser.sleep(1000);
    });

    it('Provera ikone za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByTitle.checkDiscussionIcon();
        browser.sleep(200);
    });

    it('Provera naslova za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByTitle.checkDiscussionTitle();
        browser.sleep(200);
    });

    it('Provera description teksta za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByTitle.checkDiscussionText();
        browser.sleep(200);
    });

    it('Provera datuma za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByTitle.checkDiscussionCreateDate();
        browser.sleep(200);
    });

    it('Klik na diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByTitle.clickDiscussion();
        browser.sleep(200);
    });

    it('Provera da li se ucitao URL za diskusiju', function () {
        globalSearchDiscussionByTitle.checkDiscussionUrl();
        browser.sleep(1500);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
