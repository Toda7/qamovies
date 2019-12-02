var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAddressToDefaultShipping = require('../testAddressToDefaultShipping/testAddressToDefaultShipping-po.js');
var testDeleteAddress = require('./testDeleteAddress-po.js');


describe('Setovanje stare addrese za shipping/billing page i brisanje nove addresse', function(){

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
        testDeleteAddress.checkBoxContent();
    });

    it('Provera da li je nasa nova addresa otisla na mesto shipping addrese', function(){
        testDeleteAddress.checkBoxContent2();
    });

    it('Klik on delete link for address', function(){
        testDeleteAddress.clickOnDeletetLink();
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