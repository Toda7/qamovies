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
function checkLendwellPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Lendwell Mortgage Settlement Services | CBANC'), 5000);
}
function checkForm(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali button for join
    browser.wait(EC.textToBePresentInElement($('#request_form'), 'Contact us to learn more'), 5000);
}
module.exports = {
    clickOnDrop,
    clickOnLink,
    checkLendwell,
    checkLendwellPageTitle,
    checkForm,
 }
 