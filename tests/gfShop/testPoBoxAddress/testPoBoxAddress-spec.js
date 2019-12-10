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
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
    });

    it('Klik on Address Book', function(){
        testAddNewAddress.clickAddressBook();
    });

    it('Klik on Add New Address button', function(){
        testAddNewAddress.clickAddNewAddress();
    });

    it('Unesi Phone Number', function(){
        testAddNewAddress.enterPhoneNumber();
    });
    
    it('Unesi Street', function(){
        testPoBoxAddress.enterStreet();
    });

    it('Unesi City', function(){
        testAddNewAddress.enterCity();
    });

    it('Klik on Privince link to get drop down options', function(){
        testAddNewAddress.clickProvince();
    });

    it('Klik to select option from drop', function(){
        testPoBoxAddress.clickToSelectProvince();
    });

    it('Unesi Zip', function(){
        testAddNewAddress.enterZip();
    });

    it('Klik on Save button', function(){
        testAddNewAddress.clickOnSave();
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
        testTwentyProductsOrder.openMiniCart();
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });
    

    it('Klik on restricted address to select it', function () {
        testPoBoxAddress.clickOnPoBoxAddress();
    });

    it('Provera da li se pojavila restricted message', function () {
        testPoBoxAddress.checkPoBoxNotAllowedMessage();
    });

    it(' Dolazak na home page', function(){
        testPoBoxAddress.lendOnHornady();
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
    });

    it('Klik on Address Book', function(){
        testAddNewAddress.clickAddressBook();
    });

    it('Klik on delete link for address', function(){
        testRestrictedAreaMessage.clickOnDeletetLink();
    });

    it('Klik on OK link to confirm delete ', function(){
        testDeleteAddress.clickToConfirmToDelete();
    });

    it(' Da li se pojavila success poruka za delete', function(){
        testDeleteAddress.checkSucessDeleteMessage();
    });
    
    it('Dolazak na product details', function(){
        testPoBoxAddress.lendOnProductDetails();
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
    });

    it(' Klik on Ok in confirm message', function(){
        testAttentionWindow.clickOnDeleteConfirmation();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});