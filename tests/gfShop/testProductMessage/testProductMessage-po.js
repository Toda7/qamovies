function landOnBowfishingPage() {
    // Dolazak na Bowfishing page
    browser.get('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html');
    browser.sleep(2000)
}

function click6Product() {
    // Klik na Cetvrti proizvod 
    element(by.className('column main')).all(by.className('product-image-photo')).get(5).click();
    browser.sleep(2000);
 }

//  function clickOnOptions() {
//     // klik na List View Producta 
//     element(by.className('super-attribute-select')).click();
//     browser.sleep(2000);
//  }

 function clickOnOptions() {
    // klik na Limiter 5 procucta po strani 
    element.all(by.className('super-attribute-select')).get(0).all(by.tagName('option')).get(1).click();
    browser.sleep(5000);
 }

 function enterNumber() {
    // Unos broja Producta
    element(by.id('qty')).clear().sendKeys('50');
    browser.sleep(5000);
 }

 function clickAddToCart() {
    // klik na Add to cart 
    element(by.className('action primary tocart btn-lg')).click();
    browser.sleep(5000);
 }

 function checkErrorMsg(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dobra Error poruka
    browser.wait(EC.textToBePresentInElement($('.message-error.error.message'), '"SPEED SHOT™ BOWFISHING ARROW" as you requested.'), 7000);
    browser.sleep(5000);
 }

 module.exports = {
    landOnBowfishingPage,
    click6Product,
    clickOnOptions,
    enterNumber,
    clickAddToCart,
    checkErrorMsg,
 }
