function clickOnSignIn() {
   element(by.className('sign_in')).click();
}

function checkSignInUrl() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://cbancnetwork-edge.auth0.com/login'), 7000);
}

function enterEmail() {
    element(by.name('email')).sendKeys('1@chicago.com');
}

function enterPass() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    element(by.className('auth0-label-submit')).click();
}

function checkLogInUrl() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/membership/dashboard/'), 7000);
}
module.exports = {
    clickOnSignIn,
    checkSignInUrl,
    enterEmail,
    enterPass,
    submit,
    checkLogInUrl
}