function landOnProductDetailsPage() {
   // Dolazak na product with two boxes details page
   browser.get('https://shop.outfitterextreme.com/badlands/new-approach-fx-gear/rise-pants.html'); 
   browser.sleep(5000);
}

function checkSku() {
   // Provera SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-371-rise-pants');
}

function clickOnFirstColorBox(){
   // Klik to select FirstColor box
   element.all(by.className('swatch-option image')).get(0).click();
   browser.sleep(2000);
}

function clickOnMediumBox(){
   // Klik to select Medium box
   element.all(by.className('swatch-option text')).get(0).click();
   browser.sleep(2000);
}

function checkMediumSku() {
   // Provera Medium SKU-a and fist color
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-37184');
}

function clickOnMediumTallBox(){
   // Klik to select MediumTall box
   element.all(by.className('swatch-option text')).get(1).click();
   browser.sleep(2000);
}

function checkMediumTallSku() {
   // Provera MediumTall SKU-a and fist color
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-39180');
}

function clickOnSecondColorBox(){
   // Klik to select SecondColor box
   element.all(by.className('swatch-option image')).get(1).click();
   browser.sleep(2000);
}

function checkMediumTallAndSecondColorSku() {
   // Provera MediumTall SKU-a and second color
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-39177');
}

function checkMediumAndSecondColorSku() {
   // Provera Medium SKU-a and second color
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU 21-37180');
}

 module.exports = {
   landOnProductDetailsPage,
   checkSku,
   clickOnFirstColorBox,
   clickOnMediumBox,
   checkMediumSku,
   clickOnMediumTallBox,
   checkMediumTallSku,
   clickOnSecondColorBox,
   checkMediumTallAndSecondColorSku,
   checkMediumAndSecondColorSku,
}