var bannersOnVendorDetailsPage = require('./bannersOnVendorDetailsPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');

describe('Check bannera na vendor details page', function () {

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
        browser.sleep(5000);
    });

    it('Provera da li je dobra prva slika u banneru', function () {
        bannersOnVendorDetailsPage.checkBannerImage();
    });

    it('Provera da li je dobra druga slika u banneru', function () {
        bannersOnVendorDetailsPage.checkSecondBannerImage();
    });

    it('Provera da li je dobra treca slika u banneru', function () {
        bannersOnVendorDetailsPage.checkThirdBannerImage();
    });

    it('Klik na prvi banner', function () {
        bannersOnVendorDetailsPage.clickOnFirstBanner();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
    });

    it('Provera da li se ucitao prvi banner URL', function () {
        bannersOnVendorDetailsPage.checkFirstBannerURL();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(2000);
    });

    it('Klik na drugi banner', function () {
        bannersOnVendorDetailsPage.clickOnSecondBanner();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
    });

    it('Provera da li se ucitao drugi banner URL', function () {
        bannersOnVendorDetailsPage.checkSecondBannerURL();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(2000);
    });

    it('Klik na treci banner', function () {
        bannersOnVendorDetailsPage.clickOnThirdBanner();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        });
    });

    it('Provera da li se ucitao treci banner URL', function () {
        bannersOnVendorDetailsPage.checkThirdBannerURL();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
