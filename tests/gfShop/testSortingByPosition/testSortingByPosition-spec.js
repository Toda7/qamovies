var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testSortingByPosition = require('./testSortingByPosition-po.js');
var testSortingByPrice = require('../testSortingByPrice/testSortingByPrice-po.js');


describe('Sorting by position in truglo', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(5000);
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
        browser.sleep(5000);
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
        browser.sleep(4000);
    });

    it('Select Product price za sorting', function(){
        testSortingByPrice.selectPriceToSort();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao URL sa parametrom za product price za sorting', function(){
        testSortingByPrice.checkSortingRL();
        browser.sleep(4000);
    });

    it('Klik na sort', function(){
        testSortingByName.clickOnSort();
        browser.sleep(5000);
    });

    it('Select Position za sorting', function(){
        testSortingByPosition.selectPositionToSort();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao URL bez parametara', function(){
        // Provera da li se ucitao URL bez parametara jer za position nemamo parametar u URLu
        testSortingByPosition.checkSortingRL();
        browser.sleep(2000);
    });

    it('Klik na 2 page in pagination', function(){
        testSortingByName.clickOn2PageFromPagination();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByPosition.checkThatProductIsLoadedOn2Page();
        browser.sleep(3000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});