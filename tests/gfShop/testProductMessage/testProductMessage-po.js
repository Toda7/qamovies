function landOnBowfishingPage() {
    // Dolazak na Bowfishing page
    browser.get('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html');
    browser.sleep(2000)
}

function click6Product() {
    // Klik na 6 proizvod 
    element(by.className('column main')).all(by.className('product-image-photo')).get(5).click();
    browser.sleep(2000);
 }

 function clickOnOptions() {
    // seletovanje opcije iz dropa 
    element.all(by.className('super-attribute-select')).get(0).all(by.tagName('option')).get(1).click();
    browser.sleep(5000);
 }

 function enterNumber() {
    // Unos broja Producta
    element(by.id('qty')).clear().sendKeys('100');
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
    browser.wait(EC.textToBePresentInElement($('.message-error.error.message'),  'The requested qty is not available'), 5000);
    browser.sleep(7000);
 }

 module.exports = {
    landOnBowfishingPage,
    click6Product,
    clickOnOptions,
    enterNumber,
    clickAddToCart,
    checkErrorMsg,
 }
