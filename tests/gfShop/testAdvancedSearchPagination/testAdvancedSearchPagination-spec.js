// var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testPagination = require('../testPagination/testPagination-po.js');
var testAdvanceSearchProductName = require('../testAdvanceSearchProductName/testAdvanceSearchProductName-po.js');
var testAdvancedSearchPagination = require('./testAdvancedSearchPagination-po.js');

describe('Advanced search page pagination', function () {

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

    it('Unesi short description', function () {
        testAdvancedSearchPagination.enterProductName();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchProductName.clickSearchButton();
    });

    it('Provera da li je dobra paginacija na prvoj strani', function () {
        testAdvancedSearchPagination.checkSuccess1();
    });

    it('klik na 2 u paginaciji', function () {
        testPagination.clickPageTwo();
    });

    it('Provera da li je dobra paginacija na drugoj strani', function () {
        testAdvancedSearchPagination.checkSuccess2();
    });

    it('Klik na 3 u paginaciji', function () {
        testAdvancedSearchPagination.clickPageThree();
    });

    it('Provera da li je dobra paginacija na trecoj strani', function () {
        testAdvancedSearchPagination.checkSuccess3();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});