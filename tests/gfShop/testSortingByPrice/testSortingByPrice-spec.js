var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testSortingByPrice = require('./testSortingByPrice-po.js');


describe('Sorting by product name in truglo', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testSortingByName.landOnWeatherbyPage();
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
    });

    it('Provera da li se ucitao FIREARM-HUNTING URL', function(){
        testSortingByName.checkFireamHuntingURL();
    });

    it('Provera da li se ucitao FIREARM-HUNTING page title', function(){
        testSortingByName.checkPageTitle();
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByName.checkThatProductIsLoaded();
    });

    it('Klik na sort', function(){
        testSortingByName.clickOnSort();
    });

    it('Select Price za sorting', function(){
        testSortingByPrice.selectPriceToSort();
    });

    it('Provera da li se ucitao URL sa parametrom za price za sorting', function(){
        testSortingByPrice.checkSortingRL();
    });

    it('Provera cene za prvi prozivod na strani', function(){
        testSortingByPrice.checkPrice();
    });

    it('Provera cene za drugi prozivod na strani', function(){
        testSortingByPrice.checkPriceFor2Product();
    });

    it('Klik na 2 page in pagination', function(){
        testSortingByName.clickOn2PageFromPagination();
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByPrice.checkThatProductIsLoaded();
    });

    it('Provera cene za prvi prozivod na 2 strani', function(){
        testSortingByPrice.checkPriceForProductOn2Page();
    });

    it('Provera da li se ucitao URL sa parametrom za 2 page of pagination', function(){
        testSortingByPrice.checkPaginationURL();
    });

    it('Klik na 1 page in pagination da se vratimo na previuse page', function(){
        testSortingByName.clickOn1PageFromPagination();
    });

    it('Provera da li se ucitao URL sa parametrom za 1 page of pagination', function(){
        testSortingByPrice.checkPaginationURLof1Page();
        browser.sleep(3000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});