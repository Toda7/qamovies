var testTrackShipment = require('./testTrackShipment-po.js');
var testOrderComplete = require('../testOrderComplete/testOrderComplete-po.js');
var testReturnPolicy = require('../testReturnPolicy/testReturnPolicy-po.js');

describe('Provera Tracking windowsa', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na my account page page', function(){
        testReturnPolicy.landOnMyAccountPage();
        browser.sleep(5000);
    });

    it('Klik na prvi View Order link', function () {
        testOrderComplete.clickOnOrderView();
        browser.sleep(3000);
    });

    it('Klik na Order Shippment', function () {
        testOrderComplete.clickOnOrderShippments();
        browser.sleep(5000);
    });

    it('Cekiranje Tracking Numbera', function () {
        testOrderComplete.checkTrackNumber();
        browser.sleep(1000);
    });

    it('Klik na TRACK ALL SHIPMENTS link', function () {
        testTrackShipment.clickOnTracAllkShipments();
        browser.sleep(1000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(1000);
        });
    });

    it('Cekiranje Tracking Numbera', function () {
        testTrackShipment.checkPageTitle();
        browser.sleep(1000);
    });

    it('Klik na Close Window button na Tracking Infomation strani', function () {
        testTrackShipment.clickOnCloseButton();
        browser.sleep(1000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[0]);
        });
    });
    

    it('Klik na TRACK THIS SHIPMENT link', function () {
        testTrackShipment.clickOnTrackThisShipment();
        browser.sleep(1000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(1000);
        });
    });

    it('Cekiranje Tracking Numbera', function () {
        testTrackShipment.checkPageTitle();
        browser.sleep(1000);
    });

    it('Klik na Close Window button na Tracking Infomation strani', function () {
        testTrackShipment.clickOnCloseButton();
        browser.sleep(1000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[0]);
        });
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});