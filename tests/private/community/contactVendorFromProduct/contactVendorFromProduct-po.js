function clickOnContactVendorButton() {
    // Klik on CONTACT VENDOR button
    element(by.buttonText('Contact Vendor')).click();
}

function checkContactVendorTitle() {
    // Provera da li se ucitao Contact Vendor title
    var xxx = element.all(by.className('card-title')).get(1);
    expect(xxx.getText()).toEqual('Contact Vendor');
}

function checkDescriotionOnPage() {
    // Provera da li se ucitao description on page
    var xxx = element.all(by.tagName('p')).get(2);
    expect(xxx.getText()).toEqual("When you fill out this contact form, we'll pass along your name, email, title/job function, and FI name to Vendor Mandrill. Please include details about the nature of your inquiry, e.g. product information, demo request, etc.");
}


function checkPlaceholderInField() {
    // Provera da li se ucitao placeholder in message field
    var xxx = element(by.className('input-field inquiry_details'));
    expect(xxx.getText()).toEqual('Your message');
}

function checkSendButton() {
    // Provera da li se ucitao SEND button
    var xxx = element.all(by.className('btn-flat right')).get(0);
    expect(xxx.getText()).toEqual('SEND');
}

function checkCancelButton() {
    // Provera da li se ucitao CANCEL button
    var xxx = element.all(by.className('btn-flat right')).get(1);
    expect(xxx.getText()).toEqual('CANCEL');
}

function enterMessageInField() {
    // Unosenje texta u polje za poruku
    element(by.css('.product .contact_form .input-field textarea')).sendKeys('My Message For Test');
}

function clickOnSendButton() {
    // Klik na SEND button
    element(by.className('btn-flat right')).click();
}

function checkSnackbarMessageForSendMessageToVendor(){
    // Provera snackbar poruke za send message to vendor
    var foo = element(by.css('.snackbar.sb_message'));
    expect(foo.getText()).toEqual('Message sent.');
} 

module.exports = {
    clickOnContactVendorButton,
    checkContactVendorTitle,
    checkDescriotionOnPage,
    checkPlaceholderInField,
    checkSendButton,
    checkCancelButton,
    enterMessageInField,
    clickOnSendButton,
    checkSnackbarMessageForSendMessageToVendor,
}