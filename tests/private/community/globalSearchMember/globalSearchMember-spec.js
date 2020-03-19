var globalSearchMember = require('./globalSearchMember-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Pretraga membera na Global Search People tabu', function(){

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

    it('Idi na People tab', function () {
        globalSearchMember.clickPeopleTab();
        browser.sleep(500);
    });

    it('Unesi text u search polje', function () {
        globalSearchMember.enterSearchWord();
        browser.sleep(500);
    });

    it('Provera broja rezultata pretrage', function () {
        globalSearchMember.checkSearchResultsNumber();
        browser.sleep(200);
    });

    it('Provera ikone za membera u rezultatima pretrage', function () {
        globalSearchMember.checkMemberIcon();
        browser.sleep(200);
    });

    it('Provera imena membera u rezultatima pretrage', function () {
        globalSearchMember.checkMemberName();
        browser.sleep(200);
    });

    it('Provera FI Orga za membera u rezultatima pretrage', function () {
        globalSearchMember.checkMemberFiOrg();
        browser.sleep(200);
    });

    it('Provera asseta i drzave FI Orga za membera u rezultatima pretrage', function () {
        globalSearchMember.checkMemberFiOrgSizeAndState();
        browser.sleep(200);
    });

    it('Provera joba za membera u rezultatima pretrage', function () {
        globalSearchMember.checkMemberJobTitle();
        browser.sleep(200);
    });

    it('Klik na membera u rezultatima pretrage', function () {
        globalSearchMember.clickMember();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao URL za membera', function () {
        globalSearchMember.checkMemberUrl();
        browser.sleep(1000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
