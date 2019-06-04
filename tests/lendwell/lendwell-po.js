function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_apps.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_apps.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
  
 }
function clickOnLink() {
    //  Klik na lendwell link iz drop menu
    element(by.className('lendwell')).click();
 }
 function checkLendwell() {
    // Provera lendwell URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/lendwell'), 5000);
}
function checkLendwellPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Lendwell Mortgage Settlement Services | CBANC'), 5000);
}
function checkForm(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitala forma na strani
    browser.wait(EC.textToBePresentInElement($('#request_form'), 'Contact us to learn more'), 5000);
}
function checkPSbox(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Integrated Products and Services box
    browser.wait(EC.textToBePresentInElement($('.middle_section'), 'Integrated Products and Services'), 5000);
    browser.sleep(2000);
}    
function checkFooter(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao footer
    browser.wait(EC.textToBePresentInElement($('.legal'), '2008 - 2019 CBANC Network. All rights reserved.'), 5000);
    browser.sleep(2000);
}    

module.exports = {
    HoverToOpenDrop,
    clickOnLink,
    checkLendwell,
    checkLendwellPageTitle,
    checkForm,
    checkPSbox,
    checkFooter,
 }
