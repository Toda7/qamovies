function clickOnLink() {
    // Klik na Contact link iz footera
    element(by.linkText('Contact')).click();
    browser.sleep(2000);
}

function checkContactURL() {
    //Provera Contact URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support'), 5000);
}

module.exports = {
    clickOnLink,
    checkContactURL,
}