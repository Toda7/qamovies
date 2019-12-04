function checkDicountPriceOnHomeForFirstProduct() {
   // Provera cene za prvi prozivod na strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(0);
   expect(xxx.getText()).toEqual('$63.43');
}

function checkRegularPriceOnHomeForFirstProduct() {
   // Provera regular cene za prvi prozivod na home strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(1);
   expect(xxx.getText()).toEqual('$121.00');
}

function checkDicountPriceOnProductLisForFirstProduct() {
   // Provera discount cene za prvi prozivod na list of product strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(0);
   expect(xxx.getText()).toEqual('$8.55');
}

function checkRegularPriceOnProductListForFirstProduct() {
   // Provera regular cene za prvi prozivod na list of product strani
   var xxx = element.all(by.css('.product-item .price-box .price')).get(1);
   expect(xxx.getText()).toEqual('$17.00');
}

function checkDicountPriceOnProductDetailsForFirstProduct() {
   // Provera cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.className('price')).get(0);
   expect(xxx.getText()).toEqual('$11.82');
}

function checkRegularPriceOnProductDetailstForFirstProduct() {
   // Provera regular cene za prvi prozivod na Detailst of product strani
   var xxx = element.all(by.className('price')).get(1);
   expect(xxx.getText()).toEqual('$23.00');
}

 module.exports = {
   checkRegularPriceOnHomeForFirstProduct,
   checkDicountPriceOnHomeForFirstProduct,
   checkDicountPriceOnProductLisForFirstProduct,
   checkRegularPriceOnProductListForFirstProduct,
   checkDicountPriceOnProductDetailsForFirstProduct,
   checkRegularPriceOnProductDetailstForFirstProduct,
}