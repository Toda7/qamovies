function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}
function clickOnSignIn() {
   element(by.className('sign_in')).click();
   browser.sleep(2000);
}

function enterEmail() {
    element(by.name('email')).sendKeys('mpejic@cbancnetwork.com');
}

function enterPass() {
    element(by.name('password')).clear().sendKeys('test1234');
    browser.sleep(2000);
}

function submit() {
    element(by.className('auth0-label-submit')).click();
    browser.sleep(2000);
}

module.exports = {
    landOnHomePage,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
}