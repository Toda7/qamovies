function checkDicountPriceOnHomeForFirstProduct() {
   // Provera cene za prvi prozivod na strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(0);
   expect(xxx.getText()).toEqual('$69.88');
   browser.sleep(3000);
}

function checkRegularPriceOnHomeForFirstProduct() {
   // Provera regular cene za prvi prozivod na home strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(1);
   expect(xxx.getText()).toEqual('$133.00');       
   browser.sleep(3000);

}

function checkDicountPriceOnProductLisForFirstProduct() {
   // Provera discount cene za prvi prozivod na list of product strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(0);
   expect(xxx.getText()).toEqual('$8.55');
   browser.sleep(3000);
}       


function checkRegularPriceOnProductListForFirstProduct() {
   // Provera regular cene za prvi prozivod na list of product strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(1);
   expect(xxx.getText()).toEqual('$17.00');
   browser.sleep(3000);
}

function checkDicountPriceOnProductDetailsForFirstProduct() {
   // Provera cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.className('price')).get(0);
   expect(xxx.getText()).toEqual('$11.82');
   browser.sleep(3000);
}

function checkRegularPriceOnProductDetailstForFirstProduct() {
   // Provera regular cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.className('price')).get(1);
   expect(xxx.getText()).toEqual('$23.00');
   browser.sleep(3000);
}

function checkDicountPriceInMiniCartDetailsForFirstProduct() {
   // Provera cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.css('.block-minicart .minicart-items .minicart-price .price')).get(0);
   expect(xxx.getText()).toEqual('$11.82');
   browser.sleep(3000);
}

function checkRegularPriceInMiniCartDetailstForFirstProduct() {
   // Provera regular cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.css('.block-minicart .minicart-items .minicart-price .price')).get(1);
   expect(xxx.getText()).toEqual('$23.00');
   browser.sleep(3000);
}

function checkDicountPriceOnViewAndEditpageForFirstProduct() {
   // Provera cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.css('span.cart-price')).get(0);
   expect(xxx.getText()).toEqual('$11.82');
   browser.sleep(3000);
}

function checkRegularPriceOnViewAndEditpagetForFirstProduct() {
   // Provera regular cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.className('col price')).get(1).all(by.className('price')).get(1)
   expect(xxx.getText()).toEqual('$23.00');
   browser.sleep(3000);
}

function clickToOpenItemsSection() {
   // element(by.className('block items-in-cart')).click();
   // browser.sleep(3000);
   element(by.className('block items-in-cart')).element(by.className('title')).click();
}

function checkDicountPriceOCheckouttForFirstProduct() {
   // Provera regular cene za prvi prozivod na checkout strani
   var xxx = element(by.className('block items-in-cart')).all(by.className('price')).get(0)
   expect(xxx.getText()).toEqual('$11.82');
   browser.sleep(3000);
}



 module.exports = {
   checkRegularPriceOnHomeForFirstProduct,
   checkDicountPriceOnHomeForFirstProduct,
   checkDicountPriceOnProductLisForFirstProduct,
   checkRegularPriceOnProductListForFirstProduct,
   checkDicountPriceOnProductDetailsForFirstProduct,
   checkRegularPriceOnProductDetailstForFirstProduct,
   checkDicountPriceInMiniCartDetailsForFirstProduct,
   checkRegularPriceInMiniCartDetailstForFirstProduct,
   checkDicountPriceOnViewAndEditpageForFirstProduct,
   checkRegularPriceOnViewAndEditpagetForFirstProduct,
   clickToOpenItemsSection,
   checkDicountPriceOCheckouttForFirstProduct,
}