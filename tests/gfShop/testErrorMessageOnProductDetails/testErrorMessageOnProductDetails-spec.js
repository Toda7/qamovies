var testErrorMessageOnProductDetails = require('./testErrorMessageOnProductDetails-po.js');
var testProductWithOneBox = require('../testProductWithOneBox/testProductWithOneBox-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');

describe('Provera error poruke kada ne selektujemo option/box i kada ne staviom broj u qty polje', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na product with one box details page', function () {
        testProductWithOneBox.landOnProductDetailsPage();
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Provera da li se ucitala required message za box', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForBox();
    });

    it('Klik to select Medium box', function(){
        testProductWithOneBox.clickOnMediumBox();
    }); 

    it('Brisanje broja iz qty polja', function () {
        testErrorMessageOnProductDetails.clearQtyField();
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Provera da li se ucitala required message jer nema broja u QTY', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForQTY();
    });

    it('Unesi broja iz qty polja', function () {
        testErrorMessageOnProductDetails.EnterQty();
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(5000);
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
        browser.sleep(5000);
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
    });

    it('Dolazak na product koji ima drop ', function () {
        testErrorMessageOnProductDetails.landOnProductDetailsPage();
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(5000);
    });

    it('Provera da li se ucitala required message za drop', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForDrop();
    });

    it('Select option from drop', function () {
        testErrorMessageOnProductDetails.selectOptionFromDrop();
    });

    it('Brisanje broja iz qty polja', function () {
        testErrorMessageOnProductDetails.clearQtyField();
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Provera da li se ucitala required message jer nema broja u QTY', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForQTY();
    });

    it('Unesi broja iz qty polja', function () {
        testErrorMessageOnProductDetails.EnterQty();
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(5000);
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
        browser.sleep(5000);
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});