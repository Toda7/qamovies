//function landOnDashboardPage() {
  //  browser.get('https://qa.cbancnetwork.com'); 
    //browser.sleep(2000);
//}

function clickOnWorkspace() {
    // Klik na Workspace link na dashbordu  
    element(by.className('workspace')).click();
    browser.sleep(2000);
}

function checkWorkspaceUrl() {
    // Prowera Workspace Urla
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/home'), 5000);
}

function checkPageText() {
    // Provera page Texta 
    expect(element(by.tagName('p')).getText()).toBe('CBANC Workspace is a secure file storage system.');

}

function checkPageTitle(){
    // Provera page title  
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.pt_text truncate'),'File Vaults'), 5000);
}

module.exports = {
    //landOnDashboardPage,
    //checkTitleOnPage,
    clickOnWorkspace,
    checkWorkspaceUrl,
    checkPageText,
    checkPageTitle,
}