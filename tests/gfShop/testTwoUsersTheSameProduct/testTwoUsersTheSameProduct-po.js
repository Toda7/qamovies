function landProductMyDetailsPageInMagento() {
   // Dolazak na product product details u magentu
   browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/72541/');
}

function landProductMyDetailsPage() {
   // Dolazak na product product details 
   browser.get('https://shop.outfitterextreme.com/cuddeback/cuddelink-black-flash-model.html');
}
function landOnShippingCartPage() {
   // Dolazak na edit cart page 
   browser.get('https://shop.outfitterextreme.com/cuddeback/checkout/cart/');
}


function enterNumbersOfQTY() {
   // Unosenje numbers u qty polje
   browser.wait(element.all(by.className('admin__control-text')).get(4).clear().sendKeys('1'), 10000);
}

function landCheckoutPage() {
   // Pokusaj odlaska na checkout, to bi trebalo da nas redirektuje na edit card stranu
   browser.get('https://shop.outfitterextreme.com/cuddeback/checkout/#shipping');
}

function checkEditCartURL() {
   // Provera da li se ucitao Shipping Cart URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/cuddeback/checkout/cart/#shipping'), 5000);
}

function checkProductOutOfStockMessage() {
   // provera da li se ucitala This product is out of stock. poruka 
   var xxx = element(by.className('cart item message error'));
   expect(xxx.getText()).toEqual('This product is out of stock.');
}

function checkGlobalOutOfStockMessage() {
   // provera da li se ucitala Some of the products are out of stock. poruka 
   var xxx = element(by.className('message message-error error'));
   expect(xxx.getText()).toEqual('Some of the products are out of stock.');
}

module.exports = {
   landProductMyDetailsPageInMagento,
   landProductMyDetailsPage,
   landOnShippingCartPage,
   enterNumbersOfQTY,
   landCheckoutPage,
   checkProductOutOfStockMessage,
   checkGlobalOutOfStockMessage,
   checkEditCartURL,
}