function landOnBowfishingPage() {
    // Dolazak na Bowfishing page
    browser.get('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html');
    browser.sleep(2000)
}

function click1Product() {
    // Klik na Cetvrti proizvod 
    element(by.className('column main')).all(by.className('product-image-photo')).get(0).click();
    browser.sleep(2000);
 }
 function clickAddToCart() {
    // klik na Add to cart 
    element(by.className('action primary tocart btn-lg')).click();
    browser.sleep(5000);
 }

 function checkSuccessMsg(){
    var EC = protractor.ExpectedConditions;
    // Provera da li smo dobili success poruku
    browser.wait(EC.textToBePresentInElement($('.message-success.success.message'), 'You added ACCU X™ CAPTURE BOWFISHING REST to your shopping cart.'), 5000);
    browser.sleep(5000);
 }

 function clickOnCart() {
    // klik na Add to cart 
    element(by.className('action showcart')).click();
    browser.sleep(5000);
 } 

 function clickOnViewEditCart() {
    // klik na Add to cart 
    element(by.className('action viewcart')).click();
    browser.sleep(5000);
 } 

 function checkViewEditCartURL() {
    // Provera da li se ucitao URL view and edit strane
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/checkout/cart/'), 5000);
 }

 function clickOnDeleteProductIcon() {
    // klik na Delete 
    element(by.className('action action-delete')).click();
    browser.sleep(5000);
 } 

 function checkEmptyCart(){
    var EC = protractor.ExpectedConditions;
    // Provera da li smo dobili success poruku
    browser.wait(EC.textToBePresentInElement($('.cart-empty'), 'You have no items in your shopping cart.'), 5000);
    browser.sleep(5000);
 }

 module.exports = {
    landOnBowfishingPage,
    click1Product,
    clickAddToCart,
    clickOnCart,
    checkSuccessMsg,
    clickOnViewEditCart,
    checkViewEditCartURL,
    clickOnDeleteProductIcon,
    checkEmptyCart,
 }