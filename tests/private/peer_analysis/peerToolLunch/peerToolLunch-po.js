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
    browser.sleep(5000);
 }

 function clickOnLunchButton() {
    //  Klik na Lunch dugme
    element.all(by.className('button')).get(0).click();
    browser.sleep(5000);
 }

 function checkPeerToolUrl() {
    // Provera Peer Group Analysis URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/peer_analysis/'), 12000);
}

function checkDownloadButton()  {
    // Proverava da li se ucitao Download to .CSV button   
     var EC = protractor.ExpectedConditions;
     browser.wait(EC.textToBePresentInElement($('.download_link'),'DOWNLOAD TO .CSV'), 7000);
 }

 function checkShareButton()  {
    // Proverava da li se ucitao Share button   
     var EC = protractor.ExpectedConditions;
     browser.wait(EC.textToBePresentInElement($('.share'),'SHARE'), 10000);
 }

 function checkFiledSelector()  {
    // Proverava da li se ucitao Filed Selector   
     var EC = protractor.ExpectedConditions;
     browser.wait(EC.textToBePresentInElement($('.field_selector'),'MEASURE CATEGORIES'), 10000);
 }

 function checkReportPeriod()  {
    // Proverava da li se ucitao Report period   
     var EC = protractor.ExpectedConditions;
     browser.wait(EC.textToBePresentInElement($('.date_picker'),'REPORTING PERIOD'), 10000);
 }

 function checkPageTitle()  {
    // Proverava da li se ucitao Pge Title   
    var EC = protractor.ExpectedConditions;
     browser.wait(EC.textToBePresentInElement($('.peer_analysis'),'Peer Analysis'), 10000);
     browser.sleep(2000);
 }

 

 module.exports = {
    hoverToOpenDrop,
    landOnHomePage,
    clickOnLink,
    clickOnLunchButton,
     checkPeerToolUrl,
    checkDownloadButton,
    checkShareButton,
    checkFiledSelector,
    checkReportPeriod,
    checkPageTitle,
    
}