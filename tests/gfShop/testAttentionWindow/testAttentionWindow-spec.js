var testPlaceFFLOrder = require('../testPlaceFFLOrder/testPlaceFFLOrder-po.js');
var testAttentionWindow = require('./testAttentionWindow-po.js');


describe('Attention window kada hocemo da dodamo vise od 1000 proizvoda u cart', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product details page', function(){
        testAttentionWindow.landOnProductPage();
        browser.sleep(5000);
    });

    it('Klik on ADD TO CART button', function(){
        testPlaceFFLOrder.clickOnAddToCart();
        browser.sleep(3000);
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
        browser.sleep(6000);
    });

    it('Unos broja Producta', function(){
        testAttentionWindow.enterNumber();
        browser.sleep(3000);
    });

    it('Klik na update dugme', function(){
        testAttentionWindow.clickOnUpdate();
        browser.sleep(8000);
    });

    it('Provera da li se ucitao Attention title u windowsu', function(){
        testAttentionWindow.checkAttentionTitleOfBox();
        browser.sleep(5000);
    });

    it('Provera da li se ucitala poruka u windowsu', function(){
        testAttentionWindow.checkAttentionContentOfBox();
    });

    it('Klik on OK', function(){
        testAttentionWindow.clickOnOK();
        browser.sleep(4000);
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
        browser.sleep(4000);
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
        browser.sleep(4000);
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
        browser.sleep(3000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});