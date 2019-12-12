function enterCreditCardNumber() {
   // Unosenje broja kreditne kartice 
   element(by.name('payment[cc_number]')).sendKeys('5555555555554444');
   browser.sleep(2000);
}

module.exports = {
   enterCreditCardNumber,
}