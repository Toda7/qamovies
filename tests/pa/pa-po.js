function clickOnLink() {
    //  Klik na PA link iz drop menu
    element(by.className('peer_group_analysis')).click();
 }
 function checkPaUrl() {
    // Provera VM URL-a
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
    // Provera da li se ucitala Premium ad 
    browser.wait(EC.textToBePresentInElement($('.content'),'Streamlined peer analysis, for free!'), 5000);
    browser.sleep(2000);
}    
function chechButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao demo button
    browser.wait(EC.textToBePresentInElement($('.button'),'LAUNCH PEER ANALYSIS TOOL'), 5000);
    browser.sleep(2000);
}    
module.exports = {
    clickOnLink,
    checkPaUrl,
    checkRAPageTitle,
    checkTitleOnPage,
    chechButton,
}