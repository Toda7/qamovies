var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmReport = require('../vmReport/vmReport-po.js');

describe('Open report page', function(){

    it('Dolazak na VM stranu', function(){
        vmAddVendor.landOnVMPage();
    });
    
    it('Provera dal se ucitao VM title on page', function(){
        vmAddVendor.checkVMTitleOnPage();
    });

    it('Klik on OPEN VENDOR MANAGEMENT button', function(){
        vmAddVendor.clickOnOpenVendorManagementButton();
    });

    it('Klik on Board of Directors link', function(){   
        vmReport.clickOnBoardofDirectorsLink();
        }); 

    it("should open the first tab", function() {
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
            });
        });

    it('Provera dal je tacan page title', function(){
        vmReport.checkReportPageTitle();
    });

    it('Provera da li se ucitala Critital section', function(){
        vmReport.checkCriticalSectionOnPage();
    });

    it('Provera da li se ucitala high section', function(){
        vmReport.checkHighSectionOnPage();
    });

    it('Provera da li se ucitala medium section', function(){
        vmReport.checkMediumSectionOnPage();
    });

    it('Provera da li se ucitala low section', function(){
        vmReport.checkLowSectionOnPage();
    });

    it('Provera da li se ucitala TDB section', function(){
        vmReport.checkTbdSectionOnPage();
    });

    it('Provera da li se ucitala Critical Vendor Details section', function(){
        vmReport.checkCrititalVendorDetailsSectionOnPage();
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
    
    