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
        browser.sleep(5000);
    });

    it('Klik na Search Filed', function () {
        testAdvanceSearchProductName.clickOnSearchField();
        browser.sleep(5000);
    });

    it('Klik na Advance Search', function () {
        testAdvanceSearchProductName.clickOnAdvanceSearch();
        browser.sleep(5000);
    });

    it('Check Advance Search URL', function () {
        testAdvanceSearchProductName.checkAdvanceSearchURL();
        browser.sleep(1000);
    });

    it('Unesi short description', function () {
        testAdvancedSearchPagination.enterProductName();
        browser.sleep(1000);
    });

    it('Klik na Search button', function () {
        testAdvanceSearchProductName.clickSearchButton();
        browser.sleep(5000);
    });

    it('Provera da li je dobra paginacija na prvoj strani', function () {
        testAdvancedSearchPagination.checkSuccess1();
        browser.sleep(1000);
    });

    it('Klik na 2 u paginaciji', function () {
        testPagination.clickPageTwo();
        browser.sleep(5000);
    });

    it('Provera da li je dobra paginacija na drugoj strani', function () {
        testAdvancedSearchPagination.checkSuccess2();
        browser.sleep(1000);
    });

    it('Klik na 3 u paginaciji', function () {
        testAdvancedSearchPagination.clickPageThree();
        browser.sleep(5000);
    });

    it('Provera da li je dobra paginacija na trecoj strani', function () {
        testAdvancedSearchPagination.checkSuccess3();
        browser.sleep(1000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});