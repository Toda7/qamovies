function clickOnInvoiceLink() {
    //  Click on invoice link
    element(by.className('selected_false')).click();
    browser.sleep(2000);
 }

 function checkPurchaseMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila treca error poruka
    browser.wait(EC.textToBePresentInElement($('.buy'), 'This webinar has been purchased by invoice, but it is not approved. Invoice orders are approved once our team processes the order and sends the invoice.'), 5000);
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
   element(by.name('email')).sendKeys('mpejic@cbancnetwork.com');
}

function enterPass() {
   element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
   element(by.className('auth0-label-submit')).click();
   browser.sleep(5000);
}
 module.exports = {
    clickOnInvoiceLink,
    checkPurchaseMessage,
    HoverToOpenUserDrop,
    clickOnSignOutLink,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
 }