var testShowPerPage = require('./testShowPerPage-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');


describe('Test Show 12 and 24 Per Page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na shop home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao FIREARM-HUNTING URL', function(){
        testSortingByName.checkFireamHuntingURL();
    });

    it('Provera da li se ucitao FIREARM-HUNTING page title', function(){
        testSortingByName.checkPageTitle();
    });

    it('Provera da li se ucitao FIREARM-HUNTING page title', function(){
        testSortingByName.checkNumberOfItems();
    });

    it('Klik to select show 24 per page', function(){
        testShowPerPage.clickToSelectShow24PerPage();
        browser.sleep(3000);
    });

    it('Provera koliko imamo items nakon koriscenja Show Per Page option', function(){
        testShowPerPage.checkNumberOfItems();
    });

    it('Provera da li se ucitao URL sa parametrom za show 24 per page', function(){
        testShowPerPage.checkShowPerPageRL();
    });

    it('Klik to select show 9 per page', function(){
        testShowPerPage.clickToSelectShow9PerPage();
        browser.sleep(3000);
    });

    it('Provera koliko imamo items nakon koriscenja Show 9 Per Page option', function(){
        testShowPerPage.checkNumberOfItemsForShow9PerPage();
    });

    it('Provera da li se ucitao URL sa parametrom za show 9 per page', function(){
        testShowPerPage.checkShow9PerPageRL();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});