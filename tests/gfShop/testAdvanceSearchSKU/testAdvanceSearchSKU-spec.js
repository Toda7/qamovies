var testAdvanceSearchSKU = require('./testAdvanceSearchSKU-po.js');

describe('Advance Search, search po Product SKU i error poruka', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Shop Home page', function () {
        testAdvanceSearchSKU.landOnShopPage();
    });

    it('Klik na Search Filed', function () {
        testAdvanceSearchSKU.clickOnSearchField();
    });

    it('Click na Advance Search', function () {
        testAdvanceSearchSKU.clickOnAdvanceSearch();
    });

    it('Check Advance Search URL', function () {
        testAdvanceSearchSKU.checkAdvanceSearchURL();
    });

    it('Unos imena prodcuta', function () {
        testAdvanceSearchSKU.enterProductSKU();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchSKU.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchSKU.checkModifyMsg();
    });

    it('Da li se ucitao trazeni Product', function () {
        testAdvanceSearchSKU.checkSerchedProduct();
    });

    it('Klik na Modify search', function () {
        testAdvanceSearchSKU.clickModifySearch();
    });

    it('Unos pogresno ime Producta', function () {
        testAdvanceSearchSKU.enterWrongProductSKU();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchSKU.clickSearchButton();
    });

    it('Check Error poruke ', function () {
        testAdvanceSearchSKU.checkErrorMsg();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});