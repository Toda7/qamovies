var globalSearchUserForHisDocs = require('./globalSearchUserForHisDocs-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Provera da li se pojavljuju dokumenti u rezultatima kada trazimo ime usera na All tabu', function(){

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

    it('Unesi text u search polje', function () {
        globalSearchUserForHisDocs.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera broja rezultata pretrage', function () {
        globalSearchUserForHisDocs.checkSearchResultsNumber();
        browser.sleep(1000);
    });

    it('Provera ikone za dokument u rezultatima pretrage', function () {
        globalSearchUserForHisDocs.checkDocumentIcon();
        browser.sleep(200);
    });

    it('Provera naslova za dokument u rezultatima pretrage', function () {
        globalSearchUserForHisDocs.checkDocumentTitle();
        browser.sleep(200);
    });

    it('Provera datuma za dokument u rezultatima pretrage', function () {
        globalSearchUserForHisDocs.checkDocumentCreateDate();
        browser.sleep(200);
    });

    it('Klik na dokument u rezultatima pretrage', function () {
        globalSearchUserForHisDocs.clickDocument();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao URL za dokument', function () {
        globalSearchUserForHisDocs.checkDocumentUrl();
        browser.sleep(1000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
