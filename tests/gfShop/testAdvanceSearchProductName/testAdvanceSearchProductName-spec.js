var testAdvanceSearchProductName = require('./testAdvanceSearchProductName-po.js');

describe('Advance Search, search po Product name i error poruka', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Shop Home page', function () {
        testAdvanceSearchProductName.landOnShopPage();
    });

    it('Klik na Search Filed', function () {
        testAdvanceSearchProductName.clickOnSearchField();
    });

    it('Click na Advance Search', function () {
        testAdvanceSearchProductName.clickOnAdvanceSearch();
    });

    it('Check Advance Search URL', function () {
        testAdvanceSearchProductName.checkAdvanceSearchURL();
    });

    it('Unos imena prodcuta', function () {
        testAdvanceSearchProductName.enterProductName();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchProductName.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchProductName.checkModifyMsg();
    });

    it('Da li se ucitao trazeni Product', function () {
        testAdvanceSearchProductName.checkSerchedProduct();
    });

    it('Klik na Modify search', function () {
        testAdvanceSearchProductName.clickModifySearch();
    });

    it('Unos pogresno ime Producta', function () {
        testAdvanceSearchProductName.enterWrongProductName();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchProductName.clickSearchButton();
    });

    it('Check Error poruke ', function () {
        testAdvanceSearchProductName.checkErrorMsg();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});