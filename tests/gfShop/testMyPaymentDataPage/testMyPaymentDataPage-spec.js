var testMyPaymentDataPage = require('./testMyPaymentDataPage-po.js');

describe('Unos i brisanje kartice na My Payment Data strani', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Payment Data page', function () {
        testMyPaymentDataPage.landOnMyPaymentDataPage();
        browser.sleep(3000);
    });

    it('Unesi First Name', function () {
        testMyPaymentDataPage.enterFirstName();
        browser.sleep(2000);
    });

    it('Unesi Last Name', function () {
        testMyPaymentDataPage.enterLastName();
        browser.sleep(2000);
    });

    it('Unesi Phone Number', function () {
        testMyPaymentDataPage.enterPhoneNumber();
        browser.sleep(2000);
    });

    it('Unesi Street', function () {
        testMyPaymentDataPage.enterStreet();
        browser.sleep(2000);
    });

    it('Unesi City', function () {
        testMyPaymentDataPage.enterCity();
        browser.sleep(2000);
    });

    it('Select Texas from drop', function () {
        testMyPaymentDataPage.clickToSelectProvince();
        browser.sleep(2000);
    });

    it('Unesi Zip', function () {
        testMyPaymentDataPage.enterZip();
        browser.sleep(2000);
    });

    it('Unesi CC Number', function () {
        testMyPaymentDataPage.enterCcNumber();
        browser.sleep(2000);
    });

    it('Select December from drop', function () {
        testMyPaymentDataPage.clickToSelectMonth();
        browser.sleep(2000);
    });

    it('Select 2022. from drop', function () {
        testMyPaymentDataPage.clickToSelectYear();
        browser.sleep(2000);
    });

    it('Unesi CCV Number', function () {
        testMyPaymentDataPage.enterCcvNumber();
        browser.sleep(2000);
    });

    it('Klik on SAVE button', function () {
        testMyPaymentDataPage.clickOnSaveButton();
        browser.sleep(2000);
    });

    it('Provera da li se pojavila success message posle saveovanja kartice', function () {
        testMyPaymentDataPage.checkSuccessMessageSave();
        browser.sleep(5000);
    });

    it('Klik on DELETE button', function () {
        testMyPaymentDataPage.clickOnDeleteButton();
        browser.sleep(2000);
    });

    it('Klik on OK button da potvrdis brisanje', function () {
        testMyPaymentDataPage.clickOnOkButton();
        browser.sleep(3000);
    });

    it('Provera da li se pojavila success message posle brisanja kartice', function () {
        testMyPaymentDataPage.checkSuccessMessageDelete();
        browser.sleep(5000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});