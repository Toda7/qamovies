function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnVendors() {
    //  Klik na Vendors link iz footera
    element(by.linkText('Vendors')).click(); 
    browser.sleep(2000);
}

function checkVendorsUrl() {
    // Provera View Finder marketing URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/view-finder'), 7000);
}

module.exports = {
    landOnHomePage,
    clickOnVendors,
    checkVendorsUrl,
 }