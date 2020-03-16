function landOnTrugloPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo'); 
}

function clickOnLinkInNavMenu() {
   // Klik on link from navigation menu
   element(by.partialLinkText('FIREARM-HUNTING')).click();
}

function checkFireamHuntingURL() {
   // Provera da li se ucitao FIREARM-HUNTING URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html'), 7000);
}

function checkPageTitle() {
   // Provera da li se ucitao FIREARM-HUNTING page title
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.titleIs('FIREARM-HUNTING'), 7000);
}

function checkThatProductIsLoaded() {
   // provera da li se ucitao product na strani
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'TRU-SEE™ SPLATTER TARGET'), 7000);
}

function checkNumberOfItems(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 1-12 of 13'), 7000);
}

function checkNumberOfItemsOn2Page(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 13-13 of 13'), 7000);
}

function checkThatProductIsLoadedOn2Page() {
   // provera da li se ucitao product na strani
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'HIP-SHOT™ ADAPTIVE SHOOTING REST'), 7000);
}

function clickOn1PageFromPagination() {
   // Klik na 2 page in pagination
   element.all(by.css('a.action.previous')).get(1).click(); 
   // element(by.id('sorter')).click();
}

function clickOnSort () { 
   // Klik na sort
   element(by.id('sorter')).click();
}

function selectProductNameToSort() {
   // Select Product name za sorting
   element(by.css('select#sorter.sorter-options')).all(by.tagName('option')).get(1).click(); 
}

function checkSortingRL() {
   // Provera da li se ucitao URL sa parametrom za product name za sorting
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?p=1&product_list_order=name'), 7000);
}

// function checkThatProductIsNotLoaded() {
//    // // provera da li se product nije ucitao na strani
//    // var EC = protractor.ExpectedConditions;
//    // browser.wait(EC.invisibilityOf($('.product.name.product-item-name'), 'TRU-SEE™ SPLATTER TARGET'), 30000);
//    // var elem = element(by.css('.product.name.product-item-name'), 'TRU-SEE™ SPLATTER TARGET');
//    //  expect(elem.isDisplayed()).toBe(true);
// }

function clickOn2PageFromPagination() {
   // Klik na 2 page in pagination
   element.all(by.css('a.action.next')).get(1).click(); 
   // element(by.id('sorter')).click();
}

function checkPaginationURL() {
   // Provera da li se ucitao URL sa parametrom za 2 page of pagination
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?p=2&product_list_order=name'), 7000);
}


 module.exports = {
   landOnTrugloPage,
   clickOnLinkInNavMenu,
   checkFireamHuntingURL,
   checkPageTitle,
   clickOnSort,
   selectProductNameToSort,
   checkNumberOfItems,
   checkNumberOfItemsOn2Page,
   checkSortingRL,
   checkThatProductIsLoaded,
   checkThatProductIsLoadedOn2Page,
   clickOn1PageFromPagination,
   // checkThatProductIsNotLoaded,
   clickOn2PageFromPagination,
   checkPaginationURL,
}