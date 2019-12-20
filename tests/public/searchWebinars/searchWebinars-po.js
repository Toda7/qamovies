function HoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.menu_item.link_education.has_submenu'))).perform();
    expect(element(by.css('.menu_item.link_education.has_submenu')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
 }
 function clickOnLink() {
    //  Klik na upcoming webinars link
    element(by.className('submenu_item link_events')).click();
    browser.sleep(2000);
 }

 function enterSearchWord() {
    //  Uneti search text
    element(by.name('search_term')).clear().sendKeys('test');
}

function submit() {
    // Klik na search button
   element(by.className('cta')).click();
    browser.sleep(2000);
}

function checkWebinarIsPresent(){
    // Provera da li se webinar ucitao
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf($('.webinar_item')), 5000);
    }

 module.exports = {
    HoverToOpenDrop,
    clickOnLink,
    enterSearchWord,
    submit,
    checkWebinarIsPresent,
 }