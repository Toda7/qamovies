function hoverToOpenDrop() {
    // Hover to open drop menu
    browser.actions().mouseMove(element(by.css('.level0.nav-1.first.uno.parent'))).perform();
    expect(element(by.css('.level0.nav-1.first.uno.parent')).isDisplayed()).toBeTruthy();
    browser.sleep(2000);
 }

 function clickOnScopes() {
    // klik na List View Producta 
    element(by.partialLinkText('Scopes')).click();
    browser.sleep(5000);
 }

 function clickOnProduct() {
    // klik na List View Producta 
    // element(by.partialLinkText('Add to Cart')).click();
    element(by.className('product-item-link')).click();
    browser.sleep(5000);
 }

 function clickAddToCart() {
    // klik na Add to cart 
    element(by.className('action primary tocart btn-lg')).click();
    browser.sleep(5000);
 }

 function checkSuccessMsg(){
    var EC = protractor.ExpectedConditions;
    // Provera da li smo dobili success poruku
    browser.wait(EC.textToBePresentInElement($('.message-success.success.message'), 'You added OPTIOPTI™SPEED™ VELOCITY CALIBRATED BDC CROSSBOW SCOPE to your shopping cart.'), 5000);
    browser.sleep(5000);
 }

 function checkCartQty(){
    var EC = protractor.ExpectedConditions;
    // Provera da li smo dobili success poruku
    var xxx = element(by.className('counter-number'));
   expect(xxx.getText()).toEqual('1');
}

function landOnShop2() {
    // Dolazak na Bowfishing page
    browser.get('https://shop.outfitterextreme.com/peakrefuel');
    browser.sleep(2000)
}

 module.exports = {
    hoverToOpenDrop,
    clickOnScopes,
    clickOnProduct,
    clickAddToCart,
    checkSuccessMsg,
    checkCartQty,
    landOnShop2,
 }