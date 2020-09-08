function clickPrintRefund() {
   // Klik na Print Refund link 
   element.all(by.className('action print')).get(1).click();
   browser.sleep(2000);
}

module.exports = {
   clickPrintRefund,
 }