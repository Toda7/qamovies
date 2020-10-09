function landOnAft() {
    // Dolazak na AFT stranu
    browser.get('https://qa.cbancnetwork.com/aft');
}

function checkHeroText() {
    // Provera da li se ucitao text u Hero sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('hero_text'));
    browser.wait(EC.textToBePresentInElement(c, "Join 100+ AFT members inside CBANC.Get access to discussions, resources and more — available exclusively for AFT members!"), 5000);
}

function checkFirstInputPlaceholder() {
    // Provera placeholdera u prvom input polju
    var xxx = element(by.id('email_one'));
    expect(xxx.getAttribute('placeholder')).toEqual('enter your email address');
}

function checkPublicFirstCtaButtonText() {
    // Provera texta u prvom cta dugmetu
    var xxx = element(by.id('top_cta'));
    expect(xxx.getText()).toEqual('REQUEST TO JOIN');
}

function checkHeroAftLogo() {
    // Provera da li se ucitao AFT logo u Hero sekciji
    var xxx = element(by.className('logo_container')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/aft/logo.jpg');
}

function checkAboutSectionText() {
    // Provera texta u About sekciji
    var xxx = element(by.className('about_section'));
    expect(xxx.getText()).toEqual('About the Partnership');
}

function checkLeftText() {
    // Provera da li se ucitao text u levoj About sekciji
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('left_text'));
    browser.wait(EC.textToBePresentInElement(c, "What's CBANC?We’re the largest online community for the banking industry. Every day, 7,000 FIs come to CBANC to get their toughest questions answered…by their peers and vendors like you!See what's in store for AFT members.We’ve partnered up with AFT to provide a private, secure place where association members can connect and collaborate year-round. Keep the momentum going following the Summit by instantly accessing conversations and shared resources with your industry peers. Not only that, AFT members also receive the perks of joining the broader CBANC network."), 5000);
}

function checkFirstQuoteText() {
    // Provera texta u prvom citatu
    var xxx = element.all(by.className('quote')).get(0);
    expect(xxx.getText()).toEqual('“The AFT board is enthusiastic about the partnership with CBANC as a means to grow our member base and facilitate deeper discussions throughout the year.”');
}

function checkScottMillsAvatar() {
    // Provera da li se ucitao avatar za Scott Millsa
    var xxx = element.all(by.className('avatar_labels')).get(0).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/aft/scott-mills.png');
}

function checkScottMillsSignature() {
    // Provera da li se ucitao signature za Scott Millsa
    var EC = protractor.ExpectedConditions;
    var c = element.all(by.className('label')).get(0);
    browser.wait(EC.textToBePresentInElement(c, "Scott MillsDirector & Chairman, Membership and Marketing CommitteeAFT"), 5000);
}

function checkSecondQuoteText() {
    // Provera texta u drugom citatu
    var xxx = element.all(by.className('quote')).get(1);
    expect(xxx.getText()).toEqual('“CBANC is thrilled to help grow AFT’s member base and provide a place for AFT members to connect throughout the year while simultaneously growing our network.”');
}

function checkBryanKoontzAvatar() {
    // Provera da li se ucitao avatar za Brajana Kunca
    var xxx = element.all(by.className('avatar_labels')).get(1).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/aft/bryan.jpg');
}

function checkBryanKoontzSignature() {
    // Provera da li se ucitao signature za Brajana Kunca
    var EC = protractor.ExpectedConditions;
    var c = element.all(by.className('label')).get(1);
    browser.wait(EC.textToBePresentInElement(c, "Bryan KoontzCEOCBANC Network"), 5000);
}

function checkSecondInputPlaceholder() {
    // Provera placeholdera u drugom input polju
    var xxx = element(by.id('email_two'));
    expect(xxx.getAttribute('placeholder')).toEqual('enter your email address');
}

function checkPublicSecondCtaButtonText() {
    // Provera texta u drugom cta dugmetu
    var xxx = element(by.id('bottom_cta'));
    expect(xxx.getText()).toEqual('REQUEST TO JOIN');
}

function enterEmailAddressInFirstInputField() {
    //  Unesi email adresu u prvo input polje
    element(by.id('email_one')).clear().sendKeys('test@qa.com');
}

function clickFirstCtaButton() {
    //  Klik na prvo CTA dugme
    element(by.id('top_cta')).click();
}

function checkThankYouTextOne() {
    // Provera gornjeg Thank You texta
    var xxx = element(by.id('thank_you'));
    expect(xxx.getText()).toEqual('Thanks, we’ll send an email invitation shortly');
}

function enterEmailAddressInSecondInputField() {
    //  Unesi email adresu u drugo input polje
    element(by.id('email_two')).clear().sendKeys('test@qa.com');
}

function clickSecondCtaButton() {
    //  Klik na drugo CTA dugme
    element(by.id('bottom_cta')).click();
}

