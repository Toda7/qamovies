function landOnAdvancedSearchPage() {
   // Dolazak na advanced search page
   browser.get('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/'); 
   browser.sleep(2000);
}

function enterTextInShortDescriptionField(){
   // Unosenje texta u short descripton polje 
   element(by.id('short_description')).sendKeys('Truglo');
}

function clickOnSearchButton(){
   // Klik on SEARCH button
   element(by.className('action search primary')).sendKeys('Truglo').click();
   browser.sleep(5000);
}

function checkAdvencedSearchURL() {
   // Provera da li se ucitao advenced search url 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/result/?name=&sku=&description=&short_description=Truglo&price%5Bfrom%5D=&price%5Bto%5D='), 5000);
}

function checkIsProductIsHere() {
   // Provera da li se prvi prozivod ucitao na advanced search strani
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('ACCU X™ CAPTURE BOWFISHING REST');
   browser.sleep(3000);
}

function selectPriceToSort() {
   // Select Product name za sorting
   element(by.css('select#sorter.sorter-options')).all(by.tagName('option')).get(1).click(); 
   browser.sleep(3000);
}

function checkAdvencedSearchAndPriceSortURL() {
   // Provera da li se ucitao advenced search and price sort URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/result/?description=&name=&price%5Bfrom%5D=&price%5Bto%5D=&short_description=Truglo&sku=&product_list_order=price'), 5000);
}

function checkIsProductIsHereAfterSortingByPrice() {
   // Provera da li se prvi prozivod ucitao na advanced search strani nakon sortiranja by Price
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('SPEED SHOT™ BOWFISHING ARROW');
   browser.sleep(3000);
}

function checkNumberOfItems() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobar number of items
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 1-12 of 28'), 5000);
   browser.sleep(2500);
}

function clickPageTwo() {
      // klik na 2 u paginaciji 
      element.all(by.className('items pages-items')).get(1).all(by.tagName('a')).get(0).click();
      browser.sleep(2000);
   }

function checkAdvencedSearchAndPriceSortOn2PageURL() {
   // Provera da li se ucitao advenced search and price sort on 2 page URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/result/?description=&name=&p=2&price%5Bfrom%5D=&price%5Bto%5D=&product_list_order=price&short_description=Truglo&sku='), 5000);
}

function checkNumberOfItemsOn2Page() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobar number of items on 2 page 
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 13-24 of 28'), 5000);
   browser.sleep(2500);
}

function checkIsProductIsHereAfterSortingByPriceOn2Page() {
   // Provera da li se prvi prozivod ucitao na advanced search 2 strani nakon sortiranja by Price 
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('MUZZLE-BRITE™ XTREME UNIVERSAL SERIES');
   browser.sleep(3000);
}

function clickPageThree() {
   // klik na 2 u paginaciji 
   element.all(by.className('items pages-items')).get(1).all(by.tagName('a')).get(2).click();
   browser.sleep(2000);
}

function checkAdvencedSearchAndPriceSortOn3PageURL() {
   // Provera da li se ucitao advenced search and price sort on 3 page URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/result/?description=&name=&p=3&price%5Bfrom%5D=&price%5Bto%5D=&product_list_order=price&short_description=Truglo&sku='), 5000);
}

function checkNumberOfItemsOn3Page() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobar number of items on 2 page 
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 25-28 of 28'), 5000);
   browser.sleep(2500);
}

function checkIsProductIsHereAfterSortingByPriceOn3Page() {
   // Provera da li se prvi prozivod ucitao na advanced search 2 strani nakon sortiranja by Price 
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('TRU TEC™ 30MM RED DOT SIGHT');
   browser.sleep(3000);
}

function clickOnSetDescendingDirection() {
   // Klik on Set Descending Direction link 
   element(by.css('a.action.sorter-action.sort-asc')).click(); 
   browser.sleep(2000);
}

function checkAdvencedSearchAndPriceSortOn3PageAfterSetDescendingDirectioURL() {
   // Provera da li se ucitao URL nakon set descending direction 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/catalogsearch/advanced/result/?description=&name=&p=3&price%5Bfrom%5D=&price%5Bto%5D=&product_list_order=price&short_description=Truglo&sku=&product_list_dir=desc'), 5000);
}

function checkIsProductIsHereAfterSetDescendingDirectio() {
   // Provera da li se prvi prozivod ucitao na advanced search 2 strani nakon sortiranja by Price 
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('GLO-DOT™ UNIVERSAL');
   browser.sleep(3000);
}

function selectProductNameToSort() {
   // Select Product name za sorting
   element(by.css('select#sorter.sorter-options')).all(by.tagName('option')).get(0).click(); 
   browser.sleep(3000);
}

function checkIsProductIsHereAfterSetProductNameToSort() {
   // Provera da li se prvi prozivod ucitao nakon setovanja product name 
   var xxx = element.all(by.className('product name product-item-name')).get(0);
   expect(xxx.getText()).toEqual('CARBON HYBRID™');
   browser.sleep(3000);
}




 module.exports = {
   landOnAdvancedSearchPage,
   enterTextInShortDescriptionField,
   clickOnSearchButton,
   checkAdvencedSearchURL,
   checkIsProductIsHere,
   checkAdvencedSearchAndPriceSortURL,
   checkIsProductIsHereAfterSortingByPrice,
   selectPriceToSort,
   checkNumberOfItems,
   clickPageTwo,
   clickPageThree,
   checkAdvencedSearchAndPriceSortOn2PageURL,
   checkNumberOfItemsOn2Page,
   checkIsProductIsHereAfterSortingByPriceOn2Page,
   checkAdvencedSearchAndPriceSortOn3PageURL,
   checkNumberOfItemsOn3Page,
   checkIsProductIsHereAfterSortingByPriceOn3Page,
   clickOnSetDescendingDirection,
   checkAdvencedSearchAndPriceSortOn3PageAfterSetDescendingDirectioURL,
   checkIsProductIsHereAfterSetDescendingDirectio,
   selectProductNameToSort,
   checkIsProductIsHereAfterSetProductNameToSort,
}