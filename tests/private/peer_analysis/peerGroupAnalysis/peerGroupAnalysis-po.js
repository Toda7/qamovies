function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function hoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_apps.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_apps.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
  
 }

function clickOnLink() {
    //  Klik na PA link iz drop menu
    element(by.className('peer_group_analysis')).click();
 }

 function checkPaUrl() {
    // Provera Peer Group Analysis URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/peer-group-analysis'), 7000);
}

function checkRAPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC Peer Group Analysis Tool'), 7000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao text on page 
    browser.wait(EC.textToBePresentInElement($('.content'),'Streamlined peer analysis, for free!'), 7000);
    browser.sleep(2000);
}    

function checkButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao demo button
    browser.wait(EC.textToBePresentInElement($('.button'),'LAUNCH PEER ANALYSIS TOOL'), 7000);
    browser.sleep(2000);
}    

function checkAdOnPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.textToBePresentInElement($('.premium_ad'),'Unlock all of CBANC Premium to save even more!'), 7000);
}

module.exports = {
    hoverToOpenDrop,
    landOnHomePage,
    clickOnLink,
    checkPaUrl,
    checkRAPageTitle,
    checkTitleOnPage,
    checkButton,
    checkAdOnPage,
}