function clickOnShareButton(){
    // Klik on Share button
    element(by.className('share_link')).click();
}

function checkTitleInShareForm(){
// Provera da li se Share title ucitao u formi
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('.card .card-content .card-title'), 'Share with your Colleagues'), 5000);
}

function enterInvalidEmailAddress() {
    // Unosenje invalid email adrese
    element.all(by.css('.input-field input[type=email]')).get(0).sendKeys('atqa.share.doc@mail.com321');
}

function checkInvalidEmailAddress(){
    // Provera snackbar poruke za invalid email
    var foo = element(by.className('snackbar sb_message'));
    expect(foo.getText()).toEqual('Please correct one or more invalid email addresses.');
}  

function clearTheField(){
    // Brisanje texta iz polja
    var foo = element(by.className('snackbar sb_message'));
    element.all(by.css('.input-field input[type=email]')).get(0).clear();
}  

function enterEmailAddress() {
    // Unosenje email adrese
    element.all(by.css('.input-field input[type=email]')).get(0).clear().sendKeys('atqa.share.doc@mail.com');
}

function enter2EmailAddress() {
    // Unosenje druge email adrese
    element.all(by.css('.input-field input[type=email]')).get(1).sendKeys('atqa.share.doc2@mail.com');
}

function clickOnAddAnotherLink(){
    // Klik on + Add another email link
    element(by.css('.documents .background_overlay .emails .add_link')).click();
}

function enter3EmailAddress() {
    // Unosenje trece email adrese
    element.all(by.css('.input-field input[type=email]')).get(3).sendKeys('atqa.share.doc3@mail.com');
}

function clickOnSendButton() {
    //  Klik na Send dugme
    element(by.className('card contact_form')).all(by.className('btn-flat right')).get(0).click();
    browser.sleep(1000);
 }
 
function checkSuccess(){
    // Provera da li je uspesno sharovan document
    var foo = element(by.className('snackbar sb_message'));
    expect(foo.getText()).toEqual('Successfully shared!');
}  

 module.exports = {
    clickOnShareButton,
    checkTitleInShareForm,
    enterEmailAddress,
    enter2EmailAddress,
    enter3EmailAddress,
    clickOnAddAnotherLink,
    clickOnSendButton,
    checkSuccess,
    enterInvalidEmailAddress,
    checkInvalidEmailAddress,
    clearTheField,
}