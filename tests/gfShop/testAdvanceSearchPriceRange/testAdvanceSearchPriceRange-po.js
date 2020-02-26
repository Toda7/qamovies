function enterProductPriceTo() {
    // Unos najnize cene Producta
    element(by.id('price')).clear().sendKeys('11.82');
    browser.sleep(2000);
 }

 function enterProductPriceFrom() {
    // Unos Price to 16
    element(by.id('price_to')).clear().sendKeys('16');
    browser.sleep(2000);
 }

 function checkSerchedProduct() {
    var EC = protractor.ExpectedConditions;
    // Da lis e ucitao trazeni product
    var xxx = element.all(by.className('product name product-item-name')).get(0);
    expect(xxx.getText()).toEqual('9” CARBON XS™ STABILIZER WITH SLING');
 }

 function checkSerchedProduct2() {
    var EC = protractor.ExpectedConditions;
    // Da li se ucitao trazeni product
    var xxx = element.all(by.className('product name product-item-name')).get(1);
    expect(xxx.getText()).toEqual('CARPEDO™ BOWFISHING ARROW');
 }

 function enterProductPriceTo1() {
    // Unos cene od 16
    element(by.id('price')).clear().sendKeys('16');
    browser.sleep(2000);
 }

 function enterProductPriceFrom1() {
    // Unos cene do 20
    element(by.id('price_to')).clear().sendKeys('20');
    browser.sleep(2000);
 }

 function checkSerchedProduct3() {
    // Da li se ucitao trazeni product
    var xxx = element.all(by.className('product name product-item-name')).get(0);
    expect(xxx.getText()).toEqual("SPRINGFISHER™ BOWFISHING ARROW");
 }

 function enterProductPriceToWrong() {
    // Unos pogresne cene od
    element(by.id('price')).clear().sendKeys('1312');
    browser.sleep(2000);
 }

 function enterProductPriceFromWrong() {
    // Unos pogresne cene do
    element(by.id('price_to')).clear().sendKeys('0');
    browser.sleep(2000);
 }

 function enterProductPriceToWrong1() {
    // Unos pogresne cene od 1312
    element(by.id('price')).clear().sendKeys('1312');
    browser.sleep(2000);
 }

 function enterProductPriceFromWrong1() {
    // Unos pogresne cene do 8456
    element(by.id('price_to')).clear().sendKeys('8456');
    browser.sleep(2000);
 }

 function checkSerchedProducts() {
    var EC = protractor.ExpectedConditions;
    // Da li smo dobila 48 produkta
    browser.wait(EC.textToBePresentInElement($('.search.found'), '48 items'), 5000);
    browser.sleep(2000);
 }



module.exports = {
    enterProductPriceFrom,
    enterProductPriceTo,
    checkSerchedProduct2,
    checkSerchedProduct,
    enterProductPriceTo1,
    enterProductPriceFrom1,
    checkSerchedProduct3,
    enterProductPriceToWrong,
    enterProductPriceFromWrong,
    enterProductPriceToWrong1,
    enterProductPriceFromWrong1,
    checkSerchedProducts,

}