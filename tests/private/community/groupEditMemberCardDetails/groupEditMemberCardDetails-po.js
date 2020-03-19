function clickOnUserName() {
    // klik na user name
    element(by.partialLinkText('Zoran Radmilovic')).click();
}

function checkUserProfileURL() {
    // Provera da li je dobar URL za User Profile page
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/users/view/cbff5667-1260-43c4-9741-0648ea6ea792'), 5000);
 }

 function clickOnUserBank() {
     // klik na userovu banku
     element(by.partialLinkText('Bank of Detroit CU')).click();
 }

 function checkUserBankURL() {
    // Provera da li je dobar URL za Banku usera
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/fis/view/90e52cd6-6cfa-498d-b356-f230b8d43a56'), 5000);
 }

 module.exports = {
    clickOnUserName,
    checkUserProfileURL,
    clickOnUserBank,
    checkUserBankURL,
 }