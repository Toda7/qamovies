
var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_upload_document = require('../vm_upload_document/vm_upload_document-po.js');
var vm_remove_vendor = require('./vm_remove_vendor-po.js');
var vm_remove_unverified_vendor = require('../vm_remove_unverified_vendor/vm_remove_unverified_vendor-po.js');


describe('Remove verified vendor', function(){


    it('Dolazak na VM stranu', function(){
        vm_add_vendor.landOnVMPage();
    });
    
    it('Provera dal se ucitao VM title on page', function(){
        vm_add_vendor.checkVMTitleOnPage();
    });

    it('Klik on OPEN VENDOR MANAGEMENT button', function(){
        vm_add_vendor.clickOnOpenVendorManagementButton();
    });
    
    it('Klik on TBD link da vidimo sve vendore sa tom kategorijom', function(){
        vm_upload_document.clickOnTBDLink();
    });    

    it('Klik na vendora da vidimo details page', function(){
        vm_remove_vendor.clickOnVendorLink();
    });

    it('Klik na three dots', function(){
        vm_remove_unverified_vendor.clickOnThreeDotsLink();
    }); 

    it('Klik na Arhive vendor link', function(){
        vm_remove_unverified_vendor.clickArhiveVendor();
    }); 

    it('Klik to confirm delete', function(){
        vm_remove_unverified_vendor.clickOnDeleteToConfirm();
    }); 

    it('Provera da li se ucitala deleted message', function(){
        vm_remove_vendor.checkDeletedMessage();
    }); 
        
        
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });