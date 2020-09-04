var testTwoUsersTheSameProduct = require('../testTwoUsersTheSameProduct/testTwoUsersTheSameProduct-po.js');
var prepareProductsForTest = require('../prepareProductsForTest/prepareProductsForTest-po.js');
var testColorLinksOnProductsListPage = require('../testColorLinksOnProductsListPage/testColorLinksOnProductsListPage-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testAddBillingAddress = require('../testAddBillingAddress/testAddBillingAddress-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');
var testMessageForNoOrders = require('../testMessageForNoOrders/testMessageForNoOrders-po.js');
var logInAsUser = require('../logInAsUser/logInAsUser-po.js');
var testDeleteProductEditCart = require('../testDeleteProductEditCart/testDeleteProductEditCart-po.js');


describe('Kupovina producta sa jednim userom, zatim logovanje sa drugim da cekiramo Out oF Stock poruku', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    // zakomentarisano jer se u testovima vec logujemo u magento
    // it('Dolazak u magento', function(){
    //     testAddBillingAddress.lendOnMagento();
    //     browser.sleep(5000);
    // });

    // it('Unesi Username', function(){
    //     prepareMagentoCoupon.enterUsername();
    //     browser.sleep(5000);
    // });

    // it('Unesi Password', function(){
    //     prepareMagentoCoupon.enterPass();
    //     browser.sleep(5000);
    // });

    // it('Klik na Sign In dugme', function(){
    //     prepareMagentoCoupon.clickOnSignIn();
    //     browser.sleep(5000);
    // });

    it('Dolazak na product product details u magentu', function () {
        testTwoUsersTheSameProduct.landProductMyDetailsPageInMagento();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Save button, tj da li se ucitala strana', function () {
        prepareProductsForTest.checkSaveButton();
        browser.sleep(5000);
    });

    it('Klik na switch', function () {
        prepareProductsForTest.clickSwitch();
        browser.sleep(5000);
    });

    it('Unosenje numbers u qty polje', function () {
        testTwoUsersTheSameProduct.enterNumbersOfQTY();
        browser.sleep(2000);
    });

    it('Selektovanje In stock option', function () {
        prepareProductsForTest.selectInStock();
        browser.sleep(2000);
    });

    it('Klik na Save button', function () {
        prepareProductsForTest.clickOnSave();
        browser.sleep(5000);
    });

    it('Provera success poruke', function () {
        prepareProductsForTest.checkSuccessMessage();
        browser.sleep(4000);
    });

    it('Dolazak na product product details', function () {
        testTwoUsersTheSameProduct.landProductMyDetailsPage();
        browser.sleep(4000);
    });

    it('Klik on Add to cart', function () {
        testColorLinksOnProductsListPage.clickOnAddToCart();
        browser.sleep(4000);
    });

    // log in sa userom 2 

    it('Dolazak na MDP page da bi uradili sign out', function(){
        testMessageForNoOrders.landOnMdpAsSecondUser();
        browser.sleep(2000);
    });

    it('Klik on avatar to open user menu', function(){
        testMessageForNoOrders.clickOnAvatarToOpenDropMenu();
        browser.sleep(2000);
    });

    it('Klik on Sign Out link', function(){
        testMessageForNoOrders.clickOnSignOut();
        browser.sleep(2000);
    });

    it('Dolazak na MDP page da bi uradili sign in', function(){
        testMessageForNoOrders.landOnMdpAsSecondUser();
        browser.sleep(2000);
    });

    it('Klik on click On Continue With Email', function(){
        testMessageForNoOrders.clickOnContinueWithEmail();
        browser.sleep(2000);
    });

    it('Unosenje user emaila', function(){
        testMessageForNoOrders.enterUserEmail();
        browser.sleep(2000);
    });

    it('Unosenje user passworda', function(){
        testMessageForNoOrders.enterUserPass();
        browser.sleep(2000);
    });

    it('Klik on Sign in with trappercreekllc@gmail.com', function(){
        testMessageForNoOrders.submit1();
        browser.sleep(2000);
    });

    it('Dolazak na product product details', function () {
        testTwoUsersTheSameProduct.landProductMyDetailsPage();
        browser.sleep(4000);
    });

    it('Klik on Add to cart', function () {
        testColorLinksOnProductsListPage.clickOnAddToCart();
        browser.sleep(4000);
    });

    // log in sa userom 1 
    
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

    it('Klik on Sign in with bradlyseales@gmail.com', function(){
        testMessageForNoOrders.submit1();
    });

    it('Dolazak na Shipping cart page', function () {
        testTwoUsersTheSameProduct.landOnShippingCartPage();
        browser.sleep(4000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(4000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(4000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(4000);
    });

    // log in sa userom 2 

    it('Dolazak na MDP page da bi uradili sign out', function(){
        testMessageForNoOrders.landOnMdpAsSecondUser();
        browser.sleep(2000);
    });

    it('Klik on avatar to open user menu', function(){
        testMessageForNoOrders.clickOnAvatarToOpenDropMenu();
        browser.sleep(2000);
    });

    it('Klik on Sign Out link', function(){
        testMessageForNoOrders.clickOnSignOut();
        browser.sleep(2000);
    });

    it('Dolazak na MDP page da bi uradili sign in', function(){
        testMessageForNoOrders.landOnMdpAsSecondUser();
        browser.sleep(2000);
    });

    it('Klik on click On Continue With Email', function(){
        testMessageForNoOrders.clickOnContinueWithEmail();
        browser.sleep(2000);
    });

    it('Unosenje user emaila', function(){
        testMessageForNoOrders.enterUserEmail();
        browser.sleep(2000);
    });

    it('Unosenje user passworda', function(){
        testMessageForNoOrders.enterUserPass();
        browser.sleep(2000);
    });

    it('Klik on Sign in with trappercreekllc@gmail.com', function(){
        testMessageForNoOrders.submit1();
        browser.sleep(2000);
    });

    it('Pokusaj odlaska na checkout stranu, to bi trebalo da nas redirektuje na edit card stranu', function () {
        testTwoUsersTheSameProduct.landCheckoutPage();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao Shipping Cart URL', function () {
        testTwoUsersTheSameProduct.checkEditCartURL();
    });

    it('Provera da li se ucitala This product is out of stock. poruka ', function () {
        testTwoUsersTheSameProduct.checkProductOutOfStockMessage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala Some of the products are out of stock. poruka', function () {
        testTwoUsersTheSameProduct.checkGlobalOutOfStockMessage();
    });

    it('Click on Delete Product', function () {
        testDeleteProductEditCart.clickOnDeleteProductIcon();
        browser.sleep(2000);
    });

    it('Cekira da li je Cart Empty', function () {
        testDeleteProductEditCart.checkEmptyCart();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});