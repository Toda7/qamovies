
var vmAddVendor = require('../vmAddVendor/vmAddVendor-po.js');

describe('Add vendor profile in VM', function(){


it('Dolazak na VM stranu', function(){
    vmAddVendor.landOnVMPage();
});

it('Provera dal se ucitao VM title on page', function(){
    vmAddVendor.checkVMTitleOnPage();
});

it('Klik on OPEN VENDOR MANAGEMENT button', function(){
    vmAddVendor.clickOnOpenVendorManagementButton();
});

it('Klik on FAB button', function(){
    vmAddVendor.clickOnFABButton();
});

it('Proveriti Title u Add vendor box', function(){
    vmAddVendor.checkTitleInAddVendorBox();
});

it('Unosenje texta u search field', function(){
    vmAddVendor.enterTextInSearchField();
});

it('Click on Add Vendor button', function(){
    vmAddVendor.clickOnAddVendorButton();
});

it('Provera Fifa Vendor name kada na vendor details page', function(){
    vmAddVendor.checkNameOfVendorOnVendorDetails();
});

it('Provera da li se ucitalo TBD Risk link', function(){
    vmAddVendor.checkTBDRisktLink();
});

it('Provera da li se ucitalo ADD DOCUMENT link', function(){
    vmAddVendor.checkAddDocumentLink();
});

it('Provera da li se ucitalo ADD CONTRACT link', function(){
    vmAddVendor.checkAddContractLink();
});

it('Provera da li se ucitalo ADD TASK link', function(){
    vmAddVendor.checkAddTaskLink();
});

it('Provera da li se ucitao RISK ASSESS link', function(){
    vmAddVendor.checkRiskAssessLink();
});

it('Provera da li se ucitao ALL DOCUMENTS tab', function(){
    vmAddVendor.checkDocumentsTab();
});

it('Provera da li se ucitao Contracts tab', function(){
    vmAddVendor.checkContractsTab();
});

it('Provera da li se ucitao Tasks tab', function(){
    vmAddVendor.checkTasksTab();
});

it('Provera da li se ucitao Products tab', function(){
    vmAddVendor.checkProductsTab();
});

it('Provera da li se ucitao Risk Assessments tab', function(){
    vmAddVendor.checkRiskAssessmentsTab();
});


beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});