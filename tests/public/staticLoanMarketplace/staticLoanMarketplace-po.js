function landOnLoanMarkPage() {
    // Dolazak na Loan Marketplace stranu 
    browser.get('https://qa.cbancnetwork.com/loan-marketplace'); 
    browser.sleep(3000);
}

function openIntercom() {
    //  Otvori Intercom
    element(by.className('intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open')).click();
}

function closeIntercom() {
    //  Zatvori Intercom
    element(by.className('intercom-launcher-frame intercom-cqrjjr e1ur5zlj0')).click();
}

function checkPageTitle() {
    // Provera Page Title-a
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('row center'));
    browser.wait(EC.textToBePresentInElement(c, "Make more loans"), 5000);
}

function checkTopText() {
    // Provera texta na vrhu strane
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('p_block center'));
    browser.wait(EC.textToBePresentInElement(c, "CBANC Loan Marketplace gives you the power to make more loans and boost profits through the largest loan marketplace built specifically for community financial institutions."), 5000);
}

function checkVideo() {
    // Provera videa na strani
    var xxx = element (by.className('wistia_swatch')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://fast.wistia.com/embed/medias/c1pgedth8o/swatch');
    browser.sleep(500);
}

function checkIconScale() {
    // Provera prve ikonice u green section-u
    var xxx = element(by.className('icon')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/loan-marketplace/scale-balance.svg');
    browser.sleep(500);
}

function checkScaleText() {
    // Provera texta ispod prve ikonice u green section-u
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('icon'));
    browser.wait(EC.textToBePresentInElement(c, "Optimize your loan to deposit ratioFund good loans or participate them out to achieve your optimal loan to deposit ratio."), 5000);
}

function checkIconCash() {
    // Provera druge ikonice u green section-u
    var xxx = element.all(by.className('icon')).get(1).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/loan-marketplace/cash-multiple.svg');
    browser.sleep(500);
}

function checkCashText() {
    // Provera texta ispod druge ikonice u green section-u
    var EC = protractor.ExpectedConditions;
    var c = element.all(by.className('icon')).get(1);
    browser.wait(EC.textToBePresentInElement(c, "Earn better returns with lower riskStart earning closer to 9% on your deposits by funding portions of good loans."), 5000);
}

function checkIconPie() {
    // Provera trece ikonice u green section-u
    var xxx = element(by.className('icon three')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/loan-marketplace/chart-pie.svg');
    browser.sleep(500);
}

function checkPieText() {
    // Provera texta ispod trece ikonice u green section-u
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('icon three'));
    browser.wait(EC.textToBePresentInElement(c, "Diversify your loan portfolioCreate the perfect portfolio of loans of all types and locales."), 5000);
}

function checkChartImage() {
    // Provera chart slike
    var xxx = element(by.className('chart_image')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/loan-marketplace/percentages.svg');
    browser.sleep(500);
}

function checkChartText() {
    // Provera Title-a uz chart sliku  
    var xxx = element(by.className('chart_text_box'));
    expect(xxx.getText()).toEqual('Minimum committments,\nmaximum diversification\nTake small slices of several loans to create your ideal portfolio and limit your risk.\nFund a loan with a low minimum committment and choose from a variety of loan types and locales.');
    browser.sleep(500);
}

function checkBottomText() {
    // Provera texta na dnu stranice
    var EC = protractor.ExpectedConditions;
    var c = element(by.className('bottom_section row center'));
    browser.wait(EC.textToBePresentInElement(c, "Ready to make more loans?Click the button below, fill out the form, and we'll be in touch shortly."), 5000);
}

function checkBottomButton() {
    // Provera button-a na dnu stranice
    var EC = protractor.ExpectedConditions;
    var c = element.all(by.className('btn-large')).get(1);
    browser.wait(EC.textToBePresentInElement(c, "I'M INTERESTED"), 5000);
}

function clickOnButton() {
    // Klik na LEARN MORE button
    element(by.className('btn-large')).click();
    browser.sleep(500);
}

function checkLabelForFirstNameField() {
    // Provera First Name labele iznad polja 
    var xxx = element(by.className('field text_field'));
    expect(xxx.getText()).toEqual("First Name");
}

function checkLabelForLastNameField() {
    // Provera Last Name labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(1);
    expect(xxx.getText()).toEqual("Last Name");
}

function checkLabelForEmailField() {
    // Provera Email labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(2);
    expect(xxx.getText()).toEqual("Email");
}

function checkLabelForCompanyField() {
    // Provera Company labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(3);
    expect(xxx.getText()).toEqual("Company");
}

function checkLabelForStateField() {
    // Provera State labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(4);
    expect(xxx.getText()).toEqual("State");
}

function checkLabelForPhoneField() {
    // Provera Phone labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(5);
    expect(xxx.getText()).toEqual("Phone");
}

function enterFirstName(){
    //  Unosenje texta u first name field
    element(by.id('first_name')).clear().sendKeys('QA');
}
 
function enterLastName(){
    //  Unosenje texta u last name field
    element(by.id('last_name')).clear().sendKeys('Testing');
}
 
function enterEmail(){
     //  Unosenje texta u email field
     element(by.id('email')).clear().sendKeys('qa@testing.com');
}
  
function enterCompany(){
     //  Unosenje texta u company field
     element(by.id('company')).clear().sendKeys('QA Company');
}

function enterState(){
    //  Unosenje texta u state field
    element(by.id('state')).clear().sendKeys('Texas');
}

function enterPhone(){
    //  Unosenje broja u phone field
    element(by.id('phone')).clear().sendKeys('5125834570');
    browser.sleep(2000);
}

function clickOnBuyer(){
    //  Klik na Buyer radio button
    element.all(by.tagName('label')).get(7).click();
    browser.sleep(1000);
}

function clickOnSubmitButton(){
    //  Klik na Submit button
    element(by.buttonText('SUBMIT')).click();
    browser.sleep(1000);
}

function checkSuccessURLOnProduction() {
    // Provera da li se ucitao Success url u produkciji
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains("https://www.cbancnetwork.com/loan-marketplace?success=true"), 3000);
}

function checkSuccessMessage() {
    // Provera success poruke na produkciji
    var xxx = element(by.id('lead_success'));
    expect(xxx.getText()).toEqual("×\nThank You!\nWe received your info and we'll be in touch soon.");
}

function landOnQaSuccessPage() {
    // Dolazak na QA success stranu 
    browser.get('https://qa.cbancnetwork.com/loan-marketplace?success=true'); 
    browser.sleep(3000);
}

function checkIsFristNameInTheField() {
    // Provera da li se u First name polju nalazi ime od logovanog usera
    var inputValue = element(by.id('first_name'));
    expect(inputValue.getAttribute('value')).toEqual('Chicago Alberto');
}

function checkIsLastNameInTheField() {
    // Provera da li se u Last name polju nalazi ime od logovanog usera
    var inputValue = element(by.id('last_name'));
    expect(inputValue.getAttribute('value')).toEqual('Diaz FI');
}

function checkIsEmailInTheField() {
    // Provera da li se u Email polju nalazi email od logovanog usera
    var inputValue = element(by.id('email'));
    expect(inputValue.getAttribute('value')).toEqual('1@chicago.com');
}

function checkIsCompanyInTheField() {
    // Provera da li se u company polju nalazi company od logovanog usera
    var inputValue = element(by.id('company'));
    expect(inputValue.getAttribute('value')).toEqual('Bank of Chicago');
}

function checkIsStateInTheField() {
    // Provera da li se u company polju nalazi company od logovanog usera
    var inputValue = element(by.id('state'));
    expect(inputValue.getAttribute('value')).toEqual('IL');
}

function clickOnSeller(){
    //  Klik na Seller radio button
    element.all(by.tagName('label')).get(8).click();
    browser.sleep(1000);
}

module.exports = {
    landOnLoanMarkPage,
    openIntercom,
    closeIntercom,
    checkPageTitle,
    checkTopText,
    checkVideo,
    checkIconScale,
    checkScaleText,
    checkIconCash,
    checkCashText,
    checkIconPie,
    checkPieText,
    checkChartImage,
    checkChartText,
    checkBottomText,
    checkBottomButton,
    clickOnButton,
    checkLabelForFirstNameField,
    checkLabelForLastNameField,
    checkLabelForEmailField,
    checkLabelForCompanyField,
    checkLabelForStateField,
    checkLabelForPhoneField,
    enterFirstName,
    enterLastName,
    enterEmail,
    enterCompany,
    enterState,
    enterPhone,
    clickOnBuyer,
    clickOnSubmitButton,
    checkSuccessURLOnProduction,
    checkSuccessMessage,
    landOnQaSuccessPage,
    checkIsFristNameInTheField,
    checkIsLastNameInTheField,
    checkIsEmailInTheField,
    checkIsCompanyInTheField,
    checkIsStateInTheField,
    clickOnSeller,

}