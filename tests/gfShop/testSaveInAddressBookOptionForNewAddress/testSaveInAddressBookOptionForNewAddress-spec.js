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
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
    });

    it('Klik on NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnNewAddressButton();
    });

    it('Unesi Street', function () {
        testSaveInAddressBookOptionForNewAddress.enterStreet();
    });

    it('Unesi city', function () {
        testPoBoxAddressFromCheckout.enterCity();
    });
    it('Klik to select option from state drop', function () {
        testPoBoxAddressFromCheckout.clickToSelectProvince();
    });

    it('Unesi zip', function () {
        testPoBoxAddressFromCheckout.enterZip();
    });

    it('Unesi phone number', function () {
        testPoBoxAddressFromCheckout.enterPhoneNumber();
    });

    it('Klik on SAVE NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnSaveNewAddressButton();
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
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

    it('Provera da li je nasa nova addresa pojavila na Address Book strani', function () {
        testSaveInAddressBookOptionForNewAddress.checkBoxContent();
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

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});