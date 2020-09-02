var testProductWithTwoDrops = require('./testProductWithTwoDrops-po.js');

describe('Test product with two drops', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na product with two drops details page', function(){
        testProductWithTwoDrops.landOnProductDetailsPage();
    });

    it('Provera SKU-a', function(){
        testProductWithTwoDrops.checkSku();
    });

    it('Klik to select first option in first drop', function(){
        testProductWithTwoDrops.selectFristOptionForFirstDrop();
    });

    it('Provera SKU-a for first option in first drop', function(){
        testProductWithTwoDrops.checkFirstOptonFirstDropSku();
    });

    it('Klik to select First option in Second drop', function(){
        testProductWithTwoDrops.selectFirstOptionForSecondDrop();
    });

    it('Provera SKU-a for first option in first drop and first option in second drop', function(){
        // sku je isti kao i kada smo selektovali frist option/drop zato je ista funkcija u ovom itu
        testProductWithTwoDrops.checkSecondOptonSecondDropSku();
    });

    it('Klik to select Second option in Second drop', function(){
        testProductWithTwoDrops.selectSecondOptionForSecondDrop();
    });

    it('Provera SKU-a for first option in first drop and second option in second drop', function(){
        testProductWithTwoDrops.checkFirstInFirstSecondInSecond();
    });

    it('Klik to select Second option in first drop', function(){
        testProductWithTwoDrops.selectSecondOptionForFirstDrop();
    });

    it('Provera SKU-a for second option in first drop', function(){
        testProductWithTwoDrops.checkSecondOptonFirstDropSku();
    });

    it('Klik to select First option in Second drop', function(){
        testProductWithTwoDrops.selectFirstOptionForSecondDrop();
    });

    it('Provera SKU-a for second option in first drop and first option in second drop', function(){
        testProductWithTwoDrops.checkSecondInFirstAndFirstInSecond();
    });

    it('Klik to select Second option in second drop', function(){
        testProductWithTwoDrops.selectSecondOptionForSecondDrop();
    });

    it('Provera SKU-a for second option in second drop and second option in second drop', function(){
        // sku je isti kao i kada smo selektovali second option for first drop zato je ista funkcija u ovom itu
        testProductWithTwoDrops.checkSecondOptonsFirstSecondDropSku();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});