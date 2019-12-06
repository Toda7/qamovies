var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_add_user = require('../vm_add_user/vm_add_user-po.js');
var vm_remove_user = require('../vm_remove_user/vm_remove_user-po.js');


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

    it('Klik on Settings', function(){
        vm_add_user.clickOnSettingsLink();
    });

    it('Klik on REMOVE link', function(){
        vm_remove_user.clickOnRemoveLink();
    });

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    