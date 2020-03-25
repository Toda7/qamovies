function clickOnLink() {
    //  Klik na Vendors link iz footera
    element(by.linkText('Vendors')).click(); 
    browser.sleep(2000);
}

function checkVendorsURL() {
    // Provera Vendors URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/view-finder'), 7000);
}

module.exports = {
    clickOnLink,
    checkVendorsURL,
 }