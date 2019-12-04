var testProductWithTwoBoxes = require('./testProductWithTwoBoxes-po.js');

describe('Test product with two boxes', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product with two box details page', function(){
        testProductWithTwoBoxes.landOnProductDetailsPage();
    });

    it('Provera SKU-a', function(){
        testProductWithTwoBoxes.checkSku();
    });

    it('Klik to select first color box', function(){
        testProductWithTwoBoxes.clickOnFirstColorBox();
    });

    it('Provera First Color SKU-a - trebalo bi da je isti', function(){
        testProductWithTwoBoxes.checkSku();
    });

    it('Klik to select Medium box', function(){
        testProductWithTwoBoxes.clickOnMediumBox();
    });

    it('Provera first color and medium SKU-a', function(){
        testProductWithTwoBoxes.checkMediumSku();
    });

    it('Klik to select medium tall box', function(){
        testProductWithTwoBoxes.clickOnMediumTallBox();
    });

    it('Provera first color and medium tall SKU-a', function(){
        testProductWithTwoBoxes.checkMediumTallSku();
    });

    it('Klik to select SecondColor box', function(){
        testProductWithTwoBoxes.clickOnSecondColorBox();
    });

    it('Provera MediumTall SKU-a and second color', function(){
        testProductWithTwoBoxes.checkMediumTallAndSecondColorSku();
    });

    it('Klik to select Medium box', function(){
        testProductWithTwoBoxes.clickOnMediumBox();
    });

    it('Provera Medium SKU-a and second color', function(){
        testProductWithTwoBoxes.checkMediumAndSecondColorSku();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});