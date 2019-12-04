var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPlaceFFLOrder = require('../testPlaceFFLOrder/testPlaceFFLOrder-po.js');
var testCartWithFFLAndRegularProduct = require('./testCartWithFFLAndRegularProduct-po.js');

describe('Cart With FFL And Regular Product', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak u Weatherby shop na FFL product details page', function () {
        testPlaceFFLOrder.landOnWeatherbyPage();
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
    });

    it('Provera da li se ucitao restriction warning', function () {
        testCartWithFFLAndRegularProduct.checkRestrictionMessage();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});