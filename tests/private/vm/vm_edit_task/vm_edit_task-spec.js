var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_upload_document = require('../vm_upload_document/vm_upload_document-po.js');
var vm_edit_task = require('../vm_edit_task/vm_edit_task-po.js');


describe('edit task', function(){


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
        vm_edit_task.clickOnTask();
    });  

    it('Klik na tri tacke', function(){
        vm_edit_task.clickOnThreeDots();
    });  

    it('Klik na edit link', function(){
        vm_edit_task.clickOnEditButton();
    });  

    it('Brisanje texta iz title polje', function(){
        vm_edit_task.deleteTextFromTheField();
    });  
    
    it('Unosenje edit texta u title polje', function(){
        vm_edit_task.enterEditedTitleOfTask();
    });  

    it('Klik on save button', function(){
        vm_edit_task.clickOnSaveButton();
    });  

    it('Provera da li je edited title sacuvan', function(){
        vm_edit_task.checkIsTitleIsPresent();
    });  

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    
    