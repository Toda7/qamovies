function landOnPeakShop() {
    // Dolazak na Peak shop
    browser.get('https://shop.outfitterextreme.com/peakrefuel');
    browser.sleep(2000)
}

function clickOnMealsLink() {
    // klik na List View Producta 
    element(by.partialLinkText('Meals')).click();
    browser.sleep(5000);
 }

//  function clickToUncheck() {
//     // klik na Add to cart 
//     element(by.id('billing-address-same-as-shipping-authnetcim')).click();
//     browser.sleep(5000);
//  }

 function clickToUncheck() {
    // klik na List View Producta 
    element(by.partialLinkText('My billing and shipping address are the same')).click();
    browser.sleep(5000);
 }

 module.exports = {
    landOnPeakShop,
    clickOnMealsLink,
    clickToUncheck,
 }