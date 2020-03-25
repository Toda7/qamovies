function landOnFVPage() {
    // Dolazak na home stranu
    browser.get('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71'); 
    browser.sleep(2000);
}

function checkFVTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Title
    browser.wait(EC.titleIs('Dovla FV'), 7000);
}   

function checkHomeLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Home link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Home'), 7000);
}   

function checkTaskReportLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Task Report link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Task Report'), 7000);
}   

function checkAllActivityLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao All Activity link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'All Activity'), 7000);
}   

function checkSearchLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Search link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Search'), 7000);
}   

function checkAdminlandLink(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Adminland link
    browser.wait(EC.textToBePresentInElement($('.side_nav'), 'Adminland'), 7000);
} 

function clickOnCreatedByMe() {
    element(by.className('row card-tabs', 'Created By Me')).click();
    // klik na Created By Me tab
    browser.sleep(2000);
}

function clickOnAssignedToMe() {
    element(by.className('row card-tabs', 'Assigned To Me')).click();
    // klik na Assigned To Me tab
    browser.sleep(2000);
}

function checkAssignedToMeTasks(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali Assigned To Me taskovi
    browser.wait(EC.textToBePresentInElement($('.main_card'), 'Z1'), 7000);}

module.exports = {
    landOnFVPage,
    checkFVTitleOnPage,
    checkHomeLink,
    checkTaskReportLink,
    checkAllActivityLink,
    checkSearchLink,
    checkAdminlandLink,
    clickOnCreatedByMe,
    clickOnAssignedToMe,
    checkAssignedToMeTasks,
}