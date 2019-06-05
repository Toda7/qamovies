function clickOnLink() {
    //  Klik na About link iz footera
    element(by.partialLinkText('About')).click(); 
    browser.sleep(2000);
}

function checkAboutURL() {
    // Provera About URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/abbout'), 5000);
}

module.exports = {
    clickOnLink,
    checkAboutURL,
 }