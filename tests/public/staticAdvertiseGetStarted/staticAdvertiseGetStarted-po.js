function landOnAdvertiseGetStarted() {
    // dolazak na Certified Cannabis Banking Professional stranu 
    browser.get('https://qa.cbancnetwork.com/advertise/get-started'); 
}

function checkAdvertiseGetStartedTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Get Started Today with CBANC Marketing Solutions'), 7000);
}

function checkTitlesOnPage() {
    // Provera glavnog titla na strani 
    var xxx = element(by.className('top_content'));
    expect(xxx.getText()).toEqual("Want to learn more about CBANC's Marketing Solutions?\nFill in the form below and we will be in touch shortly.");
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

function checkLabelForPhoneField() {
    // Provera Phone labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(4);
    expect(xxx.getText()).toEqual("Phone");
}

function checkLabelForLastFieldInForm() {
    // Provera "How'd you find out about us?"" labele iznad polja 
    var xxx = element.all(by.className('field text_field')).get(5);
    expect(xxx.getText()).toEqual("How'd you find out about us?\n                    Ad\n                    Email\n                    Conference/Event\n                    Search Engine\n                    Referral\n                  ");
}

function enterFirstName(){
   //  Unosenje text u first name field
   element(by.id('first_name')).clear().sendKeys('QA');
}

function enterLastName(){
   //  Unosenje text u last name field
   element(by.id('last_name')).clear().sendKeys('Testing');
}

function enterGmail(){
    //  Unosenje text u email field
    element(by.id('email')).clear().sendKeys('qa@testing.com');
}
 
function enterCompany(){
    //  Unosenje text u company field
    element(by.id('company')).clear().sendKeys('QA Company');
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

function checkICompanyInTheField() {
    // Provera da li se u company polju nalazi company od logovanog usera
    var inputValue = element(by.id('company'));
    expect(inputValue.getAttribute('value')).toEqual('Bank of Chicago');
}

function enterPhone(){
    //  Unosenje numbers u phone field
    element(by.id('phone')).clear().sendKeys('555333');
}

function checkMikeAvatar() {
    // Provera da li se ucitao Majkov avatar
    var xxx = element.all(by.tagName('img')).get(1);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/advertise/get-started/mike_snavely.jpg');
}

function checkTextNextToAvatar() {
    // Provera texta pored majkovog avatara
    var xxx = element(by.className('details'));
    expect(xxx.getText()).toEqual("I look forward to chatting with you!\nMike Snavely - Chief Commercial Officer at CBANC Network");
}

function clickOnContactMeButton(){
    //  Klik na CONTACT ME button
    element(by.className('contact_me')).click();
}

function checkSuccessURLFromProduction() {
    // Provera da li se ucitao Success url u produkciji
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains("https://www.cbancnetwork.com/advertise/get-started?success=true"), 3000);
}

function landOnSuccess() {
    // Dolazak na Success stranu na beti
    browser.get('https://qa.cbancnetwork.com/advertise/get-started?success=true'); 
}

function checkSuccessMessage() {
    // Provera success poruke
    var xxx = element(by.id('lead_success'));
    expect(xxx.getText()).toEqual("×\nThank You for contacting us!\nWe will be in contact with you as soon as possible.");
}

function HoverToOpenUserDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.user_name'))).perform();
    expect(element(by.css('.user_name')).isDisplayed()).toBeTruthy();
}

 function clickOnSignOutLink() {
    //  Klik on Sign out link
    element(by.className('sign_out')).click();
}

module.exports = {
    landOnAdvertiseGetStarted,
    checkAdvertiseGetStartedTitle,
    checkLabelForFirstNameField,
    checkLabelForLastNameField,
    checkLabelForEmailField,
    checkLabelForCompanyField,
    checkLabelForPhoneField,
    checkLabelForLastFieldInForm,
    checkTitlesOnPage,
    enterFirstName,
    enterLastName,
    enterGmail,
    enterCompany,
    enterPhone,
    checkMikeAvatar,
    checkTextNextToAvatar,
    clickOnContactMeButton,
    checkSuccessURLFromProduction,
    landOnSuccess,
    checkSuccessMessage,
    HoverToOpenUserDrop,
    clickOnSignOutLink,
    checkIsFristNameInTheField,
    checkIsLastNameInTheField,
    checkIsEmailInTheField,
    checkICompanyInTheField,
}