var testAdvanceSearchProductView = require ('./testAdvanceSearchProductView-po.js')
var testAdvanceSearchPriceRange = require('../testAdvanceSearchPriceRange/testAdvanceSearchPriceRange-po.js');
var testAdvanceSearchShortDescription = require('../testAdvanceSearchShortDescription/testAdvanceSearchShortDescription-po.js');
var testViewProduct = require('../testViewProduct/testViewProduct-po.js');
var testAdvanceSearchProductName = require('../testAdvanceSearchProductName/testAdvanceSearchProductName-po.js');

describe('Advance Search, search i Product view list/grid', function () {

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

    it('Unos imena Producta', function () {
        testAdvanceSearchProductView.enterProductName();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchProductName.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchShortDescription.checkModifyMsg();
    });

    it('klik na List View Producta', function () {
        testViewProduct.clickOnListView();
    });

    it('Provera da li se ucitao URL sa parametrom za position name za sorting', function () {
        testAdvanceSearchProductView.checkListViewLimit5URL();
    });

    it('klik na Limiter 5 producta po strani', function () {
        testViewProduct.clickOnLimiter();
    });

    it('Provera da li je dobar number of items on page', function () {
        testViewProduct.checkItemsNumber();
    });

    it('Klik na 2 stranu u paginaciji', function () {
        testViewProduct.clickPageTwoPagination();
    });

    it('Proverava da li se ucitao URL sa parametrima za page 2 ', function () {
        testAdvanceSearchProductView.checkPage2URL();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchShortDescription.checkModifyMsg();
    });

    it('Proverava da li se Ucitao 1 product na page 2 ', function () {
        testAdvanceSearchProductView.checkProductOnPage2();
    });

    it('Klik na LEARN MORE', function () {
        testAdvanceSearchProductView.clickOnLearnMore();
    });

    it('Proverava Product Deatial page URL', function () {
        testAdvanceSearchProductView.checkProductDetailPageUrl();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});