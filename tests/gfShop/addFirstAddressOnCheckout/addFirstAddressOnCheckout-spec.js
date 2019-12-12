var addFirstAddressOnCheckout = require('./addFirstAddressOnCheckout-po.js');
var testMessageForNoOrders = require('../testMessageForNoOrders/testMessageForNoOrders-po.js');
var logInAsUser = require('../logInAsUser/logInAsUser-po.js');

describe('Pravljenje adrese na Checkout strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na MDP page da bi uradili sign out', function () {
        testMessageForNoOrders.landOnMdpAsSecondUser();
    });

    it('Klik on avatar to open user menu', function () {
        testMessageForNoOrders.clickOnAvatarToOpenDropMenu();
    });

    it('Klik on Sign Out link', function () {
        testMessageForNoOrders.clickOnSignOut();
    });

    it('Dolazak na MDP page da bi uradili sign in', function () {
        testMessageForNoOrders.landOnMdpAsSecondUser();
    });

    it('Klik on click On Continue With Email', function () {
        testMessageForNoOrders.clickOnContinueWithEmail();
    });

    it('Unosenje users email', function () {
        testMessageForNoOrders.enterUserEmail();
    });

    it('Unosenje users email', function () {
        testMessageForNoOrders.enterUserPass();
    });

    it('Klik on Sign in', function () {
        testMessageForNoOrders.submit1();
    });

    it('Dolazak na Spypoint shop', function () {
        addFirstAddressOnCheckout.landOnSpypointHomePage();
    });

    it('Dolazak na detail stranu Product-a', function () {
        addFirstAddressOnCheckout.landOnSpypointProductDetailPage();
    });

    it('Klik na add to cart button', function () {
        addFirstAddressOnCheckout.clickOnAddToCart();
    });

    it('Klik to open cart', function () {
        addFirstAddressOnCheckout.clickToOpenCart();
    });

    it('Klik to go to checkout page', function () {
        addFirstAddressOnCheckout.clickToGoToCheckoutPage();
    });

    it('Klik on NEXT', function () {
        addFirstAddressOnCheckout.clickOnNext();
    });

    it('Provera error poruke1 "This is a required field"', function () {
        addFirstAddressOnCheckout.checkSuccess1();
    });

    it('Provera error poruke2 "This is a required field"', function () {
        addFirstAddressOnCheckout.checkSuccess2();
    });

    it('Provera error poruke3 "This is a required field"', function () {
        addFirstAddressOnCheckout.checkSuccess3();
    });

    it('Provera error poruke4 "This is a required field"', function () {
        addFirstAddressOnCheckout.checkSuccess4();
    });

    it('Provera error poruke5 "This is a required field"', function () {
        addFirstAddressOnCheckout.checkSuccess5();
    });

    it('Unesi Company name', function () {
        addFirstAddressOnCheckout.enterCompanyName();
    });

    it('Unesi Street name', function () {
        addFirstAddressOnCheckout.enterStreetName();
    });

    it('Unesi City name', function () {
        addFirstAddressOnCheckout.enterCityName();
    });
    
    it('Klik to select Province from drop', function () {
        addFirstAddressOnCheckout.clickToSelectProvince();
    });

    it('Unesi Zip', function () {
        addFirstAddressOnCheckout.enterZipCode();
    });

    it('Unesi broj telefona', function () {
        addFirstAddressOnCheckout.enterPhoneNumber();
        browser.sleep(6000);
    });

    it('Klik on NEXT', function () {
        addFirstAddressOnCheckout.clickOnNext();
    });

    it('Provera da li je Adresa vidljiva na Review & Payments', function () {
        addFirstAddressOnCheckout.checkEnteredAddress();
    });

    it('Dolazak na MDP page da bi uradili sign out', function () {
        testMessageForNoOrders.landOnMdpAsSecondUser();
    });

    it('Klik on avatar to open user menu', function () {
        testMessageForNoOrders.clickOnAvatarToOpenDropMenu();
    });

    it('Klik on Sign Out link', function () {
        testMessageForNoOrders.clickOnSignOut();
    });

    it('Dolazak na MDP page da bi uradili sign in', function () {
        testMessageForNoOrders.landOnMdpAsSecondUser();
    });

    it('Klik on click On Continue With Email', function () {
        testMessageForNoOrders.clickOnContinueWithEmail();
    });

    it('Unosenje user email', function () {
        logInAsUser.enterEmail();
    });

    it('Unosenje users email', function () {
        testMessageForNoOrders.enterUserPass();
    });

    it('Klik on Sign in', function () {
        testMessageForNoOrders.submit1();
    });

    // Order treba da se zavrsi kada prorade kartice

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});