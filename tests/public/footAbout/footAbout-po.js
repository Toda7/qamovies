function clickOnLink() {
    //  Klik na About link iz footera
    element(by.partialLinkText('About')).click(); 
    browser.sleep(2000);
}

function checkAboutURL() {
    // Provera About URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/about'), 7000);
}

module.exports = {
    clickOnLink,
    checkAboutURL,
 }