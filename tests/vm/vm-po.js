function clickOnLink() {
    //  Klik na vendor_management link iz drop menu
    element(by.className('vendor_management')).click();
 }
 function checkVmUrl() {
    // Provera VM URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/vendor-management'), 5000);
}
function checkVMPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Vendor Management for Financial Institutions | CBANC'), 5000);
}
function checkDemoButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao demo button
    browser.wait(EC.textToBePresentInElement($('.demo_button'),'REQUEST A DEMO'), 5000);
    browser.sleep(2000);
}    
function checkPremiumAd(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitala Premium ad 
    browser.wait(EC.textToBePresentInElement($('.premium_ad'),'Unlock all of CBANC Premium to save even more!'), 5000);
    browser.sleep(2000);
}    
module.exports = {
    clickOnLink,
    checkVMPageTitle,
    checkVmUrl,
    checkDemoButton,
    checkPremiumAd,
}