function hoverProductToGetAddToCartButton() {
   // Hover first product on page to get "add to cart" button 
   browser.actions().mouseMove(element(by.css('.product-item-link'))).perform();
   expect(element(by.css('.product-item-link')).isDisplayed()).toBeTruthy();
   browser.sleep(3000);
}

function clickOnAddToCartButton() {
   // Klik on add to cart button 
   element(by.className('action tocart primary')).click();
   browser.sleep(5000);
}

function checkIsGrowlMessageIsHere() {
   // Ceker - da li se pojavila poruka for need to select option 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.message-notice'), 'You need to choose options for your item.'), 5000);
   }

 module.exports = {
   hoverProductToGetAddToCartButton,
   clickOnAddToCartButton,
   checkIsGrowlMessageIsHere,
}