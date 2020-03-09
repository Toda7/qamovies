function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com');
    browser.sleep(3000);
}

function clickOnUserMenu() {
    //  Klik na User meni
    element(by.className('user_name')).click();
}

function clickOnSignOut() {
    //  Klik na Sign Out
    element(by.className('sign_out')).click();
}

function clickOnSignIn() {
    element(by.className('sign_in')).click();
    browser.sleep(3000)
}

function enterEmail() {
    element(by.name('email')).sendKeys('mihojoinlog1@boston.com');
}

function enterPass() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    element(by.className('auth0-label-submit')).click();
    browser.sleep(3000)
}

function landOnReputationPage() {
    // Dolazak na Reputation timeline stranu
    browser.get('https://qa.cbancnetwork.com/community/reputation');
    browser.sleep(3000);
}

function checkJoinLog() {
    // Provera log za thankovani document
    var xxx = element(by.className('collection-item avatar'));
    expect(xxx.getText()).toEqual('miho za log\nThank you for joining CBANC Network');
}

function checkIncreseScoreMsg() {
    // Provera poruku na dnu logova
    var xxx = element(by.className('card-content'));
    expect(xxx.getText()).toEqual("You've reached the end. Increase your reputation score.");
}

module.exports = {

    landOnHomePage,
    clickOnUserMenu,
    clickOnSignOut,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
    landOnReputationPage,
    checkJoinLog,
    checkIncreseScoreMsg,

}