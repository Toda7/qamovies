var testPagination = require('./testPagination-po.js');

describe('Test Pagination', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Archery page', function () {
        testPagination.landOnArcheryPage();
    });

    it('klik na 2 u paginaciji', function () {
        testPagination.clickPageTwo();
    });

    it('Provera da li se ucitao dobar URL', function () {
        testPagination.checkUrl();
    });

    it('Provera da li je dobra paginacija', function () {
        testPagination.checkSuccess();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});