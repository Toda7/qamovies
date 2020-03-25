var globalSearchDiscussionByDescription = require('./globalSearchDiscussionByDescription-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Pretraga diskusije po descriptionu na Global Search Discussion tabu', function(){

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
        globalSearchDiscussionByDescription.clickDiscussionsTab();
        browser.sleep(1000);
    });

    it('Unesi text u search polje', function () {
        globalSearchDiscussionByDescription.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera broja rezultata pretrage', function () {
        globalSearchDiscussionByDescription.checkSearchResultsNumber();
        browser.sleep(1000);
    });

    it('Provera ikone za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByDescription.checkDiscussionIcon();
        browser.sleep(200);
    });

    it('Provera naslova za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByDescription.checkDiscussionTitle();
        browser.sleep(200);
    });

    it('Provera description teksta za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByDescription.checkDiscussionText();
        browser.sleep(200);
    });

    it('Provera datuma za diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByDescription.checkDiscussionCreateDate();
        browser.sleep(200);
    });

    it('Klik na diskusiju u rezultatima pretrage', function () {
        globalSearchDiscussionByDescription.clickDiscussion();
        browser.sleep(200);
    });

    it('Provera da li se ucitao URL za diskusiju', function () {
        globalSearchDiscussionByDescription.checkDiscussionUrl();
        browser.sleep(1500);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
