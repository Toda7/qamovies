function selectPositionToSort() {
   // Select Position za sorting
   element(by.css('select#sorter.sorter-options')).all(by.tagName('option')).get(0).click(); 
   browser.sleep(3000);
}

function checkSortingRL() {
   // Provera da li se ucitao URL sa parametrom za position name za sorting
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html'), 5000);
}

function checkThatProductIsLoadedOn2Page() {
   // provera da li se ucitao product na strani
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.product.name.product-item-name'), 'HIP-SHOT™ ADAPTIVE SHOOTING REST'), 5000);
}

 module.exports = {
   selectPositionToSort,
   checkSortingRL,
   checkThatProductIsLoadedOn2Page,
}