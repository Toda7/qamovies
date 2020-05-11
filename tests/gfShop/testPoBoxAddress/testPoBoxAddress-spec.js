var testPoBoxAddress = require('./testPoBoxAddress-po.js');
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testDeleteAddress = require('../testDeleteAddress/testDeleteAddress-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');
var testRestrictedAreaMessage = require('../testRestrictedAreaMessage/testRestrictedAreaMessage-po.js');

describe('Test PO box address from address book', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testPoBoxAddress.lendOnHornady();
        browser.sleep(1000);
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
        browser.sleep(1000);
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
        browser.sleep(1000);
    });

    it('Klik on Address Book', function(){
        testAddNewAddress.clickAddressBook();
        browser.sleep(1000);
    });

    it('Klik on Add New Address button', function(){
        testAddNewAddress.clickAddNewAddress();
        browser.sleep(1000);
    });

    it('Unesi Phone Number', function(){
        testAddNewAddress.enterPhoneNumber();
        browser.sleep(1000);
    });
    
    it('Unesi Street', function(){
        testPoBoxAddress.enterStreet();
        browser.sleep(1000);
    });

    it('Unesi City', function(){
        testPoBoxAddress.enterCity();
        browser.sleep(1000);
    });

    it('Klik on Privince link to get drop down options', function(){
        testAddNewAddress.clickProvince();
        browser.sleep(3000);
    });

    it('Klik to select option from drop', function(){
        testPoBoxAddress.clickToSelectProvince();
        browser.sleep(3000);
    });

    it('Unesi Zip', function(){
        testAddNewAddress.enterZip();
        browser.sleep(1000);
    });

    it('Klik on Save button', function(){
        testAddNewAddress.clickOnSave();
        browser.sleep(3000);
    });

    it('Dolazak na product details', function(){
        testPoBoxAddress.lendOnProductDetails();
        browser.sleep(3000);
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(6000);
    });

    it('Otvori mini korpu', function () {
        testPoBoxAddress.openMiniCart();
        browser.sleep(1000);
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
        browser.sleep(1000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(6000);
    });
    

    it('Klik on restricted address to select it', function () {
        testPoBoxAddress.clickOnPoBoxAddress();
    });

    it('Provera da li se pojavila restricted message', function () {
        testPoBoxAddress.checkPoBoxNotAllowedMessage();
        browser.sleep(3000);
    });

    it(' Dolazak na home page', function(){
        testPoBoxAddress.lendOnHornady();
        browser.sleep(3000);
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
        browser.sleep(1000);
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
        browser.sleep(1000);
    });

    it('Klik on Address Book', function(){
        testAddNewAddress.clickAddressBook();
        browser.sleep(1000);
    });

    it('Klik on delete link for address', function(){
        testRestrictedAreaMessage.clickOnDeletetLink();
        browser.sleep(1000);
    });

    it('Klik on OK link to confirm delete ', function(){
        testDeleteAddress.clickToConfirmToDelete();
        browser.sleep(1000);
    });

    it(' Da li se pojavila success poruka za delete', function(){
        testDeleteAddress.checkSucessDeleteMessage();
        browser.sleep(1000);
    });
    
    it('Dolazak na product details', function(){
        testPoBoxAddress.lendOnProductDetails();
        browser.sleep(1000);
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(6000);
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
        browser.sleep(5000);
    });

    it(' Klik on Delete product icon', function(){
        testAttentionWindow.clickOnDeleteProductIcon();
        browser.sleep(1000); 
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});