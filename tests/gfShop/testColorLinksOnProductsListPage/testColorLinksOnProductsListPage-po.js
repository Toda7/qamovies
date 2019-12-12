function lendOnProductsLinks() {
   // Dolazak na list of products
browser.get('https://shop.outfitterextreme.com/hsprecision/stocks.html'); 
browser.sleep(2000);
}

function clickOnMore(){
   // Klik on More link for first product
   element(by.className('swatch-more')).click();
   browser.sleep(2000);
}

function clickOnLastColorForFirstProduct(){
   // Klik on last color for first product
   element(by.id('option-label-first_lite_color-503-item-6305')).click();
   browser.sleep(300);
}

function clickOnAddToCart(){
   // Klik on Add to cart 
   element(by.className('action tocart primary')).click();
   browser.sleep(3000);
}

function clickOnAddToCart(){
   // Klik on Add to cart 
   element(by.className('action tocart primary')).click();
   browser.sleep(3000);
}

function checkProductURL() {
   // Provera product URL-a
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/hsprecision/pst067-remington-700-and-pro-series-2000-short-action-detachable-box-stock.html'), 5000);
}

function checkSku() {
   // Provera SKU-a
   var xxx = element(by.className('product attribute sku'));
   expect(xxx.getText()).toEqual('SKU PST067-Brown wBlack');
}


module.exports = {
   lendOnProductsLinks,
   clickOnMore,
   clickOnLastColorForFirstProduct,
   clickOnAddToCart,
   checkProductURL,
   checkSku,
}


