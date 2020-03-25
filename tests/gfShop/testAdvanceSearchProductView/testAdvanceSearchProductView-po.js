function enterProductName() {
    // Unos broja Producta
    element(by.id('name')).clear().sendKeys('bowfishing');
    browser.sleep(2000);
 }

 function checkListViewLimit5URL() {
    // Provera da li se ucitao URL sa parametrom za position name za sorting
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/result/?description=&name=bowfishing&price%5Bfrom%5D=&price%5Bto%5D=&short_description=&sku=&product_list_mode=list'), 7000);
 }

 function checkPage2URL() {
    // Provera da li se ucitao URL sa parametrom za position name za sorting
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/result/?description=&name=bowfishing&p=2&price%5Bfrom%5D=&price%5Bto%5D=&product_list_limit=5&product_list_mode=list&short_description=&sku='), 7000);
 }

 function checkProductOnPage2() {
    var EC = protractor.ExpectedConditions;
    // Da li se ucitao trazeni product
    var xxx = element.all(by.className('product name product-item-name')).get(0);
    expect(xxx.getText()).toEqual('SPRINGFISHER™ BOWFISHING ARROW');
 }

 function clickOnLearnMore() {
    // klik na cart 
    element(by.className('action more')).click();
    browser.sleep(2000);
 }

 function checkProductDetailPageUrl() {
    // Provera da li se ucitao URL sa parametrom za position name za sorting
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/springfisher-bowfishing-arrow.html'), 7000);
 }

 module.exports = {
    enterProductName,
    checkListViewLimit5URL,
    checkPage2URL,
    checkProductOnPage2,
    clickOnLearnMore,
    checkProductDetailPageUrl,
 }