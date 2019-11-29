var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testSortingByPosition = require('./testSortingByPosition-po.js');
var testSortingByPrice = require('../testSortingByPrice/testSortingByPrice-po.js');


describe('Sorting by position in truglo', function(){

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

    it('Select Product name za sorting', function(){
        testSortingByPrice.selectPriceToSort();
    });

    it('Provera da li se ucitao URL sa parametrom za product name za sorting', function(){
        testSortingByPrice.checkSortingRL();
    });

    it('Klik na sort', function(){
        testSortingByName.clickOnSort();
    });

    it('Select Position za sorting', function(){
        testSortingByPosition.selectPositionToSort();
    });

    it('Provera da li se ucitao URL bez parametara', function(){
        // Provera da li se ucitao URL bez parametara jer za position nemamo parametar u URLu
        testSortingByPosition.checkSortingRL();
    });

    it('Klik na 2 page in pagination', function(){
        testSortingByName.clickOn2PageFromPagination();
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByPosition.checkThatProductIsLoadedOn2Page();
        browser.sleep(3000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});