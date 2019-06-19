function clickOnLink() {
    //  Klik na FAQ link iz footera
    element(by.linkText('FAQ')).click(); 
    browser.sleep(2000);
}

function checkFAQURL() {
    // Provera FAQ URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://support.cbancnetwork.com/hc/en-us'), 10000);
}

module.exports = {
    clickOnLink,
    checkFAQURL,
 }