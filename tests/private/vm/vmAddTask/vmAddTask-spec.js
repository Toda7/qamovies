var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmUploadDocument = require('../vmUploadDocument/vmUploadDocument-po.js');
var vmAddTask = require('../vmAddTask/vmAddTask-po.js');


describe('Create task', function(){


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

    it('Klik na "ADD TASK"', function(){
        vmAddTask.clickOnAddTask();
    });

    it('Enter text in title field"', function(){
        vmAddTask.enterTitleOfTask();
    });

    it('Klik na linked doc link', function(){
        vmAddTask.clickOnLinkedDoc();
    });

    it('Klik na photo from suggestion', function(){
        vmAddTask.clickOnPhotoToSelect();
    });

    it('Enter text in decription field', function(){
        vmAddTask.enterDescriptionOfTask();
    });

    it('Klik na usera da asajnujemo task', function(){
        vmAddTask.clickOnUserToAssignTask();
    });

    it('Klik na CREATE TASK button', function(){
        vmAddTask.clickOnCreateTaskButton();
    });

    it('Provera da li se na strani nalazi task sa nasim title', function(){
        vmAddTask.checkIsTitleIsPresent();
    });
    
    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    
    