function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_community.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_community.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);

 }
function clickOnLink() {
    //  Klik na Doc library link iz drop menu
    element(by.className('documents')).click();
 }

function enterSearchTerm() {
    // unos texta za search
    element(by.name('q')).clear().sendKeys('test');
    element(by.name('q')).sendKeys(protractor.Key.ENTER);
    browser.sleep(2500);
}

function checkSearchUrl() {
    // Provera DOC search URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/documents?q=test'), 5000);
}

module.exports = {
    clickOnLink,
    HoverToOpenDrop,
    enterSearchTerm,
    checkSearchUrl,
}