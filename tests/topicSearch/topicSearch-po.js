function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_community.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_community.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);

 }

function clickOnLink() {
    //  Klik na Topics link iz drop menu
    element(by.className('topics')).click(); 
 }

function enterSearchTerm() {
    // unos texta za search
    element(by.name('q')).clear().sendKeys('test');
}

function submit() {
    // click na search dugme
    element.all(by.xpath('//*[@id="top_section"]/div/div[2]/div/form/div[2]/button')).click();
}

function checkSearchUrl() {
    // provera topic search url-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/topics?q=test'), 5000);
}


module.exports = { 
    HoverToOpenDrop,
    clickOnLink,
    enterSearchTerm,
    submit,
    checkSearchUrl,

}