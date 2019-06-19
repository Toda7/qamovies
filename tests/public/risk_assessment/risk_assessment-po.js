function clickOnLink() {
    //  Klik na RA link iz drop menu
    element(by.className('risk_assessment')).click();
 }
 function checkRaUrl() {
    // Provera RA URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/risk_assessment'), 5000);
}
function checkRaPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Risk Assessment for Financial Institutions | CBANC'), 5000);
}
function checkTitleOnPage (){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('.hero'),'Risk Assessments for Financial Institutions'), 5000);
    browser.sleep(2000);
}    
function checkHelpBox(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao box for help
    browser.wait(EC.textToBePresentInElement($('.content_footer'),'Want some more information before trying it out?'), 5000);
    browser.sleep(2000);
}    

 module.exports = {
    clickOnLink,
    checkRaUrl,
    checkRaPageTitle,
    checkHelpBox,
    checkTitleOnPage,
}