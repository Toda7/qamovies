function clickOnDMLink() {
    // Klik on DM link
    element(by.className('secondary-content employee_dm')).click();
}

function checkDmURL() {
    // Provera da li se ucitao direct message URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/dm/compose?person_key=a1b429df-93bd-4c23-a8e1-50371057b505'), 5000);
 }

 module.exports = {
    clickOnDMLink,
    checkDmURL,
}