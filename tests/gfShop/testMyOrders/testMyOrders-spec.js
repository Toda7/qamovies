var testMyOrders = require('./testMyOrders-po.js');

describe('My Orders', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
    });

    it('Provera My Orders title-a', function () {
        testMyOrders.checkMyOrdersTitle();
    });

    it('Provera Important Section-a', function () {
        testMyOrders.checkImportantSection();
    });

    it('Klik na prvi Order', function () {
        testMyOrders.clickOnFirstOrder();
    });

    it('Provera da li postoji Print btn na strani', function () {
        testMyOrders.checkIsPrintBtnThere();
    });

    it('Provera da li postoji Close btn na strani', function () {
        testMyOrders.checkIsCloseBtnThere();
    });

    it('Provera Shipping adrese', function () {
        testMyOrders.checkShippingAddress();
    });

    it('Provera Shipping Method-a', function () {
        testMyOrders.checkShippingMethod();
    });

    it('Provera Billing adrese', function () {
        testMyOrders.checkBillingAddress();
    });

    it('Provera Payment Method-a', function () {
        testMyOrders.checkPaymentMethod();
    });

    it('Provera Brand logoa', function () {
        testMyOrders.checkBrandLogo();
    });

    it('Klik na produkt', function() {
        testMyOrders.clickOnProduct();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
    });

    it('Provera URL-a product strane', function () {
        testMyOrders.checkProductUrl();
    });

    it('Vracanje fokusa', function () {
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});