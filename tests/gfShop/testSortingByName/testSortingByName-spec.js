var testSortingByName = require('./testSortingByName-po.js');

describe('Sorting by product name in truglo', function(){

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
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByName.checkThatProductIsLoaded();
    });

    it('Provera da li je dobar number of items on page', function(){
        testSortingByName.checkNumberOfItems();
    });

    it('Klik na 2 page in pagination', function(){
        testSortingByName.clickOn2PageFromPagination();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao product na 2 strani', function(){
        testSortingByName.checkThatProductIsLoadedOn2Page();
    });

    it('Provera da li je dobar number of items on 2 page', function(){
        testSortingByName.checkNumberOfItemsOn2Page();
    });

    it('Klik na 1 page in pagination', function(){
        testSortingByName.clickOn1PageFromPagination();
        browser.sleep(3000);
    });

    it('Klik na sort', function(){
        testSortingByName.clickOnSort();
    });

    it('Select Product name za sorting', function(){
        testSortingByName.selectProductNameToSort();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao URL sa parametrom za product name za sorting', function(){
        testSortingByName.checkSortingRL();
    });

    // it('Provera da li se product nije ucitao na strani', function(){
    //     testSortingByName.checkThatProductIsNotLoaded();
    // });

    it('Klik na 2 page in pagination', function(){
        testSortingByName.clickOn2PageFromPagination();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao product na strani', function(){
        testSortingByName.checkThatProductIsLoaded();
    });

    it('Provera da li se ucitao URL sa parametrom za 2 page of pagination', function(){
        testSortingByName.checkPaginationURL();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});