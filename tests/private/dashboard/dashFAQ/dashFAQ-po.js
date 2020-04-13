function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnFAQ() {
    //  Klik na FAQ link iz footera
    element(by.linkText('FAQ')).click(); 
    browser.sleep(5000);
}

function checkFAQUrl() {
    // Provera FAQ URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://support.cbancnetwork.com/hc/en-us'), 7000);
}

module.exports = {
    landOnHomePage,
    clickOnFAQ,
    checkFAQUrl,
 }