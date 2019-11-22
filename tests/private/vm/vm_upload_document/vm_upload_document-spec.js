var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_upload_document = require('../vm_upload_document/vm_upload_document-po.js');


describe('Upload new document', function(){


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

it('Upload document', function(){
    vm_upload_document.addDoc();
});

it('Provera dal se ucitala Upload Complete message', function(){
    vm_upload_document.checkUploadCompleteMessage();
});

it('Klik na OK button', function(){
    vm_upload_document.clickOnOkLink();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});

