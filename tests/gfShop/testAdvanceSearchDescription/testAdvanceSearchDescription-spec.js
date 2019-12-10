var testAdvanceSearchDescription = require('./testAdvanceSearchDescription-po.js');

describe('Advance Search, search po Product Description i error poruka', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Shop Home page', function () {
        testAdvanceSearchDescription.landOnShopPage();
    });

    it('Klik na Search Filed', function () {
        testAdvanceSearchDescription.clickOnSearchField();
    });

    it('Click na Advance Search', function () {
        testAdvanceSearchDescription.clickOnAdvanceSearch();
    });

    it('Check Advance Search URL', function () {
        testAdvanceSearchDescription.checkAdvanceSearchURL();
    });

    it('Unos imena prodcuta', function () {
        testAdvanceSearchDescription.enterProductDescription();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchDescription.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchDescription.checkModifyMsg();
    });

    it('Da li se ucitao trazeni Product', function () {
        testAdvanceSearchDescription.checkSerchedProduct();
    });

    it('Klik na Modify search', function () {
        testAdvanceSearchDescription.clickModifySearch();
    });

    it('Unos pogresno ime Producta', function () {
        testAdvanceSearchDescription.enterWrongProductDescription();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchDescription.clickSearchButton();
    });

    it('Check Error poruke ', function () {
        testAdvanceSearchDescription.checkErrorMsg();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});