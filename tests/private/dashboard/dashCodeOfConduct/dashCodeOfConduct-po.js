function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnCodeOfConduct() {
    //  Klik na CodeOfConduct link iz footera
    element(by.linkText('Code of Conduct')).click(); 
    browser.sleep(2000);
}

function checkCodeOfConductUrl() {
    // Provera View Finder marketing URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support/code_of_conduct'), 15000);
}

module.exports = {
    landOnHomePage,
    clickOnCodeOfConduct,
    checkCodeOfConductUrl,
 }