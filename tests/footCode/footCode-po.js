function clickOnLink() {
    //  Klik na Code of Conduct link iz footera
    element(by.linkText('Code of Conduct')).click(); 
    browser.sleep(2000);
}

function checkCodeURL() {
    // Provera Code of Conduct URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support/code_of_conduct'), 5000);
}

module.exports = {
    clickOnLink,
    checkCodeURL,
 }