var testMyOrders = require('../testMyOrders/testMyOrders-po.js');
var testPrintOrderPage = require('../testPrintOrderPage/testPrintOrderPage-po.js');
var testPrintInvoicePage = require ('./testPrintInvoicePage-po.js');

describe('Print Order page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
    });

    it('Klik na prvi View Order link', function () {
        testMyOrders.clickFirstViewOrderLink();
    });

    it('Klik na Invoices', function () {
        testPrintInvoicePage.clickOnInvoices();
    });

    it('Klik na Print Invoice link', function () {
        testPrintInvoicePage.clickPrintInvoice();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            browser.sleep(3000);
        });
    });

    it('Klik Escape na tastaturi', function () {
        testPrintOrderPage.clickEsc();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            browser.sleep(3000);
        });

    });

    it('Provera da li je dobar GF logo na print order strani', function () {
        testPrintOrderPage.checkGFLogo();
    });

    it('Provera da li je dobar Truglo logo na print order strani', function () {
        testPrintOrderPage.checkTrugloLogo();
    });

    it('Provera da li je dobar title za Items Ordered section', function () {
        testPrintOrderPage.checkItemsOrderedTitle();
    });

    it('Provera da li je dobar title za Order Information sekciju', function () {
        testPrintOrderPage.checkOrderInformationTitle();
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