function clickOnLink() {
    //  Klik na ondemand link iz drop menu
    element(by.className('submenu_item link_ondemand')).click();
 }

 function checkOnDemand() {
    // Provera ondemand URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/webinars/on_demand'), 7000);
    browser.sleep(2000);
}

function checkOnDemandWebinarsPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC: On Demand Library'), 7000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.textToBePresentInElement($('.header_meta'), 'On Demand Webinars'), 7000);
}










 module.exports = {
    clickOnLink,
    checkOnDemand,
    checkOnDemandWebinarsPageTitle,
    checkTitleOnPage,

    
 }