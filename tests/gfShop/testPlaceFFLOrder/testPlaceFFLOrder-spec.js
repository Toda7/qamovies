var testPlaceFFLOrder = require('./testPlaceFFLOrder-po.js');

describe('Narucivanje FFL ordera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak u weatherby shop na product details page', function(){
        testPlaceFFLOrder.landOnWeatherbyPage();
        browser.sleep(2000);
    });

    it('Klik to open drop options', function(){
        testPlaceFFLOrder.clickToOpenDrop();
        browser.sleep(3000);
    });

    it('Select option', function(){
        testPlaceFFLOrder.selectOptionFromDrop();
        browser.sleep(1000);
    });

    it('Klik na add to cart button', function(){
        testPlaceFFLOrder.clickOnAddToCart();
        browser.sleep(2000);
    });

    it('Klik to open mini cart', function(){
        testPlaceFFLOrder.clickToOpenCart();
        browser.sleep(2000);
    });

    it('Klik to go to checkout page', function(){
        testPlaceFFLOrder.clickToGoToCheckoutPage();
        browser.sleep(7000);
    });

    it('Provera da li se uctao title on checkout page', function(){
        testPlaceFFLOrder.checkTitleOnPage();
    });

    // it('Provera da li se uctao description on checkout page', function(){
    //     testPlaceFFLOrder.checkDescriptionOnPage();
    //     browser.sleep(5000);
    // });

    it('Enter zip in search field', function(){
        testPlaceFFLOrder.enterZipInSearchField();
        browser.sleep(3000);
    });

    it('Klik on Search page', function(){
        testPlaceFFLOrder.clickOnSearchButton();
        browser.sleep(5000);
    });

    it('Klik to select dealer from the list', function(){
        testPlaceFFLOrder.clickToSelectDealer();
    });

    it('Klik on Next button', function(){
        testPlaceFFLOrder.clickOnNextButton();
        browser.sleep(5000);
    });

    it('Klik on PLACE ORDER button', function(){
        testPlaceFFLOrder.clickOnOrderButton();
        browser.sleep(5000);
    });

    it('Provera da li se uctao Thanks title on Success page', function(){
        testPlaceFFLOrder.checkThanksTitleOnPage();
    });

    it('Provera da li se ucitao success URL', function(){
        testPlaceFFLOrder.checkSuccessURL();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});