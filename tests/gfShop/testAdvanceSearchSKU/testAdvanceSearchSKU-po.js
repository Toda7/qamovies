function landOnShopPage() {
    // Dolazak na Shop home page
    browser.get('https://shop.outfitterextreme.com/truglo');
}

function clickOnSearchField() {
    // klik na Search polje 
    element(by.className('input-text')).click();
 } 

 function clickOnAdvanceSearch() {
    // klik na Advance serch u hederu 
    element(by.className('action advanced')).click();
 } 

 function checkAdvanceSearchURL() {
   // Provera da li se ucitao URL Advance Search strane
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/'), 7000);
}

 function enterProductSKU() {
    // Unos SKU Producta
    element(by.id('sku')).clear().sendKeys('TG13SJ1PC');
 }

 function clickSearchButton() {
    // klik na Search button 
    element(by.className('action search primary')).click();
 } 

 function checkModifyMsg() {
   var EC = protractor.ExpectedConditions;
   // Da li se ucitala Modify message
   browser.wait(EC.textToBePresentInElement($('.message.notice'), 'Modify your search.'), 7000)
}

 function checkSerchedProduct() {
    var EC = protractor.ExpectedConditions;
    // Da lis e ucitao trazeni product
    browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'TFX™ Pro Handgun Day/Night Front Sight-TFX S&W J-FRM FRNT PRO ORN'), 7000);
 }

 function clickModifySearch() {
   // klik na Modify link 
   element(by.partialLinkText('Modify')).click()
}

function enterWrongProductSKU() {
   // Unos pogresnog SKU za Producta
   element(by.id('sku')).clear().sendKeys('TG13SJ1PC4324324')
}

function clickSearchButton() {
   // klik na Search button 
   element(by.className('action search primary')).click()
} 

function checkErrorMsg() {
   var EC = protractor.ExpectedConditions;
   // Da lis e ucitao Error poruka
   browser.wait(EC.textToBePresentInElement($('.message.error'), 'find any items matching these search criteria.'), 7000)
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