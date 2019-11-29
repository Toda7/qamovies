var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testSortingByName = require('../testSortingByName/testSortingByName-po.js');
var testAddressToDefaultShipping = require('./testAddressToDefaultShipping-po.js');


describe('Adding new address on Address Book page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testSortingByName.landOnWeatherbyPage();
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

    // it('Provera da li se ucitao Address Book URL', function(){
    //     testAddNewAddress.checkAddressBookURL();
    // });

    // it('Klik on edit link for address', function(){
    //     testAddressToDefaultShipping.clickOnEditLink();
    // });

    // it('Klik on Use as my default shipping address', function(){
    //     testAddressToDefaultShipping.clickOnBilling();
    // });

    // it('Klik on Use as my default billing address', function(){
    //     testAddressToDefaultShipping.clickOnShipping();
    // });

    // it('Klik on Save button', function(){
    //     testAddNewAddress.clickOnSave();
    // });

    // it('Da li se pojavila success poruka saved', function(){
    //     testAddNewAddress.checkIsAddressIsSaved();
    // });

    it('Provera da li je nasa nova addresa otisla na mesto builling addrese', function(){
        testAddressToDefaultShipping.checkBoxContent();
    });

    it('Provera da li je nasa nova addresa otisla na mesto builling addrese', function(){
        testAddressToDefaultShipping.checkBoxContent2();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});