function checkThankYouTextTwo() {
    // Provera donjeg Thank You texta
    var xxx = element(by.id('thank_you_two'));
    expect(xxx.getText()).toEqual('Thanks, we’ll send an email invitation shortly');
}

function openIntercom() {
    //  Otvori Intercom
    element(by.className('intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open')).click();
}

function closeIntercom() {
    //  Zatvori Intercom
    element(by.className('intercom-launcher-frame intercom-cqrjjr e1ur5zlj0')).click();
}

function landOnHomePage() {
    // Dolazak na Home page
    browser.get('https://qa.cbancnetwork.com');
}

function clickOnSignIn() {
    // Klik na Sign In dugme
    element(by.className('sign_in')).click();
}

function enterPhoenixEmail() {
    // Unesi 1@phoenix.com email adresu
    element(by.name('email')).sendKeys('1@phoenix.com');
}

function enterPhoenixPass() {
    // Unesi password
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    // Klik na Log In dugme
    element(by.className('auth0-label-submit')).click();
}

function landOnAft() {
    // Dolazak na AFT stranu
    browser.get('https://qa.cbancnetwork.com/aft');
}

function checkFirstInputFieldValue() {
    // Provera texta u prvom email input polju
    var inputValue = element(by.id('email_one'));
    expect(inputValue.getAttribute('value')).toEqual('1@phoenix.com');
}

function clickFirstCtaButton() {
    //  Klik na prvo CTA dugme
    element(by.id('top_cta')).click();
}

function checkThankYouTextOne() {
    // Provera gornjeg Thank You texta
    var xxx = element(by.id('thank_you'));
    expect(xxx.getText()).toEqual('Thanks, we’ll send an email invitation shortly');
}

function checkSecondInputFieldValue() {
    // Provera texta u drugom email input polju
    var inputValue = element(by.id('email_two'));
    expect(inputValue.getAttribute('value')).toEqual('1@phoenix.com');
}

function clickSecondCtaButton() {
    //  Klik na drugo CTA dugme
    element(by.id('bottom_cta')).click();
}

function checkThankYouTextTwo() {
    // Provera donjeg Thank You texta
    var xxx = element(by.id('thank_you_two'));
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

function landOnHomePage() {
    // Dolazak na Home page
    browser.get('https://qa.cbancnetwork.com');
}

function clickOnSignIn() {
    // Klik na Sign In dugme
    element(by.className('sign_in')).click();
}

function enterEmail() {
    // Unesi email adresu
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

function landOnAft() {
    // Dolazak na AFT stranu
    browser.get('https://qa.cbancnetwork.com/aft');
}

function checkFirstCtaButtonText() {
    // Provera texta u prvom cta dugmetu
    var xxx = element(by.id('top_cta'));
    expect(xxx.getText()).toEqual('JOIN THE DISCUSSION ON CBANC');
}

function clickFirstCtaButton() {
    //  Klik na prvo CTA dugme
    element(by.id('top_cta')).click();
}

function checkAftGroupURL() {
    // Provera da li se ucitao URL za AFT Group stranu
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/groups/view/1bfdce90-7151-11e6-abb8-7831c1baaeec'), 5000);
}

function checkSecondCtaButtonText() {
    // Provera texta u drugom cta dugmetu
    var xxx = element(by.id('bottom_cta'));
    expect(xxx.getText()).toEqual('JOIN THE DISCUSSION ON CBANC');
}

function clickSecondCtaButton() {
    //  Klik na drugo CTA dugme
    element(by.id('bottom_cta')).click();
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
    landOnAft,
    checkHeroText,
    checkFirstInputPlaceholder,
    checkPublicFirstCtaButtonText,
    checkHeroAftLogo,
    checkAboutSectionText,
    checkLeftText,
    checkFirstQuoteText,
    checkScottMillsAvatar,
    checkScottMillsSignature,
    checkSecondQuoteText,
    checkBryanKoontzAvatar,
    checkBryanKoontzSignature,
    checkSecondInputPlaceholder,
    checkPublicSecondCtaButtonText,
    enterEmailAddressInFirstInputField,
    clickFirstCtaButton,
    checkThankYouTextOne,
    enterEmailAddressInSecondInputField,
    clickSecondCtaButton,
    checkThankYouTextTwo,
    openIntercom,
    closeIntercom,
    landOnHomePage,
    clickOnSignIn,
    enterPhoenixEmail,
    enterPhoenixPass,
    submit,
    landOnAft,
    checkFirstInputFieldValue,
    clickFirstCtaButton,
    checkThankYouTextOne,
    checkSecondInputFieldValue,
    clickSecondCtaButton,
    checkThankYouTextTwo,
    clickOnUserMenu,
    clickOnSignOut,
    landOnHomePage,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
    landOnAft,
    checkFirstCtaButtonText,
    clickFirstCtaButton,
    checkAftGroupURL,
    checkSecondCtaButtonText,
    clickSecondCtaButton,
    clickOnUserMenu,
    clickOnSignOut,
}