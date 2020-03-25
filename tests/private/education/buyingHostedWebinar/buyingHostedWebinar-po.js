function landOnEducationPage() {
    // Dolazak na admin stranu
    browser.get('https://qa.cbancnetwork.com/education/webinars/calendar'); 
    browser.sleep(2000);
}
function enterTextInSearchField() {
    // Unosenje texta u search field
    element(by.name('search_term')).sendKeys('New hosted webinar');
}

function clickOnSearchOption() {
    // Klik on search option
    element(by.className('cta')).click();
    browser.sleep(2000);
 }

function clickOnFirstWebinar() {
    // Klik on first webinar on the list of search 
    element(by.className('webinar_item')).click();
    browser.sleep(2000);
 }

function checkResourcesSection(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao resources section
    browser.wait(EC.textToBePresentInElement($('.section_title'), 'RESOURCES'), 7000);
}   

function checkSpeakersSection(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao speakers section
    browser.wait(EC.textToBePresentInElement($('.section.speakers'), 'SPEAKERS'), 7000);
}   

function clickOnReserveYourSeatButton() {
    // Klik on reserve your seat button
    element(by.className('reserve')).click();
    browser.sleep(2000);
 }

function enterTextInFirstNameField() {
    //  Enter first name of attendee
    element(by.name('first_name')).sendKeys('QA');
}

function enterTextInLastNameField() {
    //  Enter last name of attendee
    element(by.name('last_name')).sendKeys('QA');
}

function enterTextInEmailField() {
    //  Enter email of attendee
    element(by.name('email')).sendKeys('qa@qa.com');
}

function clickOnAddAttendeeButton() {
    //  Klik on Add Attendee button
    element(by.buttonText('Add Attendee')).click();
    browser.sleep(2000);
}

function clickOnReserveMySpotButton() {
    //  Klik on Reserve My Spot button
    element(by.buttonText('Reserve My Spot')).click();
    browser.sleep(3000);
}

function clickOnAgreePayButton() {
    //  Klik on Agree & Pay button
    element(by.buttonText('Agree & Pay $99')).click();
    browser.sleep(3000);
}

function checkFirstErrorMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila error poruka
    browser.wait(EC.textToBePresentInElement($('.error'), 'Card Number is invalid.'), 7000);
}   

function enterNumbersInCreditCardField() {
    //  Enter numbers in credit card field
    element(by.className('stripe_cc_form')).all(by.tagName('input')).get(0).sendKeys('4111111111111111');
    browser.sleep(2000);
}
function enterNameOfCreditCard() {
    //  Enter name of credit card field
    element(by.className('stripe_cc_form')).all(by.tagName('input')).get(1).sendKeys('Test');
    browser.sleep(2000);
}

function checkSecondErrorMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila druga error poruka
    browser.wait(EC.textToBePresentInElement($('.error'), 'Expiration Month is invalid. Must be between 1-12.'), 7000);
}   

function enterNumbersInMonthField() {
    //  Enter numbers in month field
    element(by.className('exp_month ')).sendKeys('01');
    browser.sleep(2000);
}

function checkThirdErrorMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila treca error poruka
    browser.wait(EC.textToBePresentInElement($('.error'), 'Expiration Year is invalid. Must be 4 digits.'), 7000);
}   

function enterNumbersInYearField() {
    //  Enter numbers in year field
    element(by.className('exp_year ')).sendKeys('2022');
    browser.sleep(2000);
}

function checkFourthErrorMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila treca error poruka
    browser.wait(EC.textToBePresentInElement($('.error'), 'CVC is invalid.'), 7000);
}   

function enterNumbersInCVCField() {
    //  Enter numbers in CVC field
    element(by.className('cvc ')).sendKeys('123');
    browser.sleep(2000);
}

function checkFourthErrorMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila treca error poruka
    browser.wait(EC.textToBePresentInElement($('.error'), 'CVC is invalid.'), 7000);
}   

function checkErrorMessageForZipCode(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila treca error poruka
    browser.wait(EC.textToBePresentInElement($('.error'), 'Zip Code is invalid. Must be 5 digits.'), 7000);
}   

function enterNumbersInZipField() {
    //  Enter numbers in zip code field
    element(by.className('field text_field zip')).all(by.tagName('input')).get(0).sendKeys('12345');

    browser.sleep(2000);
}

function checkPurchaseMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila treca error poruka
    browser.wait(EC.textToBePresentInElement($('.buy'), 'This webinar has been purchased.'), 7000);
}   

function HoverToOpenUserDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.user_name'))).perform();
    expect(element(by.css('.user_name')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
 }

 function clickOnSignOutLink() {
    //  Klik on Sign out link
    element(by.className('sign_out')).click();
    browser.sleep(2000);
}
function clickOnSignIn() {
    element(by.className('sign_in')).click();
    browser.sleep(2000);
} 

function enterEmail() {
    element(by.name('email')).sendKeys('1@chicago.com');
}

function enterPass() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    element(by.className('auth0-label-submit')).click();
    browser.sleep(2000);
}

module.exports = {
    landOnEducationPage,
    enterTextInSearchField,
    clickOnSearchOption,
    clickOnFirstWebinar,
    checkResourcesSection,
    checkSpeakersSection,
    clickOnReserveYourSeatButton,
    enterTextInFirstNameField,
    enterTextInLastNameField,
    enterTextInEmailField,
    clickOnAddAttendeeButton,
    clickOnReserveMySpotButton,
    clickOnAgreePayButton,
    checkFirstErrorMessage,
    enterNumbersInCreditCardField,
    enterNameOfCreditCard,
    checkSecondErrorMessage,
    enterNumbersInMonthField,
    checkThirdErrorMessage,
    enterNumbersInYearField,
    checkFourthErrorMessage,
    enterNumbersInCVCField,
    checkErrorMessageForZipCode,
    enterNumbersInZipField,
    checkPurchaseMessage,
    HoverToOpenUserDrop,
    clickOnSignOutLink,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
}
