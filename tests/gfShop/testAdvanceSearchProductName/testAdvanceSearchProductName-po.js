function landOnShopPage() {
    // Dolazak na Bowfishing page
    browser.get('https://shop.outfitterextreme.com/truglo');
    browser.sleep(2000)
}

function clickOnSearchField() {
    // klik na cart 
    element(by.className('input-text')).click();
    browser.sleep(2000);
 } 

 function clickOnAdvanceSearch() {
    // klik na cart 
    element(by.className('action advanced')).click();
    browser.sleep(2000);
 } 

 function checkAdvanceSearchURL() {
   // Provera da li se ucitao URL sa parametrom za position name za sorting
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/'), 5000);
}

 function enterProductName() {
    // Unos broja Producta
    element(by.id('name')).clear().sendKeys('ACCU');
    browser.sleep(2000);
 }

 function clickSearchButton() {
    // klik na cart 
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
   // klik na cart 
   element(by.partialLinkText('Modify')).click();
   browser.sleep(2000);
}

function enterWrongProductName() {
   // Unos broja Producta
   element(by.id('name')).clear().sendKeys('ACCUdjsadhkajsd');
   browser.sleep(2000);
}

function clickSearchButton() {
   // klik na cart 
   element(by.className('action search primary')).click();
   browser.sleep(2000);
} 

function checkErrorMsg() {
   var EC = protractor.ExpectedConditions;
   // Da lis e ucitao trazeni product
   browser.wait(EC.textToBePresentInElement($('.message.error'), 'find any items matching these search criteria.'), 5000);
   browser.sleep(2000);
}

 module.exports = {
    landOnShopPage,
    clickOnSearchField,
    enterProductName,
    clickOnAdvanceSearch,
    clickSearchButton,
    checkSerchedProduct,
    checkAdvanceSearchURL,
    checkModifyMsg,
   //  checkSearchResultURL,
    clickModifySearch,
    enterWrongProductName,
    checkErrorMsg,
 }