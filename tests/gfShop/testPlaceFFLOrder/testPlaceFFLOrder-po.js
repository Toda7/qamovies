function landOnWeatherbyPage() {
   // Dolazak u weatherby shop na product details page
   browser.get('https://shop.outfitterextreme.com/weatherby/vanguard-synthetic-compact.html'); 
}

function clickToOpenDrop() {
   // Klik to open drop options
   element(by.className('super-attribute-select')).click();
}

function selectOptionFromDrop() {
   // Select option
   element(by.css('select#attribute467.super-attribute-select')).all(by.tagName('option')).get(2).click(); 
}

function clickOnAddToCart() {
   // Klik na add to cart button
   element(by.className('action primary tocart btn-lg')).click();
}

function clickToOpenCart() {
   //  Klik to open credit cart
   element(by.className('action showcart')).click();
}

function clickToGoToCheckoutPage() {
   //  Klik to go to checkout page 
   element(by.className('action primary checkout btn-lg')).click();
}

function checkTitleOnPage(){ 
   // Provera da li se uctao title on checkout page 
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('.step-title.fat'), 'Find a Local FFL Holder/Dealer'), 7000);
}

// function checkDescriptionOnPage(){  NE RADI
//    // Provera da li se uctao description on checkout page 
// var EC = protractor.ExpectedConditions;
// browser.wait(EC.textToBePresentInElement($('#text'), 'if you wish to ship to an FFL not on the list, select the closest FFL to your location and the Guidefitter team will be in touch to coordinate the transfer to the FFL of your choice.'), 5000);
// }

function enterZipInSearchField() {
   // Enter zip in search field 
   element(by.name('zip-code')).clear().sendKeys('44221');
}

function clickOnSearchButton() {
   //  Klik on Search page
   element(by.className('action primary')).click();
}

function clickToSelectDealer() {
   //  Klik to select dealer from the list
   element(by.css('.dealer-address-items .dealer-address-item .preferred-wrapper')).click();
   browser.sleep(2000);
}

function clickOnNextButton() {
   //  Klik on Next button
   element(by.className('button action continue primary')).click();
}

function clickOnOrderButton() {
   //  Klik on Next button
   element(by.className('action primary checkout')).click();
}

function checkThanksTitleOnPage(){ 
   // Provera da li se uctao Thanks title on checkout page 
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('.legal-disclosures'), 'Thank you for ordering through Guidefitter.'), 7000);
}

function checkSuccessURL() {
   // Provera da li se ucitao success URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/weatherby/checkout/onepage/success/'), 7000);
}

 module.exports = {
   landOnWeatherbyPage,
   clickToOpenDrop,
   selectOptionFromDrop,
   clickOnAddToCart,
   clickToOpenCart,
   clickToGoToCheckoutPage,
   checkTitleOnPage,
   // checkDescriptionOnPage,
   enterZipInSearchField,
   clickOnSearchButton,
   clickToSelectDealer,
   clickOnNextButton,
   clickOnOrderButton,
   checkThanksTitleOnPage,
   checkSuccessURL,
 }