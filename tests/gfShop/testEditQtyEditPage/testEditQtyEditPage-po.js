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
    browser.wait(EC.textToBePresentInElement($('.message-success.success.message'), 'You added ACCU X™ CAPTURE BOWFISHING REST to your shopping cart.'), 7000);
    browser.sleep(5000);
 }

 function clickOnCart() {
    // klik na cart 
    element(by.className('action showcart')).click();
    browser.sleep(5000);
 } 

 function clickOnViewEdit() {
     // klik na view and edit
     element(by.className('action viewcart')).click();
     browser.sleep(5000);
 }

//  function clickOnUpdate() {
//     // klik na Add to cart 
//     element(by.className('update-cart-item')).click();
//     browser.sleep(5000);
//  }

 function checkViewEditCartURL() {
    // Provera da li se ucitao URL view and edit strane
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/checkout/cart/'), 7000);
 }

 function clickOnQtyField() {
    // klik na cart 
    element(by.className('input-text qty')).sendKeys(protractor.Key.BACK_SPACE);
    browser.sleep(5000);
 }

 function enterNumber() {
    // Unos broja Producta
    element(by.className('input-text qty')).clear().sendKeys('5');
    browser.sleep(5000);
 }

 function clickOnUpadateCart() {
    // klik na view and edit
    element(by.className('action update')).click();
    browser.sleep(5000);
}

 function checkSuccessEdit(){
    var EC = protractor.ExpectedConditions;
    // Provera da li smo dobili success poruku
    var xxx = element(by.className('counter-number'));
   expect(xxx.getText()).toEqual('5');
   browser.sleep(5000);
}

 module.exports = {
    landOnBowfishingPage,
    click1Product,
    clickAddToCart,
    clickOnCart,
    checkSuccessMsg,
    // clickOnUpdate,
    checkViewEditCartURL,
    clickOnQtyField,
    enterNumber,
    checkSuccessEdit,
    clickOnViewEdit,
    clickOnUpadateCart,
 }