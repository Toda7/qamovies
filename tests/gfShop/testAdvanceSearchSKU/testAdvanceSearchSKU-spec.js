var testAdvanceSearchSKU = require('./testAdvanceSearchSKU-po.js');

describe('Advance Search, search po Product SKU i error poruka', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Shop Home page', function () {
        testAdvanceSearchSKU.landOnShopPage();
        browser.sleep(5000)
    });

    it('Klik na Search Filed', function () {
        testAdvanceSearchSKU.clickOnSearchField();
        browser.sleep(3000)
    });

    it('Click na Advance Search', function () {
        testAdvanceSearchSKU.clickOnAdvanceSearch();
        browser.sleep(5000)
    });

    it('Check Advance Search URL', function () {
        testAdvanceSearchSKU.checkAdvanceSearchURL();
        browser.sleep(3000)
    });

    it('Unos imena prodcuta', function () {
        testAdvanceSearchSKU.enterProductSKU();
        browser.sleep(5000)
    });

    it('Klik na Search button', function () {
        testAdvanceSearchSKU.clickSearchButton();
        browser.sleep(5000)
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchSKU.checkModifyMsg();
        browser.sleep(5000)
    });

    it('Da li se ucitao trazeni Product', function () {
        testAdvanceSearchSKU.checkSerchedProduct();
        browser.sleep(5000)
    });

    it('Klik na Modify search', function () {
        testAdvanceSearchSKU.clickModifySearch();
        browser.sleep(5000)
    });

    it('Unos pogresno ime Producta', function () {
        testAdvanceSearchSKU.enterWrongProductSKU();
        browser.sleep(5000)
    });

    it('Klik na Search button', function () {
        testAdvanceSearchSKU.clickSearchButton();
        browser.sleep(5000)
    });

    it('Check Error poruke ', function () {
        testAdvanceSearchSKU.checkErrorMsg();
        browser.sleep(5000)
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});