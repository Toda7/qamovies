var testPrintRefundPage = require('./testPrintRefundPage-po.js');
var testPrintOrderPage = require('../testPrintOrderPage/testPrintOrderPage-po.js');
var testMyOrders = require('../testMyOrders/testMyOrders-po.js');
var testCreditMemo = require('../testCreditMemo/testCreditMemo-po.js');



describe('Print Refund page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Orders stranu', function () {
        testMyOrders.landOnMyOrdersPage();
        browser.sleep(3000);
    });

    it('Klik na prvi View Order link', function () {
        testMyOrders.clickFirstViewOrderLink();
        browser.sleep(3000);
    });

    it('Klik na Refunds da bi dobili Refund tab', function () {
        testCreditMemo.clickOnRefundsToGetRefundTab();
        browser.sleep(3000);
    });

    it('Klik na Print Refund link', function () {
        testPrintRefundPage.clickPrintRefund();
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

    it('Provera da li je dobar Truglo logo na print order strani', function () {
        testPrintOrderPage.checkTrugloLogo();
    });

    it('Provera da li se ucitala Closed labela', function () {
        testCreditMemo.checkClosedLabelOnOrderDetailsPage();
        browser.sleep(3000);
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