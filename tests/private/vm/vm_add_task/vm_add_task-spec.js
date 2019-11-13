var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');
var vm_upload_document = require('../vm_upload_document/vm_upload_document-po.js');
var vm_add_task = require('../vm_add_task/vm_add_task-po.js');


describe('Create task', function(){


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

    it('Klik na "ADD TASK"', function(){
        vm_add_task.clickOnAddTask();
    });

    it('Enter text in title field"', function(){
        vm_add_task.enterTitleOfTask();
    });

    it('Klik na linked doc link', function(){
        vm_add_task.clickOnLinkedDoc();
    });

    it('Klik na photo from suggestion', function(){
        vm_add_task.clickOnPhotoToSelect();
    });

    it('Enter text in decription field', function(){
        vm_add_task.enterDescriptionOfTask();
    });

    it('Klik na usera da asajnujemo task', function(){
        vm_add_task.clickOnUserToAssignTask();
    });

    it('Klik na CREATE TASK button', function(){
        vm_add_task.clickOnCreateTaskButton();
    });

    it('Provera da li se na strani nalazi task sa nasim title', function(){
        vm_add_task.checkIsTitleIsPresent();
    });
    
    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    
    