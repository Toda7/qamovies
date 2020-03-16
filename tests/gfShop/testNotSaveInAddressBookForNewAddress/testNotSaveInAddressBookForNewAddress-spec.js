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
        browser.sleep(1000);
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
        browser.sleep(1000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(5000);
    });

    it('Klik on NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnNewAddressButton();
        browser.sleep(3000);
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

    it(' Klik to unselect Save in address book option  ', function () {
        testNotSaveInAddressBookForNewAddress.clickToUnselectSaveInAddressBookOption();
        browser.sleep(4000);
    });

    it('Klik on SAVE NEW ADDRESS button', function () {
        testPoBoxAddressFromCheckout.clickOnSaveNewAddressButton();
        browser.sleep(5000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
        browser.sleep(4000);
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
        browser.sleep(15000);
    });
    
    it(' Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
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

    it('Provera da li se addresa sa kojom smo kupili nije sacuvala', function () {
        testNotSaveInAddressBookForNewAddress.checkBoxContent();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});