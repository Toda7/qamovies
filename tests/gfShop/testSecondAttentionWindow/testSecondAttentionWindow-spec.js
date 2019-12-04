var testPlaceFFLOrder = require('../testPlaceFFLOrder/testPlaceFFLOrder-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');
var testSecondAttentionWindow = require('./testSecondAttentionWindow-po.js');


describe('Attention window kada hocemo da dodamo vise od 50+ proizvoda u cart', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product details page', function(){
        testAttentionWindow.landOnProductPage();
    });

    it('Klik on ADD TO CART button', function(){
        testPlaceFFLOrder.clickOnAddToCart();
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
    });

    it('Unos broja Producta', function(){
        testSecondAttentionWindow.enterNumber();
    });

    it('Klik na update dugme', function(){
        testAttentionWindow.clickOnUpdate();
    });

    it('Provera da li se ucitao Attention title u windowsu', function(){
        testSecondAttentionWindow.checkAttentionTitleOfBox();
    });

    it('Provera da li se ucitala poruka u windowsu', function(){
        testSecondAttentionWindow.checkAttentionContentOfBox();
    });

    it('Klik on OK', function(){
        testAttentionWindow.clickOnOK();
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