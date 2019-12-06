function landOnProductDetailsPage() {
   // Dolazak na product with one box details page
   browser.get('https://shop.outfitterextreme.com/badlands/alpha-pant-approach.html'); 
   browser.sleep(5000);
}

function checkSku() {
   // Provera SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU BLBALPA');
}

function clickOnMediumBox(){
   // Klik to select Medium box
   element.all(by.className('swatch-option text')).get(0).click();
   browser.sleep(2000);
}

function checkMediumSku() {
   // Provera Medium SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-13377');
}

function clickOnLargeBox(){
   // Klik to select Large box
   element.all(by.className('swatch-option text')).get(1).click();
   browser.sleep(2000);
}

function checkLargeSku() {
   // Provera Large SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-13376');
}

function clickOnXLargeBox(){
   // Klik to select XLarge box
   element.all(by.className('swatch-option text')).get(2).click();
   browser.sleep(2000);
}

function checkXLargeSku() {
   // Provera XLarge SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-13378');
}

function clickOnXXLargeBox(){
   // Klik to select XXLarge box
   element.all(by.className('swatch-option text')).get(3).click();
   browser.sleep(2000);
}

function checkXXLargeSku() {
   // Provera XXLarge SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-13379');
}


 module.exports = {
   landOnProductDetailsPage,
   checkSku,
   clickOnMediumBox,
   checkMediumSku,
   clickOnLargeBox,
   checkLargeSku,
   clickOnXLargeBox,
   checkXLargeSku,
   clickOnXXLargeBox,
   checkXXLargeSku,
}