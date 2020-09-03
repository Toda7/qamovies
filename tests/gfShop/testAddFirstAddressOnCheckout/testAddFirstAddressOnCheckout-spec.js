var testAddFirstAddressOnCheckout = require('./testAddFirstAddressOnCheckout-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');


describe('Pravljenje adrese na Checkout strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Spypoint shop', function () {
        testAddFirstAddressOnCheckout.landOnSpypointHomePage();
    });

    it('Dolazak na detail stranu Product-a', function () {
        testAddFirstAddressOnCheckout.landOnSpypointProductDetailPage();
    });

    it('Klik na add to cart button', function () {
        testAddFirstAddressOnCheckout.clickOnAddToCart();
    });

    it('Klik to open cart', function () {
        testAddFirstAddressOnCheckout.clickToOpenCart();
    });

    it('Klik to go to checkout page', function () {
        testAddFirstAddressOnCheckout.clickToGoToCheckoutPage();
    });

    // nakon update magenta, nemamo vise NEXT button jer nemamo addresu 
    // it('Klik on NEXT', function () {
    //     testAddFirstAddressOnCheckout.clickOnNext();
    // });

    // it('Provera error poruke1 "This is a required field"', function () {
    //     testAddFirstAddressOnCheckout.checkSuccess1();
    // });

    // it('Provera error poruke2 "This is a required field"', function () {
    //     testAddFirstAddressOnCheckout.checkSuccess2();
    // });

    // it('Provera error poruke3 "This is a required field"', function () {
    //     testAddFirstAddressOnCheckout.checkSuccess3();
    // });

    // it('Provera error poruke4 "This is a required field"', function () {
    //     testAddFirstAddressOnCheckout.checkSuccess4();
    // });

    // it('Provera error poruke5 "This is a required field"', function () {
    //     testAddFirstAddressOnCheckout.checkSuccess5();
    // });

    it('Unesi Company name', function () {
        testAddFirstAddressOnCheckout.enterCompanyName();
        browser.sleep(2000);
    });

    it('Unesi Street name', function () {
        testAddFirstAddressOnCheckout.enterStreetName();
        browser.sleep(2000);
    });

    it('Unesi City name', function () {
        testAddFirstAddressOnCheckout.enterCityName();
        browser.sleep(2000);
    });
    
    it('Klik to select Province from drop', function () {
        testAddFirstAddressOnCheckout.clickToSelectProvince();
        browser.sleep(2000);
    });

    it('Unesi Zip', function () {
        testAddFirstAddressOnCheckout.enterZipCode();
        browser.sleep(2000);
    });

    it('Unesi broj telefona', function () {
        testAddFirstAddressOnCheckout.enterPhoneNumber();
        browser.sleep(6000);
    });

    it('Klik on NEXT', function () {
        testAddFirstAddressOnCheckout.clickOnNext();
        browser.sleep(5000);
    });

    it('Provera da li je Adresa vidljiva na Review & Payments', function () {
        testAddFirstAddressOnCheckout.checkEnteredAddress();
        browser.sleep(2000);
    });

    // Order treba da se zavrsi kada prorade kartice

    it('Dolazak na detail stranu Product-a', function () {
        testAddFirstAddressOnCheckout.landOnSpypointProductDetailPage();
        browser.sleep(2000);
    });

    it('Klik na add to cart button', function () {
        testAddFirstAddressOnCheckout.clickOnAddToCart();
        browser.sleep(2000);
    });

    it('Klik to open cart', function () {
        testAddFirstAddressOnCheckout.clickToOpenCart();
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

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});