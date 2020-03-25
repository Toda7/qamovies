function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_education.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_education.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
  
 }

 function clickOnLink() {
    //  Klik na upcoming link iz drop menu
    element(by.className('submenu_item link_events')).click();
 }

 function checkUpcoming() {
    // Provera upcoming URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/education/webinars/calendar'), 7000);
    browser.sleep(2000);
}

function checkUpcomingWebinarsPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC: Upcoming Webinars'), 7000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.textToBePresentInElement($('.header_meta'), 'Upcoming Webinars'), 7000);
}


 module.exports = {
    HoverToOpenDrop,
    clickOnLink,
    checkUpcoming,
    checkUpcomingWebinarsPageTitle,
    checkTitleOnPage,

    
 }