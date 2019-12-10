var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');
var vmUploadDocument = require('../vmUploadDocument/vmUploadDocument-po.js');
var vmEditTask = require('../vmEditTask/vmEditTask-po.js');


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

    it('Klik na tri tacke', function(){
        vmEditTask.clickOnThreeDots();
    });  

    it('Klik na edit link', function(){
        vmEditTask.clickOnEditButton();
    });  

    it('Brisanje texta iz title polje', function(){
        vmEditTask.deleteTextFromTheField();
    });  
    
    it('Unosenje edit texta u title polje', function(){
        vmEditTask.enterEditedTitleOfTask();
    });  

    it('Klik on save button', function(){
        vmEditTask.clickOnSaveButton();
    });  

    it('Provera da li je edited title sacuvan', function(){
        vmEditTask.checkIsTitleIsPresent();
    });  

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
    });
    
    