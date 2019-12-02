var testMyOrders = require('./testMyOrders-po.js');

describe('My Orders', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
    });

    it('Klik na logo shopa u prvom orderu', function () {
        testMyOrders.clickShopLogoInOrder();
    });

    it('Provera da li se ucitao dobar URL za Truglo Shop homepage', function () {
        testMyOrders.checkTrugloShopeHomepageUrl();
    });

    it('Provera da li je dobar title u Hero Imageu', function () {
        testMyOrders.checkSuccess1();
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
    });

    it('Klik na prvi View Order link', function () {
        testMyOrders.clickFirstViewOrderLink();
    });

    it('Provera da li postoji Print Order link na strani', function () {
        testMyOrders.checkSuccess2();
    });

    it('Provera da li je dobar title za Items Ordered sekciju', function () {
        testMyOrders.checkSuccess3();
    });

    it('Provera da li je dobar title za Order Information sekciju', function () {
        testMyOrders.checkSuccess4();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});