var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_upload_document = require('../vm_upload_document/vm_upload_document-po.js');
var vm_delete_task = require('../vm_delete_task/vm_delete_task-po.js');
var vm_edit_task = require('../vm_edit_task/vm_edit_task-po.js');


describe('Delete task', function(){


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

    it('Klik na tasks tab', function(){
        vm_edit_task.clickTasksTab();
    });   

    it('Klik na task da vidimo details page', function(){
        vm_delete_task.clickOnTask();
    });  

    it('Klik na tri tacke', function(){
        vm_edit_task.clickOnThreeDots();
    });  

    it('Klik na delete', function(){
        vm_delete_task.clickOnDeleteButton();
    });  

    it('Klik na delete to confirm', function(){
        vm_delete_task.clickOnDeleteToConfirm();
    }); 
        
    it('Provera deleted message', function(){
        vm_delete_task.checkDeletedMessage();
    }); 

    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    
    