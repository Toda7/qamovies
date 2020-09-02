function checkShippingPriceWithoutCoupon() {
   // Provera shipping cene bez iskoriscenog kupona
   var xxx = element.all(by.className('price')).get(1);
   expect(xxx.getText()).toEqual('$10.00');
   browser.sleep(1000);
}

function clickApplyDiscountCoupon()  {
   // Klik na Apply Discount Coupon link
   element(by.id('block-discount-heading')).click();
   browser.sleep(1000);
}

function enterCouponCode()  {
   //Unesi kod kupona
   element(by.id('coupon_code')).sendKeys('ATQA_Coupon');
   browser.sleep(2000);
}

function clickApplyDiscount() {
   // Klik on Apply Discount button
   element(by.buttonText('Apply Discount')).click(); 
   browser.sleep(3000);
}

function checkSuccessMessage() {
   // Da li se pojavila poruka da je dobar kod kupona
   var xxx = element.all(by.className('messages')).get(1);
   expect(xxx.getText()).toEqual('You used coupon code "ATQA_Coupon".');
   browser.sleep(1000);
}

function checkShippingPriceWithCoupon() {
   // Provera shipping cene sa iskoriscenim kuponom na Shipping strani
   var xxx = element.all(by.className('price')).get(1);
   expect(xxx.getText()).toEqual('$0.00');
   browser.sleep(1000);
}

function checkShippingPriceWithCoupon2() {
   // Provera shipping cene sa iskoriscenim kuponom na Payment strani
   var xxx = element(by.className('totals shipping excl'));
   expect(xxx.getText()).toEqual('Shipping (ATQA_Coupon)\nFlat Rate - Fixed\n$0.00');
   browser.sleep(1000);
}

function checkShippingPriceWithCoupon3() {
   // Provera shipping cene sa iskoriscenim kuponom na My Order strani
   var xxx = element(by.className('shipping'));
   expect(xxx.getText()).toEqual('Shipping & Handling (ATQA_Coupon) $0.00');
   browser.sleep(1000);
}

function clickToSelectFirstAddressToShip() {
   // Klik na first address to select it as ship address
element.all(by.className('action action-select-shipping-item')).get(1).click();
browser.sleep(5000);
}

function landOnViewAndEditCart() {
   // Vracanje na view and edit cart stranu 
   browser.get('https://shop.outfitterextreme.com/truglo/checkout/cart');
   browser.sleep(2000);
}

module.exports = {
   checkShippingPriceWithoutCoupon,
   clickApplyDiscountCoupon,
   enterCouponCode,
   clickApplyDiscount,
   checkSuccessMessage,
   checkShippingPriceWithCoupon,
   checkShippingPriceWithCoupon2,
   checkShippingPriceWithCoupon3,
   clickToSelectFirstAddressToShip,
   landOnViewAndEditCart,
}