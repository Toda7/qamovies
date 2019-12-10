function clickOnVendorName() {
    // Klik na ime vendora
    element(by.css('.card-title', 'Vendor Pet Taxi')).click(); 
    browser.sleep(1000);
}

function clickOnContactButton() {
    //  Klikni na Contact dugme
    element(by.className('contact_cta', 'Contact')).click();
    browser.sleep(5000);
}

function enterMessageText() {
    // Unos texta poruke
    element(by.id('inquiry_details')).sendKeys('ATQA message to a Vendor');
    browser.sleep(5000);
}

 function clickOnSendButton() {
    //  Klik na Send dugme
    element.all(by.css('.card-action:last-child')).all(by.className('btn-flat right')).get(0).click();  
    browser.sleep(1000);
}

function checkSuccess(){
    // Provera da li je uspesno poslata poruka
    var foo = element(by.className('snackbar sb_message'));
    expect(foo.getText()).toEqual('Message sent.');
    browser.sleep(2000);
 }
  
 module.exports = {
    clickOnVendorName,
    clickOnContactButton,
    enterMessageText,
    clickOnSendButton,
    checkSuccess,   
}