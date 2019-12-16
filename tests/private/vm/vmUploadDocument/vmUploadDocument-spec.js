var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmUploadDocument = require('../vmUploadDocument/vmUploadDocument-po.js');


describe('Upload new document', function(){


it('Dolazak na VM stranu', function(){
    vmAddVendor.landOnVMPage();
});

it('Provera dal se ucitao VM title on page', function(){
    vmAddVendor.checkVMTitleOnPage();
});

it('Klik on OPEN VENDOR MANAGEMENT button', function(){
    vmAddVendor.clickOnOpenVendorManagementButton();
});

it('Klik on TBD link da vidimo sve vendore sa tom kategorijom', function(){
    vmUploadDocument.clickOnTBDLink();
});

it('Klik na vendora da vidimo details page', function(){
    vmUploadDocument.clickOnVendorLink();
});

it('Upload document', function(){
    vmUploadDocument.addDoc();
});

it('Provera dal se ucitala Upload Complete message', function(){
    vmUploadDocument.checkUploadCompleteMessage();
});

it('Klik na OK button', function(){
    vmUploadDocument.clickOnOkLink();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});

