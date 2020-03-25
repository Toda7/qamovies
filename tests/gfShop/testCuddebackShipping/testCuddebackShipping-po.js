function landOnCuddebackShop() {
    // Dolazak na Bowfishing page
    browser.get('https://shop.outfitterextreme.com/cuddeback');
    browser.sleep(2000)
}

function clickOnCuddeLink() {
    // klik na List View Producta 
    element(by.partialLinkText('CuddeLink')).click();
    browser.sleep(5000);
 }

 function click1Product() {
    // Klik na Cetvrti proizvod 
    element(by.className('column main')).all(by.className('product-image-photo')).get(0).click();
    browser.sleep(2000);
 }
 
 function clickAddToCart() {
    // klik na Add to cart 
    element(by.className('action primary tocart btn-lg')).click();
    browser.sleep(2000);
 }

 function clickGoToCheckout() {
    // Klik na Go to Checkout dugme u cartu
    element(by.buttonText('Go to Checkout')).click();
    browser.sleep(2000);
 }

 function checkShipping1Product(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dobar shipping za 1 product
    var xxx = element(by.className('price'));
   expect(xxx.getText()).toEqual('$10.00');
   browser.sleep(2000);
}

function click2Product() {
    // Klik na Cetvrti proizvod 
    element(by.className('column main')).all(by.className('product-image-photo')).get(1).click();
    browser.sleep(2000);
 }

 function click3Product() {
    // Klik na Cetvrti proizvod 
    element(by.className('column main')).all(by.className('product-image-photo')).get(2).click();
    browser.sleep(2000);
 }

 function checkShipping2Product(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dobar shipping za 2 product
    var xxx = element(by.className('price'));
   expect(xxx.getText()).toEqual('$13.00');
   browser.sleep(2000);
}

function checkShipping3Product(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dobar shipping za 3 product
    var xxx = element(by.className('price'));
   expect(xxx.getText()).toEqual('$16.00');
   browser.sleep(2000);
}

function checkShippingPriceWithCoupon() {
    // Provera shipping cene sa iskoriscenim kuponom na My Order strani
    var xxx = element(by.className('shipping'));
    expect(xxx.getText()).toEqual('Shipping & Handling $16.00');
    browser.sleep(1000);
 }

module.exports = {
    landOnCuddebackShop,
    clickOnCuddeLink,
    click1Product,
    clickAddToCart,
    clickGoToCheckout,
    checkShipping1Product,
    click2Product,
    checkShipping2Product,
    click3Product,
    checkShipping3Product,
    checkShippingPriceWithCoupon,
}