var testPrintShipment = require('./testPrintShipment-po.js');

describe('Print Shipment page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na My Orders stranu u Truglo shopu', function () {
        testPrintShipment.landOnMyOrdersPage();
        browser.sleep(2000);
    });

    it('Klik na poslednji naruceni ordcer', function () {
        testPrintShipment.clickOnOrderView();
        browser.sleep(1000);
    });

    it('Klik na Order Shipments tab', function () {
        testPrintShipment.clickOnOrderShippmentsTab();
        browser.sleep(2000);
    });

    it("Klik na Klik na PRINT SHIPMENT link", function() {
        testPrintShipment.clickOnPrintShipment();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(2000);
        });
    });

    it('Klik Escape na tastaturi', function () {
        testPrintShipment.clickOnEscButton();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(2000);
        });
    });

    // it('Provera da li je dobar GF logo na print shipment strani', function () {
    //     testPrintShipment.checkGFLogo();
    //     browser.sleep(1000);
    // });

    it('Provera da li je dobar Truglo logo na print shipment strani', function () {
        testPrintShipment.checkTrugloLogo();
        browser.sleep(1000);
    });

    it('Provera da li je dobar Order Status', function () {
        testPrintShipment.checkOrderStatus();
        browser.sleep(2000);
    });

    it("Klik na X to close new tab", function() {
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        browser.sleep(2000);
        });
    });

    it("Klik na Klik na PRINT ALL SHIPMENTS link", function() {
        testPrintShipment.clickOnPrintAllShipments();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(2000);
        });
    });

    it('Klik Escape na tastaturi', function () {
        testPrintShipment.clickOnEscButton();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(2000);
        });
    });

    it('Provera da li je dobar Truglo logo na print shipment strani', function () {
        testPrintShipment.checkTrugloLogo();
        browser.sleep(1000);
    });

    it('Provera da li je dobar Order Status', function () {
        testPrintShipment.checkOrderStatus();
        browser.sleep(1000);
    });

    it("Klik na X to close new tab", function() {
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