function landOnCxoPage() {
    // Dolazak na CXO stranu
    browser.get('https://qa.cbancnetwork.com/cxo');
}

function openIntercom() {
    //  Otvori Intercom
    element(by.className('intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open')).click();
 }

 function closeIntercom() {
    //  Zatvori Intercom
    element(by.className('intercom-launcher-frame intercom-cqrjjr e1ur5zlj0')).click();
 }

function checkHeroText() {
    // Provera da li se ucitao text u Hero sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('hero_content'));
    browser.wait(EC.textToBePresentInElement(c, "Join your C-suite peers inside CBANC.Get free access to discussions and resources in a private, secure forum—for banking executives only!"), 5000);
}

function checkInputPlaceholder() {
    // Provera placeholdera u input polju
    var xxx = element(by.id('email_textbox'));
    expect(xxx.getAttribute('placeholder')).toEqual('enter your email address');
}

function checkCtaButtonText() {
    // Provera texta u cta dugmetu
    var xxx = element(by.id('top_email'));
    expect(xxx.getText()).toEqual('REQUEST TO JOIN');
}

function checkLeftSectionText() {
    // Provera da li se ucitao text u levoj sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('left_section'));
    browser.wait(EC.textToBePresentInElement(c, "What's CBANC?We’re the largest online network of verified banking and credit union professionals, comprised of 87% of the U.S.’s banks and 38% of credit unions. Every day, more than 8,600+ financial institutions come to CBANC to get their toughest questions answered on hundreds of topics."), 5000);
}

function checkRighSectionText() {
    // Provera da li se ucitao text u desnoj sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('right_section'));
    browser.wait(EC.textToBePresentInElement(c, "Collaborate with fellow CxOs.Connect exclusively with fellow executives to discuss ideas and challenges facing your FI—for free! Simply sign up with your email address to start leveraging the power of the CBANC network."), 5000);
}

function landOnHomePage() {
    // Dolazak na Home page
    browser.get('https://qa.cbancnetwork.com');
}

function clickOnSignIn() {
    // Klik na Sign In dugme
    element(by.className('sign_in')).click();
}

function enterEmail() {
    // Unesi 1@chicago.com email adresu
    element(by.name('email')).sendKeys('1@chicago.com');
}

function enterPass() {
    // Unesi password
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    // Klik na Log In dugme
    element(by.className('auth0-label-submit')).click();
}

function checkInputFieldValue() {
    // Provera texta u email input polju
    var inputValue = element(by.id('email_textbox'));
    expect(inputValue.getAttribute('value')).toEqual('1@chicago.com');
}

function clickCtaButton() {
    //  Klik na CTA dugme
    element(by.id('top_email')).click();
}

function checkThankYouText() {
    // Provera Thank You texta
    var xxx = element(by.id('thank_you'));
    expect(xxx.getText()).toEqual('Thanks, we’ll send an email invitation shortly');
}

function clickOnUserMenu() {
    //  Klik na User meni
    element(by.className('user_name')).click();
}

function clickOnSignOut() {
    //  Klik na Sign Out
    element(by.className('sign_out')).click();
}

module.exports = {
    landOnCxoPage,
    openIntercom,
    closeIntercom,
    checkHeroText,
    checkInputPlaceholder,
    checkCtaButtonText,
    checkLeftSectionText,
    checkRighSectionText,
    landOnHomePage,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
    checkInputFieldValue,
    clickCtaButton,
    checkThankYouText,
    clickOnUserMenu,
    clickOnSignOut,
}