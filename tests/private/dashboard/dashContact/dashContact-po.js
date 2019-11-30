function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnContact() {
    //  Klik na Contact link iz footera
    element(by.linkText('Contact')).click(); 
    browser.sleep(2000);
}

function checkContactUrl() {
    // Provera View Finder marketing URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support'), 15000);
}

module.exports = {
    landOnHomePage,
    clickOnContact,
    checkContactUrl,
 }