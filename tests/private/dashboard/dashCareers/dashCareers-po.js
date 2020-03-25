function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnCareers() {
    //  Klik na Careers link iz footera
    element(by.linkText('Careers')).click(); 
    browser.sleep(2000);
}

function checkPageTitle()  {
    // Proverava da li se ucitao Home title 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleIs('Careers | CBANC'), 7000);
}

function checkCareersUrl() {
    // Provera Careers URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/careers'), 7000);
}

module.exports = {
    landOnHomePage,
    clickOnCareers,
    checkCareersUrl,
    checkPageTitle,
 }