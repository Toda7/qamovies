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
 module.exports = {
    clickOnInvoiceLink,
    checkPurchaseMessage,
 }