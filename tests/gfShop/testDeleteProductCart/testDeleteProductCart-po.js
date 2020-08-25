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
    browser.wait(EC.textToBePresentInElement($('.message-success.success.message'), 'You added ACCU X™ CAPTURE BOWFISHING REST-disc to your shopping cart.'), 7000);
    browser.sleep(5000);
 }

 function clickOnCart() {
    // klik na Add to cart 
    element(by.className('action showcart')).click();
    browser.sleep(5000);
 } 

 function clickOnDelete() {
    // klik on Delete icon  
    element(by.className('action delete')).click();
    browser.sleep(5000);
 } 

 function clickOnDeleteConfirmation() {
    // Potvrda brisanja Producta  
    element(by.className('action-primary action-accept action primary')).click();
    browser.sleep(5000);
 } 

 function checkEmptyCart(){
    var EC = protractor.ExpectedConditions;
    // Provera da li smo dobili success poruku
    browser.wait(EC.textToBePresentInElement($('.subtitle.empty'), 'You have no items in your shopping cart.'), 7000);
    browser.sleep(5000);
 }


 module.exports = {
    landOnBowfishingPage,
    click1Product,
    clickAddToCart,
    clickOnCart,
    checkSuccessMsg,
    clickOnDelete,
    clickOnDeleteConfirmation,
    checkEmptyCart,
 }