var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAddressToDefaultShipping = require('../testAddressToDefaultShipping/testAddressToDefaultShipping-po.js');
var testDeleteAddress = require('./testDeleteAddress-po.js');


describe('Setovanje stare addrese za shipping i billing page i brisanje nove addresse', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home page', function(){
        testSortingByName.landOnTrugloPage();
        browser.sleep(8000);
    });

    it('Klik to open user menu', function(){
        testAddNewAddress.clickToOpenUserMenu();
        browser.sleep(8000);
    });

    it('Klik on my account from user menu', function(){
        testAddNewAddress.clickOnMyAccountLink();
        browser.sleep(8000);
    });

    it('Provera da li se ucitao My Account URL', function(){
        testAddNewAddress.checkMyAccountURL();
        browser.sleep(3000);
    });

    it('Klik on Address Book', function(){
        testAddNewAddress.clickAddressBook();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao Address Book URL', function(){
        testAddNewAddress.checkAddressBookURL();
        browser.sleep(3000);
    });

    it('Klik on edit link for address', function(){
        testDeleteAddress.clickOnEditLink();
        browser.sleep(3000);
    });

    it('Klik on Use as my default shipping address', function(){
        testAddressToDefaultShipping.clickOnBilling();
        browser.sleep(3000);
    });

    it('Klik on Use as my default billing address', function(){
        testAddressToDefaultShipping.clickOnShipping();
        browser.sleep(3000);
    });

    it('Klik on Save button', function(){
        testAddNewAddress.clickOnSave();
        browser.sleep(8000);
    });

    it('Da li se pojavila success poruka saved', function(){
        testAddNewAddress.checkIsAddressIsSaved();
        browser.sleep(3000);
    });

    it('Provera da li je stara addresa otisla na mesto billing addrese', function(){
        testDeleteAddress.checkBoxContent();
        browser.sleep(3000);
    });

    it('Provera da li je stara addresa otisla na mesto Shipping addrese', function(){
        testDeleteAddress.checkBoxContent2();
        browser.sleep(3000);
    });

    it('Klik on delete link for address', function(){
        testDeleteAddress.clickOnDeletetLink();
        browser.sleep(3000);
    });

    it('Klik on OK link to confirm delete ', function(){
        testDeleteAddress.clickToConfirmToDelete();
        browser.sleep(3000);
    });

    it(' Da li se pojavila success poruka za delete', function(){
        testDeleteAddress.checkSucessDeleteMessage();
        browser.sleep(3000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});