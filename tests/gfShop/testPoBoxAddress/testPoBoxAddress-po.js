function lendOnHornady(){
   // Dolazak na hornedy shop page  
   browser.get('https://shop.outfitterextreme.com/hornady'); 
}

function enterCity() {
   // Unesi Street  
   element(by.id('city')).sendKeys('Austin');
   browser.sleep(1000);
}

function enterStreet() {
   // Unesi Street  
   element(by.id('street_1')).clear().sendKeys('PO Box 2413');
   browser.sleep(1000);
}

function lendOnProductDetails(){
   // Dolazak na product details 
   browser.get('https://shop.outfitterextreme.com/hornady/350-legend-170-gr-interlock-american-whitetail.html'); 
}

function clickOnPoBoxAddress() {
   // Klik on restricted address to select it
   element.all(by.className('action action-select-shipping-item')).get(3).click();
   browser.sleep(5000);
}

function clickToSelectProvince() {
   //  Klik to select option from drop
   element(by.css('select#region_id.validate-select.required-entry')).all(by.tagName('option')).get(57).click(); 
   // element(by.css('select#authnetcim-card-id.select')).click();
   browser.sleep(6000);
}

function checkPoBoxNotAllowedMessage(){ 
   // Provera da li se pojavila restricted message 
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('.message.message-error.error'), 'Shipping to P.O. Boxes is not allowed'), 7000);
}

function openMiniCart() {
   // Otvori mini korpu
   element(by.className('action showcart')).click();
   browser.sleep(2000);
}

 module.exports = {
   lendOnHornady,
   enterStreet,
   lendOnProductDetails,
   clickOnPoBoxAddress,
   checkPoBoxNotAllowedMessage,
   clickToSelectProvince,
   openMiniCart,
   enterCity,
 }