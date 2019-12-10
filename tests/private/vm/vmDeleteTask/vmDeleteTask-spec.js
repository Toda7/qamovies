var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmUploadDocument = require('../vmUploadDocument/vmUploadDocument-po.js');
var vmDeleteTask = require('../vmDeleteTask/vmDeleteTask-po.js');
var vmEditTask = require('../vmEditTask/vmEditTask-po.js');


describe('Delete task', function(){


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

    it('Klik na tasks tab', function(){
        vmEditTask.clickTasksTab();
    });   

    it('Klik na task da vidimo details page', function(){
        vmDeleteTask.clickOnTask();
    });  

    it('Klik na tri tacke', function(){
        vmEditTask.clickOnThreeDots();
    });  

    it('Klik na delete', function(){
        vmDeleteTask.clickOnDeleteButton();
    });  

    it('Klik na delete to confirm', function(){
        vmDeleteTask.clickOnDeleteToConfirm();
    }); 
        
    it('Provera deleted message', function(){
        vmDeleteTask.checkDeletedMessage();
    }); 

    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    
    