function enterUserEmail() {
   // Unosenje user's email
   element(by.id('gf-input-1')).sendKeys('bradlyseales@gmail.com');
   // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
}

function landOnMyPaymentInfo() {
   // Dolazak na My Orders stranu 
   browser.get('https://shop.outfitterextreme.com/badlands/customer/paymentinfo');
   browser.sleep(5000);
}

function checkURLAfterRedirect(){
   // provera urla nakon redirekcije
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/badlands/customer/account/'), 7000);
   browser.sleep(5000);
}

function checkNoPaymentMessage() {
   // Provera no paymeny message(provera se samo deo poruke)
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.message-error.error.message'),'My Payment Data will be available after you'), 7000);
   browser.sleep(2000);
}

module.exports = {
   enterUserEmail,
   landOnMyPaymentInfo,
   checkNoPaymentMessage,
   checkURLAfterRedirect,
}