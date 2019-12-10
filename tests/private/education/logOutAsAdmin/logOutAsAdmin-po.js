function HoverToOpenUserDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.user_name'))).perform();
    expect(element(by.css('.user_name')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
 }

 function clickOnSignOutLink() {
    //  Klik on Sign out link
    element(by.className('sign_out')).click();
    browser.sleep(2000);
}

module.exports = {
    HoverToOpenUserDrop,
    clickOnSignOutLink,
 }