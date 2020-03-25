function clickOnSetDescendingDirection() {
   // Klik on Set Descending Direction link 
   element(by.className('action sorter-action sort-asc')).click(); 
   browser.sleep(2000);
}

function checkSortingURL() {
   // Provera da li se ucitao URL sa parametrom za Set Descending Direction
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?product_list_dir=desc'), 7000);
}

function clickOnSelectOptionToOpenMenu() {
   // Klik on Select option to get drop menu
   element.all(by.className('filter-options-title')).get(2).click(); 
   browser.sleep(2000);
}

function clickOptionInCategoryDrop() {
   // Klik on option in category drop menu
element(by.partialLinkText('SCP INT 3-9X42 IR DPX BLK')).click();
browser.sleep(2000);
}

function checkSortingURL1() {
   // Provera da li se ucitao URL sa parametrom za Set Descending Direction i selected option 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?product_list_dir=desc&truglo_firearm_hunting=3273'), 7000);
}

function checkPositonOfProduct() {
   // Provera position of product before sorting
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('TRU-SEE™ SPLATTER TARGET');
}

function checkPositonOfProductAfterSorting() {
   // Provera position of product after sorting
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('HIP-SHOT™ ADAPTIVE SHOOTING REST');
}
                            
 module.exports = {
   clickOnSetDescendingDirection,
   checkSortingURL,
   clickOnSelectOptionToOpenMenu,
   clickOptionInCategoryDrop,
   checkSortingURL1,
   checkPositonOfProduct,
   checkPositonOfProductAfterSorting,
}
