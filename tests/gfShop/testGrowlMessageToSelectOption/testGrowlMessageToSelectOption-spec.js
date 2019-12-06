var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testGrowlMessageToSelectOption = require('./testGrowlMessageToSelectOption-po.js');

describe('Test da li se pojavljuje growl message to select option for product', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
    });

    it(' Hover first product on page to get "add to cart" button', function(){
        testGrowlMessageToSelectOption.hoverProductToGetAddToCartButton();
    });

    it('Klik on add to cart buttons', function(){
        testGrowlMessageToSelectOption.clickOnAddToCartButton();
    });

    it('Ceker - da li se pojavila poruka for need to select option ', function(){
        testGrowlMessageToSelectOption.checkIsGrowlMessageIsHere();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});