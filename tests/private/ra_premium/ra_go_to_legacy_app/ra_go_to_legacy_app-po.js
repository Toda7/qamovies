function clickOnLink() {
    //  Klik na lendwell link iz drop menu
    element(by.className('card-content flow-text center-align')).click();
    browser.sleep(2000);
 }
 function checkRaLegacyAppURL() {
   // Provera da li se ucitao RA Legacy App URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlIs('https://qa.cbancnetwork.com/risk_assessment/home'), 5000);
   browser.sleep(2000);
}

 module.exports = {
    clickOnLink,
    checkRaLegacyAppURL,
 }