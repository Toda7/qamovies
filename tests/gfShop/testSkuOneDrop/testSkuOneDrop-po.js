function checkParentSku() {
   // Provera da li je dobar Parent SKU
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU TG140G');
   browser.sleep(500);
}

function checkFirstChildSku() {
   // Provera da li je dobar SKU za prvi Child
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU TG140F3G');
   browser.sleep(500);
}

function chooseSecondOption() {
   // Izaberi drugu opciju iz dropa 
   element(by.name('super_attribute[412]')).all(by.tagName('option')).get(2).click();
   browser.sleep(2000);
}

function checkSecondChildSku() {
   // Provera da li je dobar SKU za drugi Child
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU TG140C1G');
   browser.sleep(500);
}


module.exports = {
   checkParentSku,
   checkFirstChildSku,
   chooseSecondOption,
   checkSecondChildSku,

}