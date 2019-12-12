var testRestrictedAreaMessage = require('./testRestrictedAreaMessage-po.js');
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testDeleteAddress = require('../testDeleteAddress/testDeleteAddress-po.js');
var testAttentionWindow = require('../testAttentionWindow/testAttentionWindow-po.js');

describe('Test restricted area message', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
    });

    it('Provera da li se ucitao My Account URL', function(){
        testAddNewAddress.checkMyAccountURL();
    });

    it('Klik on Address Book', function(){
        testAddNewAddress.clickAddressBook();
    });

    it('Provera da li se ucitao Address Book URL', function(){
        testAddNewAddress.checkAddressBookURL();
    });

    it('Klik on Add New Address button', function(){
        testAddNewAddress.clickAddNewAddress();
    });

    it('Provera da li se ucitao Add New Address URL', function(){
        testAddNewAddress.checkAddNewAddressURL();
    });

    it('Unesi Phone Number', function(){
        testAddNewAddress.enterPhoneNumber();
    });
    
    it('Unesi Street', function(){
        testAddNewAddress.enterStreet();
    });

    it('Unesi City', function(){
        testRestrictedAreaMessage.enterCity();
    });

    it('Klik on Privince link to get drop down options', function(){
        testAddNewAddress.clickProvince();
    });

    it('Klik to select option from drop', function(){
        testRestrictedAreaMessage.clickToSelectProvince();
    });

    it('Unesi Zip', function(){
        testRestrictedAreaMessage.enterZip();
    });

    it('Klik on Save button', function(){
        testAddNewAddress.clickOnSave();
    });

    it('Dolazak na product details', function(){
        testRestrictedAreaMessage.lendOnProductThatHasRestricted();
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
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
        testRestrictedAreaMessage.clickOnRestrictedAddress();
    });

    it('Provera da li se pojavila restricted message', function () {
        testRestrictedAreaMessage.checkRestrictedMessage();
    });

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
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
        testRestrictedAreaMessage.lendOnProductThatHasRestricted();
    });

    it('Klik na cart', function(){
        testAttentionWindow.clickOnCart();
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