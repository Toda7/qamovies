function landOnShopPage() {
    // Dolazak na Shop home page
    browser.get('https://shop.outfitterextreme.com/truglo');
    browser.sleep(2000)
}

function clickOnSearchField() {
    // klik na Search polje 
    element(by.className('input-text')).click();
    browser.sleep(2000);
 } 

 function clickOnAdvanceSearch() {
    // klik na Advance serch u hederu 
    element(by.className('action advanced')).click();
    browser.sleep(2000);
 } 

 function checkAdvanceSearchURL() {
   // Provera da li se ucitao URL Advance Search strane
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/'), 5000);
}

 function enterProductSKU() {
    // Unos SKU Producta
    element(by.id('sku')).clear().sendKeys('TG680B1');
    browser.sleep(2000);
 }

 function clickSearchButton() {
    // klik na Search button 
    element(by.className('action search primary')).click();
    browser.sleep(2000);
 } 

 function checkModifyMsg() {
   var EC = protractor.ExpectedConditions;
   // Da li se ucitala Modify message
   browser.wait(EC.textToBePresentInElement($('.message.notice'), 'Modify your search.'), 5000);
   browser.sleep(2000);
}

 function checkSerchedProduct() {
    var EC = protractor.ExpectedConditions;
    // Da lis e ucitao trazeni product
    browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'ACCU X™ CAPTURE BOWFISHING REST'), 5000);
    browser.sleep(2000);
 }

 function clickModifySearch() {
   // klik na Modify link 
   element(by.partialLinkText('Modify')).click();
   browser.sleep(2000);
}

function enterWrongProductSKU() {
   // Unos pogresnog SKU za Producta
   element(by.id('sku')).clear().sendKeys('TG680B14324324');
   browser.sleep(2000);
}

function clickSearchButton() {
   // klik na Search button 
   element(by.className('action search primary')).click();
   browser.sleep(2000);
} 

function checkErrorMsg() {
   var EC = protractor.ExpectedConditions;
   // Da lis e ucitao Error poruka
   browser.wait(EC.textToBePresentInElement($('.message.error'), 'find any items matching these search criteria.'), 5000);
   browser.sleep(2000);
}

 module.exports = {
    landOnShopPage,
    clickOnSearchField,
    clickOnAdvanceSearch,
    clickSearchButton,
    checkSerchedProduct,
    checkAdvanceSearchURL,
    checkModifyMsg,
    clickModifySearch,
    checkErrorMsg,
    enterWrongProductSKU,
    enterProductSKU,
 }