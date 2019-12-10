function lendOnProductDetails(){
   // Dolazak na product details 
   browser.get('https://shop.outfitterextreme.com/hornady/223-rem-55-gr-v-max.html'); 
   browser.sleep(5000);
}

function clickOnNewAddressButton(){
   // Klik on NEW ADDRESS button
   element(by.className('action action-show-popup')).click();
   browser.sleep(6000);
}

function enterStreet() {
   // Unesi Street  
   element(by.name('street[0]')).clear().sendKeys('PO Box 2413');
   browser.sleep(3000);
}

function enterCity() {
   // Unesi city 
   element(by.name('city')).clear().sendKeys('Texas');
   browser.sleep(3000);
}

function clickToSelectProvince() {
   //  Klik to select option from drop
   element(by.name('shippingAddress.region_id')).all(by.tagName('option')).get(57).click(); 
   // element(by.css('select#authnetcim-card-id.select')).click();
   browser.sleep(6000);
}

function enterZip() {
   // Unesi city 
   element(by.name('postcode')).clear().sendKeys('90001');
   browser.sleep(3000);
}

function enterPhoneNumber() {
   // Unesi phone number 
   element(by.name('telephone')).clear().sendKeys('333444');
   browser.sleep(3000);
}

function clickOnSaveNewAddressButton(){
   // Klik on SAVE NEW ADDRESS button
   element(by.className('action primary action-save-address')).click();
   browser.sleep(5000);
}

 module.exports = {
   lendOnProductDetails,
   clickOnNewAddressButton,
   enterStreet,
   enterCity,
   clickToSelectProvince,
   enterZip,
   enterPhoneNumber,
   clickOnSaveNewAddressButton,
 }


 