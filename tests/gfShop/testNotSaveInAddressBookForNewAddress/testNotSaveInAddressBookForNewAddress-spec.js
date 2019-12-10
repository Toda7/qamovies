var testNotSaveInAddressBookForNewAddress = require('./testNotSaveInAddressBookForNewAddress-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPoBoxAddressFromCheckout = require('../testPoBoxAddressFromCheckout/testPoBoxAddressFromCheckout-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testSaveInAddressBookOptionForNewAddress = require('../testSaveInAddressBookOptionForNewAddress/testSaveInAddressBookOptionForNewAddress-po.js');


describe('Test unselect Save in address book option for new address on checkout page', function(){

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

    it(' Klik to unselect Save in address book option  ', function () {
        testNotSaveInAddressBookForNewAddress.clickToUnselectSaveInAddressBookOption();
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

    it('Provera da li se addresa sa kojom smo kupili nije sacuvala', function () {
        testNotSaveInAddressBookForNewAddress.checkBoxContent();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});