var testMessageForNoOrders = require('./testMessageForNoOrders-po.js');

describe('Message for no orders', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
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

    it('Unosenje users email', function(){
        testMessageForNoOrders.enterUserEmail();
    });

    it('Unosenje users email', function(){
        testMessageForNoOrders.enterUserPass();
    });

    it('Klik on Sign in', function(){
        testMessageForNoOrders.submit1();
    });

    it('Dolazak na My Orders stranu', function () {
        testMessageForNoOrders.landOnMyOrdersPage();
        browser.sleep(6000);
    });

    it('Provera no orders message', function () {
        testMessageForNoOrders.checkNoOrdersMessage();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});