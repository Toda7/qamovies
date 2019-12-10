var testAddFirstAddressOnAddressBook = require('./testAddFirstAddressOnAddressBook-po.js');
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');

describe('Adding first address on Address Book page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it(' Dolazak na home page', function(){
        testAddFirstAddressOnAddressBook.lendOnBadlands();
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

    it('Brisanje texta iz first name polja', function(){
        testAddNewAddress.clearFirstNameField();
    });

    it('Brisanje texta iz last name polja', function(){
        testAddNewAddress.clearLastNameField();
    });

    it('Klik on Save button to get error messages', function(){
        testAddNewAddress.clickOnSave();
    });

    it('Provera da li se ucitala required message for First Name', function(){
        testAddNewAddress.checkRequiredMessageForFirstName();
    });

    it('Provera da li se ucitala required message for Last Name', function(){
        testAddNewAddress.checkRequiredMessageForLastName();
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

    it('Provera da li se ucitala required message for zip', function(){
        testAddNewAddress.checkRequiredMessageForZip();
    });

    it('Unesi first name', function(){
        testAddNewAddress.enterFirstName();
    });
    
    it('Unesi last name', function(){
        testAddNewAddress.enterLastName();
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

    it('Dolazak u manento na user details ', function(){
        testAddFirstAddressOnAddressBook.lendOnUserDetailsInAdmin();
    });

    it('Unesi Username', function(){
        prepareMagentoCoupon.enterUsername();
    });

    it('Unesi Password', function(){
        prepareMagentoCoupon.enterPass();
    });

    it('Klik na Sign In dugme', function(){
        prepareMagentoCoupon.clickOnSignIn();
    });

    it('Dolazak u manento na user details ', function(){
        testAddFirstAddressOnAddressBook.lendOnUserDetailsInAdmin();
    });

    it('Klik na Addresses link', function(){
        testAddFirstAddressOnAddressBook.clickOnAddressesLink();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});