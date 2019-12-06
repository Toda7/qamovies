var testProductWithOneBox = require('./testProductWithOneBox-po.js');

describe('Test product with one box', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product with one box details page', function(){
        testProductWithOneBox.landOnProductDetailsPage();
    });

    it('Provera SKU-a', function(){
        testProductWithOneBox.checkSku();
    });

    it('Klik to select Medium box', function(){
        testProductWithOneBox.clickOnMediumBox();
    });

    it('Provera Medium SKU-a', function(){
        testProductWithOneBox.checkMediumSku();
    });

    it('Klik to select Large box', function(){
        testProductWithOneBox.clickOnLargeBox();
    });

    it('Provera Large SKU-a', function(){
        testProductWithOneBox.checkLargeSku();
    });

    it('Klik to select XLarge box', function(){
        testProductWithOneBox.clickOnXLargeBox();
    });

    it('Provera XLarge SKU-a', function(){
        testProductWithOneBox.checkXLargeSku();
    });

    it('Klik to select XXLarge box', function(){
        testProductWithOneBox.clickOnXXLargeBox();
    });

    it('Provera XXLarge SKU-a', function(){
        testProductWithOneBox.checkXXLargeSku();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});