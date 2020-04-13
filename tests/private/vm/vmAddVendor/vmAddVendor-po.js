function landOnVMPage() {
    // Dolazak na admin stranu
    browser.get('https://qa.cbancnetwork.com/vm/home'); 
    browser.sleep(2000);
}

function checkVMTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio help title on page
    browser.wait(EC.textToBePresentInElement($('.simple_title'), 'Vendor Management'), 7000);
}   

function clickOnOpenVendorManagementButton() {
    // Klik on GET STARTED button
    element(by.className('btn-flat ')).click();
    browser.sleep(2000);
}

function clickOnFABButton() {
    // Click to unselect checkbox
    element(by.className('btn-floating btn-large green')).click();
    browser.sleep(2000);
}

function checkTitleInAddVendorBox(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio help title on page
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Add Vendor'), 7000);
}   

function enterTextInSearchField() {
    // Unosenje email u invite email field
    element(by.name('q')).sendKeys('Fifa');
    browser.sleep(2000);
}

function clickOnAddVendorButton() {
    // Click to unselect checkbox
    element(by.className('btn-flat green-text')).click();
    browser.sleep(2000);
}

function checkNameOfVendorOnVendorDetails(){
    var EC = protractor.ExpectedConditions;
    // Provera Fifa Vendor name kada na vendor details page
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Vendor FIFA'), 7000);
}   

function checkTBDRisktLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitalo TBD Risk link
    browser.wait(EC.textToBePresentInElement($('.risk_rating_tbd'), 'TBD Risk'), 7000);
}   

function checkAddDocumentLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitalo ADD DOCUMENT link
    browser.wait(EC.textToBePresentInElement($('.card-action'), 'ADD DOCUMENT'), 7000);
}   

function checkAddContractLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao ADD CONTACT link
    browser.wait(EC.textToBePresentInElement($('.card-action'), 'ADD CONTRACT'), 7000);
}   

function checkAddTaskLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao ADD TASK link
    browser.wait(EC.textToBePresentInElement($('.card-action'), 'ADD TASK'), 7000);
}   

function checkRiskAssessLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao RISK ASSESS link
    browser.wait(EC.textToBePresentInElement($('.card-action'), 'RISK ASSESS'), 7000);
}   

function checkDocumentsTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao ALL DOCUMENTS tab
    browser.wait(EC.textToBePresentInElement($('.sub_items'), 'ALL DOCUMENTS'), 7000);
}   

function checkContractsTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Contracts tab
    browser.wait(EC.textToBePresentInElement($('.sub_items'), 'CONTRACTS'), 7000);
}   

function checkTasksTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Tasks tab
    browser.wait(EC.textToBePresentInElement($('.sub_items'), 'TASKS'), 7000);
}   

function checkProductsTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Products tab
    browser.wait(EC.textToBePresentInElement($('.sub_items'), 'PRODUCTS'), 7000);
}   

function checkRiskAssessmentsTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Risk Assessments tab
    browser.wait(EC.textToBePresentInElement($('.sub_items'), 'RISK ASSESSMENTS'), 7000);
}   


module.exports = {
    landOnVMPage,
    checkVMTitleOnPage,
    clickOnOpenVendorManagementButton,
    clickOnFABButton,
    checkTitleInAddVendorBox,
    enterTextInSearchField,
    clickOnAddVendorButton,
    checkNameOfVendorOnVendorDetails,
    checkTBDRisktLink,
    checkAddDocumentLink,
    checkAddContractLink,
    checkAddTaskLink,
    checkRiskAssessLink,
    checkDocumentsTab,
    checkContractsTab,
    checkTasksTab,
    checkProductsTab,
    checkRiskAssessmentsTab,
}