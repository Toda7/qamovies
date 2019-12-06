function clickOnLink() {
    //  Klik na PA link iz drop menu
    element(by.className('peer_group_analysis')).click();
 }
 function checkPaUrl() {
    // Provera PA URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/peer-group-analysis'), 5000);
}
function checkRAPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC Peer Group Analysis Tool'), 5000);
}
function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao title on page 
    browser.wait(EC.textToBePresentInElement($('.content'),'Streamlined peer analysis, for free!'), 5000);
    browser.sleep(2000);
}    
function chechButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao demo button
    browser.wait(EC.textToBePresentInElement($('.button'),'LAUNCH PEER ANALYSIS TOOL'), 5000);
    browser.sleep(2000);
}    
function checkAdOnPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.textToBePresentInElement($('.premium_ad'),'Unlock all of CBANC Premium to save even more!'), 5000);
}
module.exports = {
    clickOnLink,
    checkPaUrl,
    checkRAPageTitle,
    checkTitleOnPage,
    chechButton,
    checkAdOnPage,
}