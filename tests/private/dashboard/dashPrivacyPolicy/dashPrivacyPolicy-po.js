function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnPrivacyPolicy() {
    //  Klik na Privacy Policy link iz footera
    element(by.linkText('Privacy Policy')).click(); 
    browser.sleep(2000);
}

function checkPrivacyPolicyUrl() {
    // Provera View Finder marketing URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support/privacy_policy'), 15000);
}

module.exports = {
    landOnHomePage,
    clickOnPrivacyPolicy,
    checkPrivacyPolicyUrl,
 }