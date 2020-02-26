var testTwentyProductsOrder = require('../testTwentyProductsOrder/testTwentyProductsOrder-po.js');
var testBreadcrumbs = require('./testBreadcrumbs-po.js');

describe('Breadcrumbs', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testTwentyProductsOrder.landOnArcheryPage();
    });

    it('Klik na prvi proizvod', function () {
        testTwentyProductsOrder.click1stProduct();
    });

    it('Provera da li se ucitao dobar URL za Product Details stranu', function () {
        testBreadcrumbs.checkProductDetailsPageUrl();
    });

    it('Provera da li se ucitao poslednji breadcrumb (ime proizvoda)', function () {
        testBreadcrumbs.checkProductBreadcrumb();
    });

    it('Provera da li se ucitao srednji breadcrumb (kategorija)', function () {
        testBreadcrumbs.checkCategoryBreadcrumb();
    });

    it('Provera da li se ucitao prvi breadcrumb (Home)', function () {
        testBreadcrumbs.checkHomeBreadcrumb();
    });

    it('Klik srednji breadcrumb (kategorija)', function () {
        testBreadcrumbs.clickCategoryBreadcrumb();
    });

    it('Provera da li se ucitao dobar URL za Category stranu', function () {
        testBreadcrumbs.checkCategoryPageUrl();
    });

    it('Provera da li se ucitao srednji breadcrumb (kategorija)', function () {
        testBreadcrumbs.checkCategoryBreadcrumb1();
    });

    it('Provera da li se ucitao prvi breadcrumb (Home)', function () {
        testBreadcrumbs.checkHomeBreadcrumb();
    });

    it('Klik prvi breadcrumb (Home)', function () {
        testBreadcrumbs.clickHomeBreadcrumb();
    });

    it('Provera da li se ucitao dobar URL za Homepage', function () {
        testBreadcrumbs.checkHomepageUrl();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});