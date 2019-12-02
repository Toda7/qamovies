var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testSortingByShoppingOptions = require('./testSortingByShoppingOptions-po.js');
var testSortingByPrice = require('../testSortingByPrice/testSortingByPrice-po.js');

describe('Sorting by shopping options in truglo', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
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

    it('Provera da li je dobar number of items on page', function(){
        testSortingByName.checkNumberOfItems();
    });

    it('Klik on "Category" option to get drop menu', function(){
        testSortingByShoppingOptions.clickOnCategoryOptionToOpenMenu();
    });

    it('Klik on option in category drop menu', function(){
        testSortingByShoppingOptions.clickOptionInCategoryDrop();
    });

    it('Provera da li se ucitao URL sa parametrom za Turkey Hunting za sorting', function(){
        testSortingByShoppingOptions.checkSortingURL();
    });

    it('Provera da li se ucitao product', function(){
        testSortingByShoppingOptions.checkThatProductIsLoadedForTurkeyFilter();
    });

    it('Provera da li je dobar number of items on page', function(){
        testSortingByShoppingOptions.checkNumberOfItems();
    });
    
    it('Klik on CLEAR ALL option', function(){
        testSortingByShoppingOptions.clickOnClearAllOption();
    });

    it('Provera da li se ucitao URL bez parametrom za Turkey Hunting', function(){
        testSortingByShoppingOptions.checkSortingURL1();
    });

    it('Klik on "Category" option to get drop menu', function(){
        testSortingByShoppingOptions.clickOnCategoryOptionToOpenMenu();
    });

    it('Klik on 2 option in category drop menu', function(){
        testSortingByShoppingOptions.click2OptionInCategoryDrop();
    });

    it('Provera da li se ucitao URL sa parametrom Red Dots za sorting', function(){
        testSortingByShoppingOptions.checkSortingURL2();
    });

    it('Klik on "Price" option to get drop menu', function(){
        testSortingByShoppingOptions.clickOnPriceOptionToOpenMenu();
    });

    it('Klik on 1 option in price drop menu', function(){
        testSortingByShoppingOptions.clickOptionInPriceDrop();
    });

    it('Provera da li se ucitao URL sa parametrom za Red Dots and $0.00 - $100.00', function(){
        testSortingByShoppingOptions.checkSortingURL3();
    });

    it('Provera da li se ucitao product za Red Dots and $0.00 - $100.00', function(){
        testSortingByShoppingOptions.checkThatProductIsLoadedForRedDotsFilter();
    });

    it(' Provera da li je dobar number of items on page kada smo selektovali $0 and Red Dots product', function(){
        testSortingByShoppingOptions.checkNumberOfItems2();
    });

    it('Klik on CLEAR ALL option', function(){
        testSortingByShoppingOptions.clickOnClearAllOption();
    });

    it('Klik on "Category" option to get drop menu', function(){
        testSortingByShoppingOptions.clickOnCategoryOptionToOpenMenu();
    });

    it('Klik on option in category drop menu', function(){
        testSortingByShoppingOptions.clickOptionInCategoryDrop();
    });

    it('Klik na sort', function(){
        testSortingByName.clickOnSort();
    });

    it('Select Product name za sorting', function(){
        testSortingByPrice.selectPriceToSort();
    });

    it('Provera da li se ucitao URL sa parametrom za Red Dots and $0.00 - $100.00 + product name', function(){
        testSortingByShoppingOptions.checkSortingURL4();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});