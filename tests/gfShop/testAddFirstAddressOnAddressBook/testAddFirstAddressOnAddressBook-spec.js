var testAddNewAddress = require('./testAddNewAddress-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');


describe('Adding new address on Address Book page', function(){

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

    it('Klik on Save button to get error messages', function(){
        testAddNewAddress.clickOnSave();
    });

    it('Provera da li se ucitala required message for phone', function(){
        testAddNewAddress.checkRequiredMessageForPhone();
    });

    it('Provera da li se ucitala required message for street', function(){
        testAddNewAddress.checkRequiredMessageForStreet();
    });

    it('Provera da li se ucitala required message for city', function(){
        testAddNewAddress.checkRequiredMessageForcity();
    });

    it('Provera da li se ucitala required message for state', function(){
        testAddNewAddress.checkRequiredMessageForState();
    });

    it('Provera da li se ucitala required message for state', function(){
        testAddNewAddress.checkRequiredMessageForZip();
    });

    it('Unesi Phone Number', function(){
        testAddNewAddress.enterPhoneNumber();
    });
    
    it('Unesi Street', function(){
        testAddNewAddress.enterStreet();
    });

    it('Unesi City', function(){
        testAddNewAddress.enterCity();
    });

    it('Klik on Privince link to get drop down options', function(){
        testAddNewAddress.clickProvince();
    });

    it('Klik to select option from drop', function(){
        testAddNewAddress.clickToSelectProvince();
    });

    it('Unesi Zip', function(){
        testAddNewAddress.enterZip();
    });

    it('Klik on Save button', function(){
        testAddNewAddress.clickOnSave();
    });

    it('Da li se pojavila success poruka saved', function(){
        testAddNewAddress.checkIsAddressIsSaved();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});