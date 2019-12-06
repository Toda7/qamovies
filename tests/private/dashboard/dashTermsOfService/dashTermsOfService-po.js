function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnTermsOfService() {
    //  Klik na TermsOfService link iz footera
    element(by.linkText('Terms of Service')).click(); 
    browser.sleep(2000);
}

function checkTermsOfServiceUrl() {
    // Provera View Finder marketing URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support/terms_of_service'), 15000);
}

module.exports = {
    landOnHomePage,
    clickOnTermsOfService,
    checkTermsOfServiceUrl,
 }