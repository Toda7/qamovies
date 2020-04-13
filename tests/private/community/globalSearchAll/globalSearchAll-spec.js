var globalSearchAll = require('./globalSearchAll-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Search na Global Search All tabu', function(){

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
        globalSearchAll.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera broja rezultata pretrage', function () {
        globalSearchAll.checkSearchResultsNumber();
        browser.sleep(200);
    });

    it('Provera ikone za diskusiju u rezultatima pretrage', function () {
        globalSearchAll.checkDiscussionIcon();
        browser.sleep(200);
    });

    it('Provera naslova za diskusiju u rezultatima pretrage', function () {
        globalSearchAll.checkDiscussionTitle();
        browser.sleep(200);
    });

    it('Provera description teksta za diskusiju u rezultatima pretrage', function () {
        globalSearchAll.checkDiscussionText();
        browser.sleep(200);
    });

    it('Provera datuma za diskusiju u rezultatima pretrage', function () {
        globalSearchAll.checkDiscussionCreateDate();
        browser.sleep(200);
    });

    it('Klik na diskusiju u rezultatima pretrage', function () {
        globalSearchAll.clickDiscussion();
        browser.sleep(1500);
    });

    it('Provera da li se ucitao URL za diskusiju', function(){
        globalSearchAll.checkDiscussionUrl();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera ikone za dokument u rezultatima pretrage', function () {
        globalSearchAll.checkDocumentIcon();
        browser.sleep(200);
    });

    it('Provera naslova za dokument u rezultatima pretrage', function () {
        globalSearchAll.checkDocumentTitle();
        browser.sleep(200);
    });

    it('Provera datuma za dokument u rezultatima pretrage', function () {
        globalSearchAll.checkDocumentCreateDate();
        browser.sleep(200);
    });

    it('Klik na dokument u rezultatima pretrage', function () {
        globalSearchAll.clickDocument();
        browser.sleep(1500);
    });

    it('Provera da li se ucitao URL za dokument', function(){
        globalSearchAll.checkDocumentUrl();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera ikone za membera u rezultatima pretrage', function () {
        globalSearchAll.checkMemberIcon();
        browser.sleep(200);
    });

    it('Provera imena za membera u rezultatima pretrage', function () {
        globalSearchAll.checkMemberName();
        browser.sleep(200);
    });

    it('Provera FI Orga za membera u rezultatima pretrage', function () {
        globalSearchAll.checkMemberFiOrg();
        browser.sleep(200);
    });

    it('Provera asseta i drzave FI Orga za membera u rezultatima pretrage', function () {
        globalSearchAll.checkMemberFiOrgSizeAndState();
        browser.sleep(200);
    });

    it('Provera joba za membera u rezultatima pretrage', function () {
        globalSearchAll.checkMemberJobTitle();
        browser.sleep(200);
    });

    it('Klik na membera u rezultatima pretrage', function () {
        globalSearchAll.clickMember();
        browser.sleep(1500);
    });

    it('Provera da li se ucitao URL za membera', function(){
        globalSearchAll.checkMemberUrl();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera ikone za FI Org u rezultatima pretrage', function () {
        globalSearchAll.checkFiOrgIcon();
        browser.sleep(200);
    });

    it('Provera imena FI Orga u rezultatima pretrage', function () {
        globalSearchAll.checkFiOrgTitle();
        browser.sleep(200);
    });

    it('Klik na FI Org u rezultatima pretrage', function () {
        globalSearchAll.clickFiOrg();
        browser.sleep(1500);
    });

    it('Provera da li se ucitao URL za FI Org', function(){
        globalSearchAll.checkFiOrgUrl();
        browser.sleep(200);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
