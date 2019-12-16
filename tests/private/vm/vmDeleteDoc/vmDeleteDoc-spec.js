var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmUploadDocument = require('../vmUploadDocument/vmUploadDocument-po.js');
var vmDeleteDoc = require('../vmDeleteDoc/vmDeleteDoc-po.js');


describe('Delete document', function(){


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

    it('Klik na document', function(){
        vmDeleteDoc.clickOnDocLink();
    });

    it('Klik na three dots', function(){
        vmDeleteDoc.clickOnThreeDots();
    });

    it('Klik na Delete Document button', function(){
        vmDeleteDoc.clickOnDeleteButton();
    });

    it('Klik na Delete to confirm', function(){
        vmDeleteDoc.clickOnDeleteToConfirm();
    });

    it('Provera da li se ucitala Successfully poruka za deleted doc', function(){
        vmDeleteDoc.checkSuccessfullyMessage();
    });

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});

