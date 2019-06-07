function clickOnLink() {
    //  Klik na Terms of Service link iz footera
    element(by.linkText('Terms of Service')).click(); 
    browser.sleep(2000);
}

function checkTermsURL() {
    // Provera Terms of Service URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support/terms_of_service'), 5000);
}

module.exports = {
    clickOnLink,
    checkTermsURL,
 }