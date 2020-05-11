var testZendesk = require('./testZendesk-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js')
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js')
var testPlaceFFLOrder = require('../testPlaceFFLOrder/testPlaceFFLOrder-po.js')
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js')
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js')


describe('Provera da li se Zendesk nalazi na strani', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

   it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(3000);
    });
    
    it('Klik on Zendesk to open form on home page', function(){
        testZendesk.clickOnZendesk();
        browser.sleep(2000);
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
        browser.sleep(2000);
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
        browser.sleep(3000);
    });

    it('Klik on Zendesk to open form on my account page', function(){
        testZendesk.clickOnZendesk();
    });

    it('Dolazak na product details page', function(){
        testAttentionWindow.landOnProductPage();
        browser.sleep(2000);
    });

    it('Klik on Zendesk to open form on product details page', function(){
        testZendesk.clickOnZendesk();
        browser.sleep(2000);
    });

    it('Klik on ADD TO CART button', function(){
        testPlaceFFLOrder.clickOnAddToCart();
        browser.sleep(3000);
    });

    // zakomentarisano jer se otvara zendesk i ne mozemo da klikneom na view and edit cart link
    // it('Otvori mini korpu', function () {
    //     testTwentyProductsOrder.openMiniCart();
    // });

    // it('Klik na View And Edit Cart', function () {
    //     testTwentyProductsOrder.clickViewAndEditCart();
    // });

    // it('Klik na Proceed to Checkout dugme', function () {
    //     testTwentyProductsOrder.clickProceedToCheckout();
    // });

    // it('Klik on Zendesk to open form on checkout page', function(){
    //     testZendesk.clickOnZendesk();
    // });

    it('Dolazak na product details page', function(){
        testAttentionWindow.landOnProductPage();
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
        browser.sleep(2000);
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
        browser.sleep(2000);
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
        browser.sleep(2000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});