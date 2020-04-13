function landOnForYouPage() {
    // Dolazak na For You
    browser.get('https://qa.cbancnetwork.com/community/home?filter=home&tab=subscribed'); 
}

function landOnHomePage() {
    // Dolazak na Home stranu
    browser.get('https://qa.cbancnetwork.com/'); 
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
    element(by.name('email')).sendKeys('discover@austin.com');
}

function enterPass() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    element(by.className('auth0-label-submit')).click();
    browser.sleep(3000)
}

function checkNoDisc(){
    var EC = protractor.ExpectedConditions;
    // Provera da nema diskusija na Subscribed tabu
    browser.wait(EC.textToBePresentInElement($('.card-content'), "Looks like you're not subscribed to any discussions. Once you subscribe, you'll be able to find them here."), 7000);
    browser.sleep(2000);
}

function landOnFiDisc() {
    // Dolazak na Diskusiju objavljenu u Fi grupi 
    browser.get('https://qa.cbancnetwork.com/community/discussions/view/0dfe829c-c4fc-49f3-8c43-7178286ce0e7?filter=home'); 
}

function clickOnNotifications() {
    //  Klik na Notifications link
    element(by.className('notifications')).click();
}

function checkThereIsDisc(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se diskusija pojavila
    browser.wait(EC.textToBePresentInElement($('.title'), 'Voyage 1'), 7000);
    browser.sleep(2000);
}

function enterChicagoEmail() {
    element(by.name('email')).sendKeys('1@chicago.com');
}

function checkLatestTab() {
    //Provera Latest taba
    var xxx = element.all(by.className('btn-flat')).get(0);
    expect(xxx.getText()).toEqual('LATEST');
}

function checkSubscribedTab() {
    //Provera Subscribed taba
    var xxx = element.all(by.className('btn-flat')).get(1);
    expect(xxx.getText()).toEqual('SUBSCRIBED');
}

module.exports = {
    landOnForYouPage,
    clickOnUserMenu,
    clickOnSignOut,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
    checkNoDisc,
    landOnFiDisc,
    clickOnNotifications,
    checkThereIsDisc,
    landOnHomePage,
    enterChicagoEmail,
    checkLatestTab,
    checkSubscribedTab,
}