var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmUploadDocument = require('../vmUploadDocument/vmUploadDocument-po.js');
var vmEditTask = require('../vmEditTask/vmEditTask-po.js');
var vmCompleteTask = require('../vmCompleteTask/vmCompleteTask-po.js');


describe('edit task', function(){


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
        vmEditTask.clickOnTask();
    });  

    it('Klik on Complete task button', function(){
        vmCompleteTask.clickOnMarkCompletebutton();
    });  

    it('Provera da li se Re-open button pojavio', function(){
        vmCompleteTask.checkReOpenButton();
    });  


    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    