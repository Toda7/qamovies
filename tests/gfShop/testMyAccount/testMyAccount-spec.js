var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testSearchShop = require('../testSearchShop/testSearchShop-po.js');
var testAddNewAddress = require('../testAddNewAddress/testAddNewAddress-po.js');
var testPagination = require('../testPagination/testPagination-po.js');
var testMyAccount = require('./testMyAccount-po.js');

describe('My Account', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Truglo Shop homepage', function () {
        testSearchShop.landOnShopHomepage();
        browser.sleep(2000);
    });

    it('Klik na avatar u hederu', function () {
        testTwentyProductsOrder.clickAvatarInHeader();
        browser.sleep(2000);
    });

    it('Klik na My Account', function () {
        testTwentyProductsOrder.clickMyAccount();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao My Account URL', function () {
        testAddNewAddress.checkMyAccountURL();
    });

    it('Provera da li se uctao My Account title na My Account strani', function () {
        testMyAccount.checkTitleOnMyAccountPage();
    });

    it('Provera da li se uctao title za Account Information sekciju', function () {
        testMyAccount.checkAccountInformationSectionTitle();
    });

    it('Provera da li se uctao title za Address Book sekciju', function () {
        testMyAccount.checkAddressBookSectionTitle();
    });

    it('Klik on Address Book link', function () {
        testAddNewAddress.clickAddressBook();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao Address Book URL', function () {
        testAddNewAddress.checkAddressBookURL();
    });

    it('Provera da li se ucitao Address Book title na Address Book strani', function () {
        testMyAccount.checkTitleOnAddressBookPage();
    });

    it('Provera da li se ucitao title za Default Addresses sekciju', function () {
        testMyAccount.checkDefaultAddressesSectionTitle();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao title za Additional Address Entries sekciju', function () {
        testMyAccount.checkAdditionalAddressEntriesSectionTitle();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Change Billing Address link', function () {
        testMyAccount.checkChangeBillingAddressLink();
    });

    it('Provera da li se ucitao Change Shipping Address link', function () {
        testMyAccount.checkChangeShippingAddressLink();
    });

    it('Provera da li se ucitao Prvi Edit Address link', function () {
        testMyAccount.checkFirstEditAddressLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Drugi Edit Address link', function () {
        testMyAccount.checkSecondEditAddressLink();
    });

    it('Provera da li se ucitao Prvi Delete Address link', function () {
        testMyAccount.checkFirstDeleteAddressLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Drugi Delete Address link', function () {
        testMyAccount.checkSecondDeleteAddressLink();
    });

    it('Klik na My Orders link', function () {
        testMyAccount.clickMyOrdersLink();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao My Orders URL', function () {
        testMyAccount.checkMyOrdersURL();
        browser.sleep(1000);
    });

    it('Cekiranje My Orders Title', function () {
        testMyAccount.checkMyOrdersTitle();
    });

    it('Povratak na My Account stranu', function () {
        testMyAccount.landOnMyAccountPage();
        browser.sleep(2000);
    });

    it('Klik na My Payment Data link', function () {
        testMyAccount.clickMyPaymentDataLink();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao My Payment Data URL', function () {
        testMyAccount.checkMyPaymentDataURL();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao My Payment Data title na My Payment Data strani', function () {
        testMyAccount.checkTitleOnMyPaymentDataPage();
    });

    it('Provera da li se ucitao title za Credit Card sekciju', function () {
        testMyAccount.checkCreditCardSectionTitle();
    });

    it('Provera da li se ucitao title za Add A Credit Card sekciju', function () {
        testMyAccount.checkAddCreditCardSectionTitle();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});