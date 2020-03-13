var dmLinkFromEmployees = require('./dmLinkFromEmployees-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');
var employeesPage = require('../employeesPage/employeesPage-po.js');

describe('Click on DM link from employees page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na vendor directory page', function () {
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Unosenje texta u search polje', function () {
        searchOnVendorDirectoryPage.enterearchWord();
        browser.sleep(5000);
    });

    it('Klik na vendor name', function () {
        followUnfollowVendor.clickOnVendorName();
        browser.sleep(3000);
    });

    it('Klik on EMPLOYEES link', function () {
        employeesPage.clickOnEmployeesLink();
        browser.sleep(2000);
    });

    it('Klik on DM link', function () {
        dmLinkFromEmployees.clickOnDMLink();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
    });

    it('Provera da li se ucitao direct message URL', function () {
        dmLinkFromEmployees.checkDmURL();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        browser.sleep(2000);
        });
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
