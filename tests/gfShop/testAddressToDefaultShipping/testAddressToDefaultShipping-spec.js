var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAddressToDefaultShipping = require('./testAddressToDefaultShipping-po.js');
var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');


describe('Setovanje nase nove addrese za shipping/billing page', function(){

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

    it('Klik on edit link for address', function(){
        testAddressToDefaultShipping.clickOnEditLink();
    });

    it('Klik on Use as my default shipping address', function(){
        testAddressToDefaultShipping.clickOnBilling();
    });

    it('Klik on Use as my default billing address', function(){
        testAddressToDefaultShipping.clickOnShipping();
    });

    it('Klik on Save button', function(){
        testAddNewAddress.clickOnSave();
    });

    it('Da li se pojavila success poruka saved', function(){
        testAddNewAddress.checkIsAddressIsSaved();
    });

    it('Provera da li je nasa nova addresa otisla na mesto billing addrese', function(){
        testAddressToDefaultShipping.checkBoxContent();
    });

    it('Provera da li je nasa nova addresa otisla na mesto shipping addrese', function(){
        testAddressToDefaultShipping.checkBoxContent2();
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na prvi proizvod', function () {
        testTwentyProductsOrder.click1stProduct();
    });

    it('Dodaj prvi proizvod u korpu', function () {
        testTwentyProductsOrder.addToCart();
    });

    it('Otvori mini korpu', function () {
        testTwentyProductsOrder.openMiniCart();
        browser.sleep(3000);
    });

    it('Klik na View And Edit Cart', function () {
        testTwentyProductsOrder.clickViewAndEditCart();
        browser.sleep(2000);
    });

    it('Klik na Proceed to Checkout dugme', function () {
        testTwentyProductsOrder.clickProceedToCheckout();
        browser.sleep(5000);
    });

    it('Provera da li je nasa nova addresa selektovana kao default shipping address', function () {
        testAddressToDefaultShipping.checkIsOurNewAddressIsSelected();
        browser.sleep(5000);
    });

    it('Klik na Next dugme', function () {
        testTwentyProductsOrder.clickNext();
    });

    it('Klik na Place Order dugme', function () {
        testTwentyProductsOrder.clickPlaceOrder();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});