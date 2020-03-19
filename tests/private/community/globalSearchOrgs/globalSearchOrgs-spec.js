var globalSearchOrgs = require('./globalSearchOrgs-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Pretraga organizacija na Global Search Org tabu', function(){

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

    it('Idi na Orgs tab', function () {
        globalSearchOrgs.clickOrgsTab();
        browser.sleep(500);
    });

    it('Unesi text u search polje', function () {
        globalSearchOrgs.enterSearchWord();
        browser.sleep(500);
    });

    it('Provera broja rezultata pretrage', function () {
        globalSearchOrgs.checkSearchResultsNumber();
        browser.sleep(200);
    });

    it('Provera ikone za org u rezultatima pretrage', function () {
        globalSearchOrgs.checkOrgIcon();
        browser.sleep(200);
    });

    it('Provera imena banke u rezultatima pretrage', function () {
        globalSearchOrgs.checkOrgName();
        browser.sleep(200);
    });

    it('Provera asseta i drzave FI Orga u rezultatima pretrage', function () {
        globalSearchOrgs.checkOrgSizeAndState();
        browser.sleep(200);
    });

    it('Klik na banku u rezultatima pretrage', function () {
        globalSearchOrgs.clickOrg();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao URL za banku', function () {
        globalSearchOrgs.checkOrgUrl();
        browser.sleep(500);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
