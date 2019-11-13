var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_upload_document = require('../vm_upload_document/vm_upload_document-po.js');
var vm_delete_doc = require('../vm_delete_doc/vm_delete_doc-po.js');


describe('Delete document', function(){


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
        vm_upload_document.clickOnVendorLink();
    });

    it('Klik na document', function(){
        vm_delete_doc.clickOnDocLink();
    });

    it('Klik na three dots', function(){
        vm_delete_doc.clickOnThreeDots();
    });

    it('Klik na Delete Document button', function(){
        vm_delete_doc.clickOnDeleteButton();
    });

    it('Klik na Delete to confirm', function(){
        vm_delete_doc.clickOnDeleteToConfirm();
    });

    it('Provera da li se ucitala Successfully poruka za deleted doc', function(){
        vm_delete_doc.checkSuccessfullyMessage();
    });

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});

