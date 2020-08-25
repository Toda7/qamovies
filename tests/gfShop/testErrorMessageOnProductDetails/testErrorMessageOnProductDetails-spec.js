var testErrorMessageOnProductDetails = require('./testErrorMessageOnProductDetails-po.js');
var testProductWithOneBox = require('../testProductWithOneBox/testProductWithOneBox-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');

describe('Provera error poruke kada ne selektujemo option or box i kada ne staviom broj u qty polje', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na product with one box details page', function () {
        testProductWithOneBox.landOnProductDetailsPage();
        browser.sleep(1000);
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala required message za box', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForBox();
        browser.sleep(1000);
    });

    it('Klik to select Medium box', function(){
        testProductWithOneBox.clickOnMediumBox();
        browser.sleep(1000);
    }); 

    it('Brisanje broja iz qty polja', function () {
        testErrorMessageOnProductDetails.clearQtyField();
        browser.sleep(1000);
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala required message jer nema broja u QTY', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForQTY();
        browser.sleep(1000);
    });

    it('Unesi broja iz qty polja', function () {
        testErrorMessageOnProductDetails.EnterQty();
        browser.sleep(1000);
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
        browser.sleep(2000);
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
        browser.sleep(3000);
    });

    it('Dolazak na product koji ima drop ', function () {
        testErrorMessageOnProductDetails.landOnProductDetailsPage();
        browser.sleep(1000);
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(64000);
    });

    it('Provera da li se ucitala required message za drop', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForDrop();
        browser.sleep(1000);
    });

    it('Select option from drop', function () {
        testErrorMessageOnProductDetails.selectOptionFromDrop();
        browser.sleep(1000);
    });

    it('Brisanje broja iz qty polja', function () {
        testErrorMessageOnProductDetails.clearQtyField();
        browser.sleep(1000);
    });

    it('Klik on ADD TO CART button', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala required message jer nema broja u QTY', function () {
        testErrorMessageOnProductDetails.checkRequiredMessageForQTY();
        browser.sleep(1000);
    });

    it('Unesi broja iz qty polja', function () {
        testErrorMessageOnProductDetails.EnterQty();
        browser.sleep(1000);
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
        browser.sleep(4000);
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
        browser.sleep(1000);
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});