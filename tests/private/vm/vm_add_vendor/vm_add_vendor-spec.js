
var vm_add_vendor = require('../vm_add_vendor/vm_add_vendor-po.js');

describe('Add vendor profile in VM', function(){


it('Dolazak na VM stranu', function(){
    vm_add_vendor.landOnVMPage();
});

it('Provera dal se ucitao VM title on page', function(){
    vm_add_vendor.checkVMTitleOnPage();
});

it('Klik on OPEN VENDOR MANAGEMENT button', function(){
    vm_add_vendor.clickOnOpenVendorManagementButton();
});

it('Klik on FAB button', function(){
    vm_add_vendor.clickOnFABButton();
});

it('Proveriti Title u Add vendor box', function(){
    vm_add_vendor.checkTitleInAddVendorBox();
});

it('Unosenje texta u search field', function(){
    vm_add_vendor.enterTextInSearchField();
});

it('Click on Add Vendor button', function(){
    vm_add_vendor.clickOnAddVendorButton();
});

it('Provera Fifa Vendor name kada na vendor details page', function(){
    vm_add_vendor.checkNameOfVendorOnVendorDetails();
});

it('Provera da li se ucitalo TBD Risk link', function(){
    vm_add_vendor.checkTBDRisktLink();
});

it('Provera da li se ucitalo ADD DOCUMENT link', function(){
    vm_add_vendor.checkAddDocumentLink();
});

it('Provera da li se ucitalo ADD CONTRACT link', function(){
    vm_add_vendor.checkAddContractLink();
});

it('Provera da li se ucitalo ADD TASK link', function(){
    vm_add_vendor.checkAddTaskLink();
});

it('Provera da li se ucitao RISK ASSESS link', function(){
    vm_add_vendor.checkRiskAssessLink();
});

it('Provera da li se ucitao ALL DOCUMENTS tab', function(){
    vm_add_vendor.checkDocumentsTab();
});

it('Provera da li se ucitao Contracts tab', function(){
    vm_add_vendor.checkContractsTab();
});

it('Provera da li se ucitao Tasks tab', function(){
    vm_add_vendor.checkTasksTab();
});

it('Provera da li se ucitao Products tab', function(){
    vm_add_vendor.checkProductsTab();
});

it('Provera da li se ucitao Risk Assessments tab', function(){
    vm_add_vendor.checkRiskAssessmentsTab();
});


beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});