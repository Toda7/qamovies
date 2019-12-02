function selectPriceToSort() {
   // Select Product name za sorting
   element(by.css('select#sorter.sorter-options')).all(by.tagName('option')).get(2).click(); 
   browser.sleep(3000);
}

function checkSortingRL() {
   // Provera da li se ucitao URL sa parametrom za product name za sorting
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?product_list_order=price'), 5000);
}

function checkThatProductIsLoaded() {
   // provera da li se ucitao product na strani
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'INTERCEPT™ ILLUMINATED–RETICLE HUNTING SCOPE SERIES'), 5000);
}

function checkPaginationURL() {
   // Provera da li se ucitao URL sa parametrom za 2 page of pagination
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?p=2&product_list_order=price'), 5000);
}

function checkPaginationURLof1Page() {
   // Provera da li se ucitao URL sa parametrom za 2 page of pagination
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?p=1&product_list_order=price'), 5000);
}

function checkPrice() {
   // Provera cene za prvi prozivod na strani
   var xxx = element.all(by.className('price')).get(0);
   expect(xxx.getText()).toEqual('$8.55');
}

function checkPriceFor2Product() {
   // Provera cene za prvi prozivod na strani
   var xxx = element.all(by.className('price')).get(2);
   expect(xxx.getText()).toEqual('$10.08');
}

function checkPriceForProductOn2Page() {
   // Provera cene za prvi prozivod na 2 strani
   var xxx = element.all(by.className('price')).get(0);
   expect(xxx.getText()).toEqual('$103.19');
}

 module.exports = {
   selectPriceToSort,
   checkSortingRL,
   checkThatProductIsLoaded,
   checkPaginationURL,
   checkPaginationURLof1Page,
   checkPrice,
   checkPriceFor2Product,
   checkPriceForProductOn2Page,
}