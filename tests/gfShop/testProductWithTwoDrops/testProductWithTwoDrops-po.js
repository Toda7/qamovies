function landOnProductDetailsPage() {
   // Dolazak na product with two drops details page
   browser.get('https://shop.outfitterextreme.com/weatherby/element-synthetic.html'); 
   browser.sleep(5000);
}

function checkSku() {
   // Provera SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU ESN');
}

function selectFristOptionForFirstDrop(){
   // Klik to select first option in first drop
   element.all(by.css('.super-attribute-select')).get(0).all(by.tagName('option')).get(1).click(); 
   browser.sleep(2000);
}

function checkFirstOptonFirstDropSku() {
   // Provera SKU-a for first option in frist drop
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU ESN1226PGM');
}

function selectFirstOptionForSecondDrop(){
   // Klik to select First option in Second drop
   element.all(by.css('.super-attribute-select')).get(1).all(by.tagName('option')).get(1).click(); 
   browser.sleep(2000);
}

function selectSecondOptionForSecondDrop(){
   // Klik to select Second option in Second drop
   element.all(by.css('.super-attribute-select')).get(1).all(by.tagName('option')).get(2).click(); 
   browser.sleep(2000);
}

function checkSecondOptonSecondDropSku() {
   // Provera SKU-a for first option in first drop and second option in second drop
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU ESN1228PGM');
}

function selectSecondOptionForFirstDrop(){
   // Klik to select Second option in First drop
   element.all(by.css('.super-attribute-select')).get(0).all(by.tagName('option')).get(2).click(); 
   browser.sleep(2000);
}

function checkSecondOptonFirstDropSku() {
   // Provera SKU-a for second option in first drop and second option in second drop
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU ESN2026PGM');
   browser.sleep(3000);
}

function checkSecondOptonsFirstSecondDropSku() {
   // Provera SKU-a for second option in second drop and second option in second drop
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU ESN2028PGM');
   browser.sleep(3000);
}

 module.exports = {
   landOnProductDetailsPage,
   checkSku,
   selectFristOptionForFirstDrop,
   checkFirstOptonFirstDropSku,
   selectFirstOptionForSecondDrop,
   selectSecondOptionForSecondDrop,
   checkSecondOptonSecondDropSku,
   selectSecondOptionForFirstDrop,
   checkSecondOptonFirstDropSku,
   checkSecondOptonsFirstSecondDropSku,
}