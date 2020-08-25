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
        browser.sleep(5000);
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
        browser.sleep(1000);
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
        browser.sleep(1000);
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
        browser.sleep(2000);
    });

    it('Provera da li se ucitao Add New Address URL', function(){
        testAddNewAddress.checkAddNewAddressURL();
    });

    it('Unesi Phone Number', function(){
        testAddNewAddress.enterPhoneNumber();
        browser.sleep(1000);
    });
    
    it('Unesi Street', function(){
        testAddNewAddress.enterStreet();
        browser.sleep(1000);
    });

    it('Unesi City', function(){
        testRestrictedAreaMessage.enterCity();
        browser.sleep(1000);
    });

    it('Klik on Privince link to get drop down options', function(){
        testAddNewAddress.clickProvince();
        browser.sleep(2000);
    });

    it('Klik to select option from drop', function(){
        testRestrictedAreaMessage.clickToSelectProvince();
        browser.sleep(5000);
    });

    it('Unesi Zip', function(){
        testRestrictedAreaMessage.enterZip();
        browser.sleep(1000);
    });

    it('Klik on Save button', function(){
        testAddNewAddress.clickOnSave();
        browser.sleep(5000);
    });

    it('Dolazak na product details', function(){
        testRestrictedAreaMessage.lendOnProductThatHasRestricted();
        browser.sleep(2000);
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(2000);
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
        browser.sleep(2000);
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
        browser.sleep(2000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(7000);
    });

    it('Klik on restricted address to select it', function () {
        testRestrictedAreaMessage.clickOnRestrictedAddress();
        browser.sleep(3000);
    });

    it('Provera da li se pojavila restricted message', function () {
        testRestrictedAreaMessage.checkRestrictedMessage();
        browser.sleep(3000);
    });

    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(5000);
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
        browser.sleep(2000);
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
        browser.sleep(2000);
    });

    it('Klik on Address Book', function(){
        testAddNewAddress.clickAddressBook();
        browser.sleep(2000);
    });

    it('Klik on delete link for address', function(){
        testRestrictedAreaMessage.clickOnDeletetLink();
        browser.sleep(2000);
    });

    it('Klik on OK link to confirm delete ', function(){
        testDeleteAddress.clickToConfirmToDelete();
        browser.sleep(2000);
    });

    it(' Da li se pojavila success poruka za delete', function(){
        testDeleteAddress.checkSucessDeleteMessage();
        browser.sleep(2000);
    });
    
    it('Dolazak na product details', function(){
        testRestrictedAreaMessage.lendOnProductThatHasRestricted();
        browser.sleep(2000);
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