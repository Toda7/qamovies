
var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmUploadDocument = require('../vmUploadDocument/vmUploadDocument-po.js');
var vmRemoveUnverifiedVendor = require('./vmRemoveUnverifiedVendor-po.js');


describe('Remove unverified vendor', function(){


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

    it('Klik na three dots', function(){
        vmRemoveUnverifiedVendor.clickOnThreeDotsLink();
    }); 

    it('Klik na Arhive vendor link', function(){
        vmRemoveUnverifiedVendor.clickArhiveVendor();
    }); 

    it('Klik to confirm delete', function(){
        vmRemoveUnverifiedVendor.clickOnDeleteToConfirm();
    }); 
    
    it('Provera da li se ucitala deleted message', function(){
        vmRemoveUnverifiedVendor.checkDeletedMessage();
    }); 
        
        
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    