function enterWrongCouponCode()  {
   //Unesi pogresan kod kupona
   element(by.id('coupon_code')).sendKeys('ATQA Coupon');
   browser.sleep(2000);
}

function checkValidationMessage() {
   // Da li se pojavila validation poruka za pogresan kod kupona
   var xxx = element.all(by.className('messages')).get(1);
   expect(xxx.getText()).toEqual('The coupon code "ATQA Coupon" is not valid.');
   browser.sleep(1000);
}

function checkShippingPrice1() {
   // Provera shipping cene na Shipping strani
   var xxx = element.all(by.className('price')).get(1);
   expect(xxx.getText()).toEqual('$10.00');
   browser.sleep(1000);
}

function checkShippingPrice2() {
   // Provera shipping cene na Payment strani
   var xxx = element(by.className('totals shipping excl'));
   expect(xxx.getText()).toEqual('Shipping\nFlat Rate - Fixed\n$10.00');
   browser.sleep(1000);
}

function landOnFirearmTacticalPage() {
   // Dolazak na Firearm Tactical page 
   browser.get('https://shop.outfitterextreme.com/truglo/firearm-tactical.html');
   browser.sleep(2000);
}

function emptyCart() {
   //Isprazni korpu
   element(by.className('action delete')).click();
   browser.sleep(2000);
}

function confirmDelete() {
   //  Klik OK za potvrdu brisanja
   element(by.buttonText('OK')).click();
   browser.sleep(2000);
}

module.exports = {
   enterWrongCouponCode,
   checkValidationMessage,
   checkShippingPrice1,
   checkShippingPrice2,
   landOnFirearmTacticalPage,
   emptyCart,
   confirmDelete,
}