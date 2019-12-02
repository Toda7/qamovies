var testViewProduct = require('./testViewProduct-po.js');

describe('Test Product view sort', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Bowfishing page', function () {
        testViewProduct.landOnBowfishingPage();
    });

    it('klik na List View Producta', function () {
        testViewProduct.clickOnListView();
    });

    it('Proverava dali se ucitao URL sa parametrima za List vieew producta', function () {
        testViewProduct.checkListViewURL();
    });

    it('klik na Limiter 5 producta po strani', function () {
        testViewProduct.clickOnLimiter();
    });

    it('Proverava dali se ucitao URL sa parametrima za List vieew producta i sorting 5 po strani', function () {
        testViewProduct.checkListViewLimit5URL();
    });

    it('Provera da li je dobar number of items on page', function () {
        testViewProduct.checkItemsNumber();
    });

    it('Klik na 2 stranu u paginaciji', function () {
        testViewProduct.clickPageTwoPagination();
    });

    it('Proverava dali se ucitao URL sa parametrima za page 2 ', function () {
        testViewProduct.checkPage2URL();
    });


    it('Provera da li je dobar number of items on 2 page', function () {
        testViewProduct.checkItemsNumberOn2Page();
    });

    

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});