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

    it('Klik on NEXT', function () {
        testAddFirstAddressOnCheckout.clickOnNext();
    });

    it('Provera error poruke1 "This is a required field"', function () {
        testAddFirstAddressOnCheckout.checkSuccess1();
    });

    it('Provera error poruke2 "This is a required field"', function () {
        testAddFirstAddressOnCheckout.checkSuccess2();
    });

    it('Provera error poruke3 "This is a required field"', function () {
        testAddFirstAddressOnCheckout.checkSuccess3();
    });

    it('Provera error poruke4 "This is a required field"', function () {
        testAddFirstAddressOnCheckout.checkSuccess4();
    });

    it('Provera error poruke5 "This is a required field"', function () {
        testAddFirstAddressOnCheckout.checkSuccess5();
    });

    it('Unesi Company name', function () {
        testAddFirstAddressOnCheckout.enterCompanyName();
    });

    it('Unesi Street name', function () {
        testAddFirstAddressOnCheckout.enterStreetName();
    });

    it('Unesi City name', function () {
        testAddFirstAddressOnCheckout.enterCityName();
    });
    
    it('Klik to select Province from drop', function () {
        testAddFirstAddressOnCheckout.clickToSelectProvince();
    });

    it('Unesi Zip', function () {
        testAddFirstAddressOnCheckout.enterZipCode();
    });

    it('Unesi broj telefona', function () {
        testAddFirstAddressOnCheckout.enterPhoneNumber();
        browser.sleep(6000);
    });

    it('Klik on NEXT', function () {
        testAddFirstAddressOnCheckout.clickOnNext();
    });

    it('Provera da li je Adresa vidljiva na Review & Payments', function () {
        testAddFirstAddressOnCheckout.checkEnteredAddress();
    });

    // Order treba da se zavrsi kada prorade kartice

    it('Dolazak na detail stranu Product-a', function () {
        testAddFirstAddressOnCheckout.landOnSpypointProductDetailPage();
    });

    it('Klik na add to cart button', function () {
        testAddFirstAddressOnCheckout.clickOnAddToCart();
    });

    it('Klik to open cart', function () {
        testAddFirstAddressOnCheckout.clickToOpenCart();
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});