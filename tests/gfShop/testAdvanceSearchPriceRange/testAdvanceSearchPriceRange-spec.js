var testAdvanceSearchPriceRange = require('./testAdvanceSearchPriceRange-po.js');
var testAdvanceSearchShortDescription = require('../testAdvanceSearchShortDescription/testAdvanceSearchShortDescription-po.js');

describe('Advance Search, search po Price range i error poruka', function () {

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

    it('Unos najnize cene prodcuta', function () {
        testAdvanceSearchPriceRange.enterProductPriceFrom();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchShortDescription.checkModifyMsg();
    });

    it('Da li smo dobili 37 producta na search', function () {
        testAdvanceSearchPriceRange.checkSerchedProducts();
    });

    it('Da li se ucitao trazeni Product', function () {
        testAdvanceSearchPriceRange.checkSerchedProduct();
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

    it('Unos najvise cene prodcuta', function () {
        testAdvanceSearchPriceRange.enterProductPriceTo();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchShortDescription.checkModifyMsg();
    });

    it('Da li se ucitao trazeni Product 2', function () {
        testAdvanceSearchPriceRange.checkSerchedProduct2();
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

    it('Unos najnize cene prodcuta', function () {
        testAdvanceSearchPriceRange.enterProductPriceFrom1();
    });

    it('Unos najvise cene prodcuta', function () {
        testAdvanceSearchPriceRange.enterProductPriceTo1();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Da li se ucitao Modify search poruka', function () {
        testAdvanceSearchShortDescription.checkModifyMsg();
    });

    it('Da li se ucitao trazeni Product 3', function () {
        testAdvanceSearchPriceRange.checkSerchedProduct3();
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

    it('Unos pogresne najnize cene producta', function () {
        testAdvanceSearchPriceRange.enterProductPriceFromWrong();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Da li se ucitala ERROR poruka', function () {
        testAdvanceSearchShortDescription.checkErrorMsg();
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

    it('Unos pogresne Najvise cene producta', function () {
        testAdvanceSearchPriceRange.enterProductPriceToWrong();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Da li se ucitala 2 ERROR poruka', function () {
        testAdvanceSearchShortDescription.checkErrorMsg();
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

    it('Unos pogresne najnize cene prodcuta', function () {
        testAdvanceSearchPriceRange.enterProductPriceFromWrong1();
    });

    it('Unos pogresne najvise cene prodcuta', function () {
        testAdvanceSearchPriceRange.enterProductPriceToWrong1();
    });

    it('Klik na Search button', function () {
        testAdvanceSearchShortDescription.clickSearchButton();
    });

    it('Da li se ucitala 3 ERROR poruka', function () {
        testAdvanceSearchShortDescription.checkErrorMsg();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});