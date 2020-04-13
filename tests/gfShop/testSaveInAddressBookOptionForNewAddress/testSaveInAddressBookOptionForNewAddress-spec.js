var testSaveInAddressBookOptionForNewAddress = require('./testSaveInAddressBookOptionForNewAddress-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPoBoxAddressFromCheckout = require('../testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testDeleteAddress = require('../testDeleteAddress/testDeleteAddress-po.js');
var testRestrictedAreaMessage = require('../testRestrictedAreaMessage/testRestrictedAreaMessage-po.js');


describe('Test save in address book option for new address on checkout page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na product details page', function(){
        testSaveInAddressBookOptionForNewAddress.lendOnProductDetails();
    });

    it('Add product to cart', function () {
        testTwentyProductsOrder.addToCart();
        browser.sleep(6000);
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
        browser.sleep(1000);
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
        browser.sleep(1000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(4000);
    });

    it('Klik on NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnNewAddressButton();
        browser.sleep(2000);
    });

    it('Unesi Street', function () {
        testSaveInAddressBookOptionForNewAddress.enterStreet();
        browser.sleep(1000);
    });

    it('Unesi city', function () {
        testPoBoxAddressFromCheckout.enterCity();
        browser.sleep(1000);
    });
    it('Klik to select option from state drop', function () {
        testPoBoxAddressFromCheckout.clickToSelectProvince();
        browser.sleep(4000);
    });

    it('Unesi zip', function () {
        testPoBoxAddressFromCheckout.enterZip();
        browser.sleep(1000);
    });

    it('Unesi phone number', function () {
        testPoBoxAddressFromCheckout.enterPhoneNumber();
        browser.sleep(1000);
    });

    it('Klik on SAVE NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnSaveNewAddressButton();
        browser.sleep(4000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(4000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
    });
    
    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
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
        browser.sleep(3000);
    });

    it('Provera da li je nasa nova addresa pojavila na Address Book strani', function () {
        testSaveInAddressBookOptionForNewAddress.checkBoxContent();
        browser.sleep(1000);
    });

    it('Klik on delete link for address', function(){
        testRestrictedAreaMessage.clickOnDeletetLink();
        browser.sleep(2000);
    });

    it('Klik on OK link to confirm delete ', function(){
        testDeleteAddress.clickToConfirmToDelete();
        browser.sleep(1000);
    });

    it(' Da li se pojavila success poruka za delete', function(){
        testDeleteAddress.checkSucessDeleteMessage();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});