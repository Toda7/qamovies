function clickOnSettingsLink() {
    element(by.partialLinkText('Settings')).click();
    browser.sleep(4000);
 }

function clickOnFabButton() {
    element(by.className('large material-icons')).click();
    browser.sleep(2000);
 }

function enterUserName() {
    element(by.name('q')).sendKeys('stodic');
    browser.sleep(2000);
}

function clickToAddUser() {
    element(by.partialLinkText('ADD USER')).click();
    // element(by.buttonText('ADD USER')).click();
    browser.sleep(2000);
}

 module.exports = {
    clickOnSettingsLink,
    clickOnFabButton,
    enterUserName,
    clickToAddUser,
 }