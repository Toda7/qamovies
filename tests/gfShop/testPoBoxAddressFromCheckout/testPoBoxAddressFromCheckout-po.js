function lendOnProductDetails(){
   // Dolazak na product details 
   browser.get('https://shop.outfitterextreme.com/coldsteel/fgx-ring-dagger.html'); 
}

function clickOnNewAddressButton(){
   // Klik on NEW ADDRESS button
   element(by.className('action action-show-popup')).click();
}

function enterStreet() {
   // Unesi Street  
   element(by.name('street[0]')).clear().sendKeys('PO Box 2413');
   browser.sleep(2000);
}

function enterCity() {
   // Unesi city 
   element(by.name('city')).clear().sendKeys('Texas');
}

function clickToSelectProvince() {
   //  Select Texas from drop
   element(by.name('shippingAddress.region_id')).all(by.tagName('option')).get(57).click(); 
   // element(by.css('select#authnetcim-card-id.select')).click();
}

function enterZip() {
   // Unesi city 
   element(by.name('postcode')).clear().sendKeys('90001');
}

function enterPhoneNumber() {
   // Unesi phone number 
   element(by.name('telephone')).clear().sendKeys('333444');
}

function clickOnSaveNewAddressButton(){
   // Klik on SAVE NEW ADDRESS button
   element(by.className('action primary action-save-address')).click();
}

function clickOnShipHereButtonForFirstAddress(){
   // Klik na Ship here button za prvi adresu
   element(by.className('action action-select-shipping-item')).click();
}

function clickOnSpace(){
   // Klik na SPACE
   element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
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
   clickOnShipHereButtonForFirstAddress,
   clickOnSpace,
 }


 