var globalSearchUserForHisDocsOnDocsTab = require('./globalSearchUserForHisDocsOnDocsTab-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var globalSearchDocument = require('../globalSearchDocument/globalSearchDocument-po.js');

describe('Provera da li se pojavljuju dokumenti u rezultatima kada trazimo ime usera na Docs tabu', function(){

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

    it('Idi na Docs tab', function () {
        globalSearchDocument.clickDocsTab();
        browser.sleep(500);
    });

    it('Unesi text u search polje', function () {
        globalSearchUserForHisDocsOnDocsTab.enterSearchWord();
        browser.sleep(500);
    });

    it('Provera broja rezultata pretrage', function () {
        globalSearchUserForHisDocsOnDocsTab.checkSearchResultsNumber();
        browser.sleep(200);
    });

    it('Provera ikone za dokument u rezultatima pretrage', function () {
        globalSearchDocument.checkDocIcon();
        browser.sleep(200);
    });

    it('Provera naslova dokumenta u rezultatima pretrage', function () {
        globalSearchDocument.checkDocTitle();
        browser.sleep(200);
    });

    it('Provera datuma za dokument u rezultatima pretrage', function () {
        globalSearchDocument.checkDocCreateDate();
        browser.sleep(200);
    });

    it('Klik na doc u rezultatima pretrage', function () {
        globalSearchDocument.clickDoc();
        browser.sleep(200);
    });

    it('Provera da li se ucitao URL za dokument', function () {
        globalSearchDocument.checkDocUrl();
        browser.sleep(1500);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
