var testAddFirstAddressOnAddressBook = require('./testAddFirstAddressOnAddressBook-po.js');
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var prepareMagentoCoupon = require('../prepareMagentoCoupon/prepareMagentoCoupon-po.js');

describe('Pravljenje prve adrese na Address Book strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it(' Dolazak na home page', function () {
        testAddFirstAddressOnAddressBook.lendOnBadlands();
    });

    it('Klik to open user menu', function () {
        testAddNewAddress.clickToOpenUserMenu();
    });

    it('Klik on my account from user menu', function () {
        testAddNewAddress.clickOnMyAccountLink();
        browser.sleep(3000);
    });

    it('Klik on Address Book', function () {
        testAddNewAddress.clickAddressBook();
        browser.sleep(7000);
    });

    it('Brisanje texta iz first name polja', function () {
        testAddNewAddress.clearFirstNameField();
    });

    it('Brisanje texta iz last name polja', function () {
        testAddNewAddress.clearLastNameField();
    });

    it('Klik on Save button to get error messages', function () {
        testAddNewAddress.clickOnSave();
    });

    it('Provera da li se ucitala required message for First Name', function () {
        testAddNewAddress.checkRequiredMessageForFirstName();
    });

    it('Provera da li se ucitala required message for Last Name', function () {
        testAddNewAddress.checkRequiredMessageForLastName();
    });

    it('Provera da li se ucitala required message for phone', function () {
        testAddNewAddress.checkRequiredMessageForPhone();
    });

    it('Provera da li se ucitala required message for street', function () {
        testAddNewAddress.checkRequiredMessageForStreet();
    });

    it('Provera da li se ucitala required message for city', function () {
        testAddNewAddress.checkRequiredMessageForcity();
    });

    it('Provera da li se ucitala required message for state', function () {
        testAddNewAddress.checkRequiredMessageForState();
    });

    it('Provera da li se ucitala required message for zip', function () {
        testAddNewAddress.checkRequiredMessageForZip();
    });

    it('Unesi first name', function () {
        testAddFirstAddressOnAddressBook.enterFirstName();
    });

    it('Unesi last name', function () {
        testAddFirstAddressOnAddressBook.enterLastName();
    });

    it('Unesi Phone Number', function () {
        testAddNewAddress.enterPhoneNumber();
    });

    it('Unesi Street', function () {
        testAddNewAddress.enterStreet();
    });

    it('Unesi City', function () {
        testAddNewAddress.enterCity();
    });

    it('Klik on Province link to get drop down options', function () {
        testAddNewAddress.clickProvince();
    });

    it('Klik to select option from drop', function () {
        testAddNewAddress.clickToSelectProvince();
    });

    it('Unesi Zip', function () {
        testAddNewAddress.enterZip();
    });

    it('Klik on Save button', function () {
        testAddNewAddress.clickOnSave();
    });

    it('Da li se pojavila success poruka saved', function () {
        testAddNewAddress.checkIsAddressIsSaved();
    });

    it('Dolazak u magento na user details ', function () {
        testAddFirstAddressOnAddressBook.lendOnUserDetailsInAdmin();
        browser.sleep(5000);
    });

    it('Unesi Username', function () {
        prepareMagentoCoupon.enterUsername();
        browser.sleep(3000);
    });

    it('Unesi Password', function () {
        prepareMagentoCoupon.enterPass();
        browser.sleep(3000);
    });

    it('Klik na Sign In dugme', function () {
        prepareMagentoCoupon.clickOnSignIn();
        browser.sleep(5000);
    });

    it('Dolazak u magento na user details ', function () {
        testAddFirstAddressOnAddressBook.lendOnUserDetailsInAdmin();
        browser.sleep(5000);
    });

    it('Klik na Addresses link', function () {
        testAddFirstAddressOnAddressBook.clickOnAddressesLink();
        browser.sleep(5000);
    });

    it('Klik na Select link da se otvori drop menu', function () {
        testAddFirstAddressOnAddressBook.clickOnSelectLink();
        browser.sleep(5000);
    });

    it('Klik na Delete iz drop menija', function () {
        testAddFirstAddressOnAddressBook.clickOnDelete();
        browser.sleep(5000);
    });

    it('Klik na OK u Confirm Delete modalu', function () {
        testAddFirstAddressOnAddressBook.clickOnOkInModal();
        browser.sleep(5000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});