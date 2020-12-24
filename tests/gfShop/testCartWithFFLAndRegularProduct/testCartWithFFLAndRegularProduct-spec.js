var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPlaceFFLOrder = require('../testPlaceFFLOrder/testPlaceFFLOrder-po.js');
var testCartWithFFLAndRegularProduct = require('./testCartWithFFLAndRegularProduct-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');

describe('Cart With FFL And Regular Product', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak u Weatherby shop na FFL product details page', function () {
        testPlaceFFLOrder.landOnWeatherbyPage();
        browser.refresh();
        browser.sleep(4000);
    });

    it('Izaberi opciju iz dropa', function () {
        testCartWithFFLAndRegularProduct.chooseOptionFFL();
    });

    it('Provera da li se ucitao warning notice za FFL proizvode', function () {
        testCartWithFFLAndRegularProduct.checkWarningNotice();
    });

    it('Dodaj proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Dolazak na Regular Product details page', function () {
        testCartWithFFLAndRegularProduct.landOnRegularProductDetailsPage();
    });

    it('Provera da li se ucitao important notice za FFL proizvode', function () {
        testCartWithFFLAndRegularProduct.checkImportantNotice();
    });

    it('Izaberi opciju iz dropa za regular product', function () {
        testCartWithFFLAndRegularProduct.chooseOptionRegular();
    });

    it('Dodaj proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(5000);
    });

    it('Provera da li se ucitao restriction warning', function () {
        testCartWithFFLAndRegularProduct.checkRestrictionMessage();
        browser.sleep(2000);
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
        browser.sleep(3000);
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
        browser.sleep(3000);
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
        browser.sleep(3000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});