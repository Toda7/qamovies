function checkUserName() {
    // Provera sadrzaj kartice za prvog usera sa liste
    var xxx = element(by.className('collection-item avatar'));
    expect(xxx.getText()).toEqual('Sima Simoski\nCBANC Network\nStalker | in group since Aug 20, 2018\nchat' );
}

function clickOnUserName() {
    // klik na user name
    element(by.partialLinkText('Sima Simoski')).click();
}

function checkUserProfileURL() {
    // Provera da li je dobar URL za User Profile page
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/users/view/18cbe542-b2dc-4c9c-9217-4f356147e9ac'), 7000);
 }

 function clickOnUserBank() {
    // klik na ime banke
element(by.partialLinkText('CBANC Network')).click();

}

function checkUserBankURL() {
    // Provera da li je dobar URL za Userovu firmu
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/associations/view/bcee7945089f13b76ce5d9b9e59d5a73'), 7000);
 }

module.exports = {
    checkUserName,
    clickOnUserName,
    checkUserProfileURL,
    checkUserBankURL,
    clickOnUserBank,
}