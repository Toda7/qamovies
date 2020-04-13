var testCartBetweenShops = require('./testCartBetweenShops-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testEditQtyCart = require('../testEditQtyCart/testEditQtyCart-po.js');
var testDeleteProductCart = require('../testDeleteProductCart/testDeleteProductCart-po.js');

describe('Dodavanje producta u cart u 1 shopu i cekiranje carta u drugom shopu', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it(' Dolazak u Truglo shop', function(){
        testSortingByName.landOnTrugloPage();
    });

    it('Click na Drop menu', function(){
        testCartBetweenShops.hoverToOpenDrop();
    });

    it('Click na Scopes from Drop', function(){
        testCartBetweenShops.clickOnScopes();
    });

    it('Click na Product', function(){
        testCartBetweenShops.clickOnProduct();
    });

    it('klik na Add to cart', function(){
        testCartBetweenShops.clickAddToCart();
    });

    it('Da li smo dobili success poruku', function(){
        testCartBetweenShops.checkSuccessMsg();
    });

    it('Check Cart qty', function () {
        testCartBetweenShops.checkCartQty();
    });

    it('Odlazak u drugi shop', function () {
        testCartBetweenShops.landOnShop2();
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
    });

    it('Potvrda Empty Carta', function () {
        testDeleteProductCart.checkEmptyCart();
    });

    it(' Dolazak u Truglo shop', function(){
        testSortingByName.landOnTrugloPage();
    });

    it('Click On Cart', function () {
        testEditQtyCart.clickOnCart();
    });

    it('Click on Delete icon', function () {
        testDeleteProductCart.clickOnDelete();
    });

    it('Potvrda brisanja Producta', function () {
        testDeleteProductCart.clickOnDeleteConfirmation();
    });

    it('Potvrda Empty Carta', function () {
        testDeleteProductCart.checkEmptyCart();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});