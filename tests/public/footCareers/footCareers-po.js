function clickOnLink() {
    //  Klik na Careers link iz footera
    element(by.linkText('Careers')).click(); 
    browser.sleep(2000);
}

function checkCareersURL() {
    // Provera Careers URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/careers'), 7000);
}

module.exports = {
    clickOnLink,
    checkCareersURL,
 }