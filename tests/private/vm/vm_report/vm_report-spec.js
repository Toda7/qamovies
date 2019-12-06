var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_report = require('../vm_report/vm_report-po.js');

describe('Open report page', function(){

    it('Dolazak na VM stranu', function(){
        vm_add_vendor.landOnVMPage();
    });
    
    it('Provera dal se ucitao VM title on page', function(){
        vm_add_vendor.checkVMTitleOnPage();
    });

    it('Klik on OPEN VENDOR MANAGEMENT button', function(){
        vm_add_vendor.clickOnOpenVendorManagementButton();
    });

    it('Klik on Board of Directors link', function(){   
        vm_report.clickOnBoardofDirectorsLink();
        }); 

    it("should open the first tab", function() {
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
            });
        });

    it('Provera dal je tacan page title', function(){
        vm_report.checkReportPageTitle();
    });

    it('Provera da li se ucitala Critital section', function(){
        vm_report.checkCriticalSectionOnPage();
    });

    it('Provera da li se ucitala high section', function(){
        vm_report.checkHighSectionOnPage();
    });

    it('Provera da li se ucitala medium section', function(){
        vm_report.checkMediumSectionOnPage();
    });

    it('Provera da li se ucitala low section', function(){
        vm_report.checkLowSectionOnPage();
    });

    it('Provera da li se ucitala TDB section', function(){
        vm_report.checkTbdSectionOnPage();
    });

    it('Provera da li se ucitala Critical Vendor Details section', function(){
        vm_report.checkCrititalVendorDetailsSectionOnPage();
    });

    it("should back focus to the first tab", function() {
            browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    
    