function landOnPeakShop() {
    // Dolazak na Peak shop
    browser.get('https://shop.outfitterextreme.com/peakrefuel');
    browser.sleep(1000)
}

function clickOnMealsLink() {
    // klik na List View Producta 
    element(by.partialLinkText('Meals')).click();
    browser.sleep(2000);
}

function clickToUncheck() {
    // klik na uncheck same billing i shipping adresa
    element(by.cssContainingText('span', 'My billing and shipping address are the same')).click();
    browser.sleep(2000);
}

function clickOnAddressSelect() {
    // klik na Address select
    element(by.css('.checkout-payment-method .fieldset>.field-select-billing>.control')).all(by.tagName('option')).last().click();
    browser.sleep(2000);
}

// function clickOnFirst() {
//     element.all(by.className('control')).get(16).clear();
//     browser.sleep(2000);
// }

function deleteFirstName() {
    // klik na cart 
    element.all(by.css('.field.control')).get(1).clear();
    browser.sleep(5000);
 } 

 function deleteLastName() {
    // klik na cart 
    element.all(by.classNAme('control')).get(17).clear();
    browser.sleep(5000);
 }



module.exports = {
    landOnPeakShop,
    clickOnMealsLink,
    clickToUncheck,
    clickOnAddressSelect,
    deleteFirstName,
    deleteLastName,
    // clickOnFirst,
}