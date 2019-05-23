function clickOnDrop() {
browser.actions().mouseMove(element(by.css('.menu_item.link_apps.has_submenu'))).perform();
expect(element(by.css('.menu_item.link_apps.has_submenu')).isDisplayed()).toBeTruthy();
    
 }
function clickOnLink() {
    element(by.className('lendwell')).click();
 }
 function checkLendwell() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/lendwell'), 5000);
}
module.exports = {
    clickOnDrop,
    clickOnLink,
    checkLendwell,
 }
 