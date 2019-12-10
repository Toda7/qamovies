var testAdvancedSorting = require('./testAdvancedSorting-po.js');

describe('Sorting on advenced search page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na advanced search page', function(){
        testAdvancedSorting.landOnAdvancedSearchPage();
    });

    it('Unosenje texta u short descripton polje', function(){
        testAdvancedSorting.enterTextInShortDescriptionField();
    });

    it('Klik on SEARCH button', function(){
        testAdvancedSorting.clickOnSearchButton();
    });

    it('Provera URLa nakon uradjenog searcha', function(){
        testAdvancedSorting.checkAdvencedSearchURL();
    });

    it('Provera da li je dobar number of items', function(){
        testAdvancedSorting.checkNumberOfItems();
    });

    it('Provera da li se prvi prozivod ucitao na advanced search strani', function(){
        testAdvancedSorting.checkIsProductIsHere();
    });

    it('Select Price za sorting', function(){
        testAdvancedSorting.selectPriceToSort();
    });

    it('Provera da li se ucitao advenced search and price sort URL', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortURL();
    });

    it('Provera da li se prvi prozivod ucitao na advanced search strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSortingByPrice();
    });

    it('Provera da li je dobar number of items', function(){
        testAdvancedSorting.checkNumberOfItems();
    });

    it('Klik na Next in pagination to get 2 page', function(){
        testAdvancedSorting.clickPageTwo();
    });

    it('Provera da li se ucitao advenced search and price sort on 2 page URL', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortOn2PageURL();
    });

    it('Provera da li je dobar number of items on 2 page', function(){
        testAdvancedSorting.checkNumberOfItemsOn2Page();
    });

    it('Provera da li se prvi prozivod ucitao na advanced search 2 strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSortingByPriceOn2Page();
    });

    it('Klik na Next in pagination to get 3 page', function(){
        testAdvancedSorting.clickPageThree();
    });

    it('Provera da li se ucitao advenced search and price sort on 3 page URL', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortOn3PageURL();
    });

    it('Provera da li je dobar number of items on 3 page', function(){
        testAdvancedSorting.checkNumberOfItemsOn3Page();
    });

    it('Provera da li se prvi prozivod ucitao na advanced search 3 strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSortingByPriceOn3Page();
    });

    it('Klik on Set Descending Direction link', function(){
        testAdvancedSorting.clickOnSetDescendingDirection();
    });

    it('Provera da li se ucitao URL nakon set descending direction ', function(){
        testAdvancedSorting.checkAdvencedSearchAndPriceSortOn3PageAfterSetDescendingDirectioURL();
    });

    it('Provera da li se prvi prozivod ucitao na advanced search 2 strani nakon sortiranja by Price', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSetDescendingDirectio();
    });

    it('Select Product name za sorting', function(){
        testAdvancedSorting.selectProductNameToSort();
    });

    it('Provera da li se prvi prozivod ucitao nakon setovanja product name', function(){
        testAdvancedSorting.checkIsProductIsHereAfterSetProductNameToSort();
    });



        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});