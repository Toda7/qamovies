var testRegularVSDiscountPrice = require('./testRegularVSDiscountPrice-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');

describe('Da li se na home/listOfProduct/ProductDetails strani nalazi i regular i discount cena', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
    });

    it('Provera regular cene za prvi prozivod na home strani', function(){
        testRegularVSDiscountPrice.checkDicountPriceOnHomeForFirstProduct();
    });

    it('Provera discount cene za prvi prozivod na home strani', function(){
        testRegularVSDiscountPrice.checkRegularPriceOnHomeForFirstProduct();
    });

    it('Klik on link from navigation menu', function(){
        testSortingByName.clickOnLinkInNavMenu();
    });

    it('Provera da li se ucitao FIREARM-HUNTING URL', function(){
        testSortingByName.checkFireamHuntingURL();
    });

    it('Provera regular cene za prvi prozivod na list of product strani', function(){
        testRegularVSDiscountPrice.checkDicountPriceOnProductLisForFirstProduct();
    });

    it('Provera discount cene za prvi prozivod na list of product strani', function(){
        testRegularVSDiscountPrice.checkRegularPriceOnProductListForFirstProduct();
    });

    it('Dolazak na product details page', function(){
        testAttentionWindow.landOnProductPage();
    });

    it('Provera discount cene za prvi prozivod na details of product strani', function(){
        testRegularVSDiscountPrice.checkDicountPriceOnProductDetailsForFirstProduct();
    });

    it('Provera regular cene za prvi prozivod na details of product strani', function(){
        testRegularVSDiscountPrice.checkRegularPriceOnProductDetailstForFirstProduct();
    });

    // treba nastaviti za mini cart, view and edit, checkout ako ima 

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});