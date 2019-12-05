var testRegularVSDiscountPrice = require('./testRegularVSDiscountPrice-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');
var testPlaceFFLOrder = require('../testPlaceFFLOrder/testPlaceFFLOrder-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');



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

    it('Klik on ADD TO CART button', function(){
        testPlaceFFLOrder.clickOnAddToCart();
        browser.sleep(3000);
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
    });

    it('Provera discount cene za prvi prozivod in mini cart', function(){
        testRegularVSDiscountPrice.checkDicountPriceInMiniCartDetailsForFirstProduct();
    });

    it('Provera regular cene za prvi prozivod in mini cart', function(){
        testRegularVSDiscountPrice.checkRegularPriceInMiniCartDetailstForFirstProduct();
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
    });

    it('Provera discount cene za prvi prozivod on view and edit cart page', function(){
        testRegularVSDiscountPrice.checkDicountPriceOnViewAndEditpageForFirstProduct();
    });

    it('Provera regular cene za prvi prozivod on view and edit cart page', function(){
        testRegularVSDiscountPrice.checkRegularPriceOnViewAndEditpagetForFirstProduct();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Klik to open items section', function () {
        testRegularVSDiscountPrice.clickToOpenItemsSection();
    });

    it('Provera regular cene za prvi prozivod na checkout strani', function () {
        testRegularVSDiscountPrice.checkDicountPriceOCheckouttForFirstProduct();
    });

    it('Dolazak na product details page', function(){
        testAttentionWindow.landOnProductPage();
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});