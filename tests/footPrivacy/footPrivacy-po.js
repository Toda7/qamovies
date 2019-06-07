function clickOnLink() {
    //  Klik na Privacy Policy link iz footera
    element(by.linkText('Privacy Policy')).click(); 
    browser.sleep(2000);
}

function checkPrivacyURL() {
    // Provera Privacy Policy URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support/privacy_policy'), 5000);
}

module.exports = {
    clickOnLink,
    checkPrivacyURL,
 }