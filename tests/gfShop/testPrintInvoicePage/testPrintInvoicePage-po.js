function clickPrintInvoice() {
    // Klik na Print Order link 
    element(by.className('action print')).click();
    browser.sleep(2000);
 }

 function clickOnInvoices() {
    // Klik na Print Order link 
    element(by.className('nav item')).click();
    browser.sleep(2000);
 }

 module.exports = {
    clickPrintInvoice,
    clickOnInvoices,

 }