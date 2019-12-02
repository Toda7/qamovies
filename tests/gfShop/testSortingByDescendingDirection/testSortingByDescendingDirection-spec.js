var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testSortingByDescendingDirection = require('./testSortingByDescendingDirection-po.js');
var testSortingByShoppingOptions = require('../testSortingByShoppingOptions/testSortingByShoppingOptions-po.js');

describe('Sorting by Descending Direction in truglo', function(){

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

    it('Provera position of product before sorting', function(){
        testSortingByDescendingDirection.checkPositonOfProduct();
    });

    it('Klik on Set Descending Direction link ', function(){
        testSortingByDescendingDirection.clickOnSetDescendingDirection();
    });

    it('Provera da li se ucitao URL sa parametrom za Set Descending Direction', function(){
        testSortingByDescendingDirection.checkSortingURL();
    });

    it('Provera position of product after sorting', function(){
        testSortingByDescendingDirection.checkPositonOfProductAfterSorting();
    });

    it('Klik on Select option to get drop menu', function(){
        testSortingByDescendingDirection.clickOnSelectOptionToOpenMenu();
    });

    it('Klik on option in category drop menu', function(){
        testSortingByDescendingDirection.clickOptionInCategoryDrop();
    });

    it('Provera da li se ucitao URL sa parametrom za Set Descending Direction i selected option ', function(){
        testSortingByDescendingDirection.checkSortingURL1();
    });

    it('Klik on CLEAR ALL option', function(){
        testSortingByShoppingOptions.clickOnClearAllOption();
    });

    it('Provera da li se ucitao URL sa parametrom za Set Descending Direction', function(){
        testSortingByDescendingDirection.checkSortingURL();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});