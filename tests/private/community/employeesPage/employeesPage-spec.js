var employeesPage = require('./employeesPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');



describe('EmployeesPage page', function () {

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

    it('Klik on EMPLOYEES link', function () {
        employeesPage.clickOnEmployeesLink();
        browser.sleep(2000);
    });

    it('Provera da li se na strani nalazi 5 usera', function () {
        employeesPage.count5Users();
    });

    it('Provera da li se ucitao prvi user u employees list', function () {
        employeesPage.checkFirstUserFromTheList();
    });

    it('Provera da li se ucitao drugi user u employees list', function () {
        employeesPage.checkSecondUserFromTheList();
    });

    it('Provera da li se ucitao treci user u employees list', function () {
        employeesPage.checkThirdUserFromTheList();
    });

    it('Provera da li se ucitao cetvrti user u employees list', function () {
        employeesPage.checkFourthUserFromTheList();
    });

    it('Provera da li se ucitao peti user u employees list', function () {
        employeesPage.checkFifthUserFromTheList();
    });

    it('Klik na prvog usera sa liste zaposlenih', function () {
        employeesPage.clickOnFirstUserFromEmployeesList();
        browser.sleep(2000);
    });    

    it('Provera da li se ucitao profile section', function () {
        employeesPage.checkVendorOrgLinkOnUserDetails();
    });

    it('Provera da li se ucitao vendors link grupe', function () {
        employeesPage.checkVendorsGroupLink();
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
