var testAdvancedSorting = require('./testAdvancedSorting-po.js');

describe('Sorting on advenced search page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na advanced search page', function(){
        testAdvancedSorting.landOnAdvancedSearchPage();
        browser.sleep(5000);
    });

    it('Unosenje texta u short descripton polje', function(){
        testAdvancedSorting.enterTextInShortDescriptionField();
        browser.sleep(2000);
    });

    it('Klik on SEARCH button', function(){
        testAdvancedSorting.clickOnSearchButton();
        browser.sleep(5000);
    });

    it('Provera URLa nakon uradjenog searcha', function(){
        testAdvancedSorting.checkAdvencedSearchURL();
        browser.sleep(5000);
    });

    it('Provera da li je dobar number of items', function(){
        testAdvancedSorting.checkNumberOfItems();
        browser.sleep(2000);
    });

    it('Provera da li se prvi prozivod ucitao na advanced search strani', function(){
        testAdvancedSorting.checkIsProductIsHere();
        browser.sleep(2000);
    });

    it('Select Price za sorting', function(){
        testAdvancedSorting.selectPriceToSort();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao advenced search and price sort URL', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortURL();
        browser.sleep(2000);
    });

    it('Provera da li se prvi prozivod ucitao na advanced search strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSortingByPrice();
        browser.sleep(2000);
    });

    it('Provera da li je dobar number of items', function(){
        testAdvancedSorting.checkNumberOfItems();
        browser.sleep(2000);
    });

    it('Klik na Next in pagination to get 2 page', function(){
        testAdvancedSorting.clickPageTwo();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao advenced search and price sort on 2 page URL', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortOn2PageURL();
        browser.sleep(2000);
    });

    it('Provera da li je dobar number of items on 2 page', function(){
        testAdvancedSorting.checkNumberOfItemsOn2Page();
        browser.sleep(2000);
    });

    it('Provera da li se prvi prozivod ucitao na advanced search 2 strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSortingByPriceOn2Page();
        browser.sleep(2000);
    });

    it('Klik na Next in pagination to get 3 page', function(){
        testAdvancedSorting.clickPageThree();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao advenced search and price sort on 3 page URL', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortOn3PageURL();
        browser.sleep(2000);
    });

    it('Provera da li je dobar number of items on 3 page', function(){
        testAdvancedSorting.checkNumberOfItemsOn3Page();
        browser.sleep(2000);
    });

    it('Provera da li se prvi prozivod ucitao na advanced search 3 strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSortingByPriceOn3Page();
        browser.sleep(2000);
    });

    it('Klik on Set Descending Direction link', function(){
        testAdvancedSorting.clickOnSetDescendingDirection();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao URL nakon set descending direction ', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortOn3PageAfterSetDescendingDirectioURL();
        browser.sleep(2000);
    });

    it('Provera da li se prvi prozivod ucitao na advanced search 2 strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSetDescendingDirectio();
        browser.sleep(2000);
    });

    it('Select Product name za sorting', function(){
        testAdvancedSorting.selectProductNameToSort();
        browser.sleep(5000);
    });

    it('Provera da li se prvi prozivod ucitao nakon setovanja product name', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSetProductNameToSort();
        browser.sleep(2000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});