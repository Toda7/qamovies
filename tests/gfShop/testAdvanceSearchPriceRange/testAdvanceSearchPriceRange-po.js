function enterProductPriceTo() {
    // Unos SKU Producta
    element(by.id('price')).clear().sendKeys('11.82');
    browser.sleep(2000);
 }

 function enterProductPriceFrom() {
    // Unos SKU Producta
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
    // Da lis e ucitao trazeni product
    var xxx = element.all(by.className('product name product-item-name')).get(0);
    expect(xxx.getText()).toEqual('SPEED SHOT™ BOWFISHING ARROW');
 }

 function enterProductPriceTo1() {
    // Unos SKU Producta
    element(by.id('price')).clear().sendKeys('16');
    browser.sleep(2000);
 }

 function enterProductPriceFrom1() {
    // Unos SKU Producta
    element(by.id('price_to')).clear().sendKeys('20');
    browser.sleep(2000);
 }

 function checkSerchedProduct3() {
    // Da li se ucitao trazeni product
    var xxx = element.all(by.className('product name product-item-name')).get(0);
    expect(xxx.getText()).toEqual('FAT-BEAD™ DUAL-COLOR');
 }

 function enterProductPriceToWrong() {
    // Unos SKU Producta
    element(by.id('price')).clear().sendKeys('1312');
    browser.sleep(2000);
 }

 function enterProductPriceFromWrong() {
    // Unos SKU Producta
    element(by.id('price_to')).clear().sendKeys('0');
    browser.sleep(2000);
 }

 function enterProductPriceToWrong1() {
    // Unos SKU Producta
    element(by.id('price')).clear().sendKeys('1312');
    browser.sleep(2000);
 }

 function enterProductPriceFromWrong1() {
    // Unos SKU Producta
    element(by.id('price_to')).clear().sendKeys('8456');
    browser.sleep(2000);
 }

 function checkSerchedProducts() {
    var EC = protractor.ExpectedConditions;
    // Da li smo dobila 52 produkta
    browser.wait(EC.textToBePresentInElement($('.search.found'), '52 items'), 7000);
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