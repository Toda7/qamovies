var testAdvanceSearchShortDescription = require('./testAdvanceSearchShortDescription-po.js');

describe('Advance Search, search po Product Short Description i error poruka', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Shop Home page', function () {
        testAdvanceSearchShortDescription.landOnShopPage();
    });

    it('Klik na Search Filed', function () {
        testAdvanceSearchShortDescription.clickOnSearchField();
    });

    it('Click na Advance Search', function () {
        testAdvanceSearchShortDescription.clickOnAdvanceSearch();
    });

    it('Check Advance Search URL', function () {
        testAdvanceSearchShortDescription.checkAdvanceSearchURL();
    });

    it('Unos imena prodcuta', function () {
        testAdvanceSearchShortDescription.enterProductShortDescription();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchShortDescription.checkModifyMsg();
    });

    it('Da li se ucitao trazeni Product', function () {
        testAdvanceSearchShortDescription.checkSerchedProduct();
    });

    it('Klik na Modify search', function () {
        testAdvanceSearchShortDescription.clickModifySearch();
    });

    it('Unos pogresno ime Producta', function () {
        testAdvanceSearchShortDescription.enterWrongProductShortDescription();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Check Error poruke ', function () {
        testAdvanceSearchShortDescription.checkErrorMsg();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});