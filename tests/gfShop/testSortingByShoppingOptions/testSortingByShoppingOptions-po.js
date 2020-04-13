function clickOnCategoryOptionToOpenMenu() {
   // Klik on "Category" option to get drop menu
   element.all(by.className('filter-options-title')).get(0).click(); 
   browser.sleep(2000);
}

function clickOptionInCategoryDrop() {
   // Klik on option in category drop menu
element(by.partialLinkText('Turkey Hunting')).click();
browser.sleep(2000);
}

function checkSortingURL() {
   // Provera da li se ucitao URL sa parametrom za Turkey Hunting za sorting
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?cat=1104'), 7000);
}

function checkThatProductIsLoadedForTurkeyFilter() {
   // provera da li se ucitao product na strani
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'HEAD-BANGER™ LONG RANGE TURKEY CHOKE TUBE'), 7000);
}

function checkNumberOfItems(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobar number of items on page
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), '2 Items'), 7000);
   browser.sleep(2500);
}

function checkNumberOfItems2(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobar number of items on page
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), '1 Item'), 7000);
   browser.sleep(2500);
}

function clickOnClearAllOption() {
   // Klik on CLEAR ALL option
element(by.className('action clear filter-clear')).click();
browser.sleep(2000);
}

function checkSortingURL1() {
   // Provera da li se ucitao URL bez parametrom za Turkey Hunting 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html'), 7000);
}

function click2OptionInCategoryDrop() {
   // Klik on 2 option in category drop menu
element(by.partialLinkText('Red Dots')).click();
browser.sleep(2000);
}

function checkSortingURL2() {
   // Provera da li se ucitao URL sa parametrom za Red Dots za sorting
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?cat=1110'), 7000);
}

function checkThatProductIsLoadedForRedDotsFilter() {
   // provera da li se ucitao product na strani
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'TRITON™ 30mm TRI-COLOR'), 7000);
}

function clickOnPriceOptionToOpenMenu() {
   // Klik on "Price" option to get drop menu
   element.all(by.className('filter-options-title')).get(0).click(); 
   browser.sleep(2000);
}

function clickOptionInPriceDrop() {
   // Klik on 1 option in price drop menu
element(by.partialLinkText('$40.00')).click();
browser.sleep(3000);
}

function checkSortingURL3() {
   // Provera da li se ucitao URL sa parametrom za Red Dots and $0.00 - $100.00
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?cat=1110&price=40-50'), 5000);
}

function checkNumberItem() {
   // Provera da li se na strani nalazi 1 item 
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('.toolbar-number'), '1'), 7000);
}

function checkSortingURL4() {
   // Provera da li se ucitao product za Red Dots and $0.00 - $100.00 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?cat=1104&product_list_order=price'), 7000);
}

 module.exports = {
   clickOnCategoryOptionToOpenMenu,
   clickOptionInCategoryDrop,
   checkSortingURL,
   checkNumberOfItems,
   clickOnClearAllOption,
   checkSortingURL1,
   click2OptionInCategoryDrop,
   checkSortingURL2,
   clickOnPriceOptionToOpenMenu,
   clickOptionInPriceDrop,
   checkSortingURL3,
   checkNumberItem,
   checkSortingURL4,
   checkThatProductIsLoadedForTurkeyFilter,
   checkThatProductIsLoadedForRedDotsFilter,
   checkNumberOfItems2,
}
