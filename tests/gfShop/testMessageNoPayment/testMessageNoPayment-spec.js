var testMessageNoPayment = require('./testMessageNoPayment-po.js');
var testMessageForNoOrders = require('../testMessageForNoOrders/testMessageForNoOrders-po.js');
var logInAsUser = require('../logInAsUser/logInAsUser-po.js');

describe('Message for no payment', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Orders stranu', function () {
        testMessageForNoOrders.landOnMyOrdersPage();
    });

    it('Dolazak na My account stranu', function () {
        testMessageNoPayment.landOnMyPaymentInfo();
    });

    it('Provera no payment message', function () {
        testMessageNoPayment.checkNoPaymentMessage();
    });

    it('Pprovera urla nakon redirekcije', function () {
        testMessageNoPayment.checkURLAfterRedirect();
    });

    it('Dolazak na MDP page da bi uradili sign out', function(){
        testMessageForNoOrders.landOnMdpAsSecondUser();
    });

    it('Klik on avatar to open user menu', function(){
        testMessageForNoOrders.clickOnAvatarToOpenDropMenu();
    });

    it('Klik on Sign Out link', function(){
        testMessageForNoOrders.clickOnSignOut();
    });

    it('Dolazak na MDP page da bi uradili sign in', function(){
        testMessageForNoOrders.landOnMdpAsSecondUser();
    });

    it('Klik on click On Continue With Email', function(){
        testMessageForNoOrders.clickOnContinueWithEmail();
    });

    it('Unosenje user email', function(){
        logInAsUser.enterEmail();
    });

    it('Unosenje users email', function(){
        testMessageForNoOrders.enterUserPass();
    });

    it('Klik on Sign in', function(){
        testMessageForNoOrders.submit1();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});