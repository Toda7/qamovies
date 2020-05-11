var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testSortingByPrice = require('./testSortingByPrice-po.js');


describe('Sorting by product price in truglo', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao FIREARM-HUNTING URL', function(){
        testSortingByName.checkFireamHuntingURL();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao FIREARM-HUNTING page title', function(){
        testSortingByName.checkPageTitle();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByName.checkThatProductIsLoaded();
        browser.sleep(1000);
    });

    it('Klik na sort', function(){
        testSortingByName.clickOnSort();
        browser.sleep(2000);
    });

    it('Select Price za sorting', function(){
        testSortingByPrice.selectPriceToSort();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao URL sa parametrom za price za sorting', function(){
        testSortingByPrice.checkSortingRL();
        browser.sleep(1000);
    });

    it('Provera cene za prvi prozivod na strani', function(){
        testSortingByPrice.checkPrice();
        browser.sleep(1000);
    });

    it('Provera cene za drugi prozivod na strani', function(){
        testSortingByPrice.checkPriceFor2Product();
        browser.sleep(1000);
    });

    it('Klik na 2 page in pagination', function(){
        testSortingByName.clickOn2PageFromPagination();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByPrice.checkThatProductIsLoaded();
        browser.sleep(1000);
    });

    it('Provera cene za prvi prozivod na 2 strani', function(){
        testSortingByPrice.checkPriceForProductOn2Page();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao URL sa parametrom za 2 page of pagination', function(){
        testSortingByPrice.checkPaginationURL();
        browser.sleep(1000);
    });

    it('Klik na 1 page in pagination da se vratimo na previuse page', function(){
        testSortingByName.clickOn1PageFromPagination();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao URL sa parametrom za 1 page of pagination', function(){
        testSortingByPrice.checkPaginationURLof1Page();
        browser.sleep(1000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});