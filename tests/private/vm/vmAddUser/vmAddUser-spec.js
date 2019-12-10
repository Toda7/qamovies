var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmAddUser = require('../vmAddUser/vmAddUser-po.js');

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

    it('Klik on Settings', function(){
        vmAddUser.clickOnSettingsLink();
    });

    it('Klik on FAB button', function(){
        vmAddUser.clickOnFabButton();
    });

    it('Unosenje imena usera u search field', function(){
        vmAddUser.enterUserName();
    });

    it('Klik to add user', function(){
        vmAddUser.clickToAddUser();
    });

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    