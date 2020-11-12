function enterCity() {
   // Unesi Street  
   element(by.id('city')).clear().sendKeys('New Jersey');
}

function clickToSelectProvince() {
   //  Klik to select option from drop
   element(by.css('select#region_id.validate-select.required-entry')).all(by.tagName('option')).get(41).click(); 
   // element(by.css('select#authnetcim-card-id.select')).click();
}

function enterZip() {
   // Unesi Zip  
   element(by.id('zip')).clear().sendKeys('07101');
}

function lendOnProductThatHasRestricted(){
   // Dolazak na product details 
   browser.get('https://shop.outfitterextreme.com/nemoequipment/spike-1p-ultralight-tent.html'); 
}

function clickOnRestrictedAddress() {
   // Klik on restricted address to select it
   element.all(by.className('action action-select-shipping-item')).last().click();
}

function checkRestrictedMessage(){ 
   // Provera da li se pojavila restricted message 
      var xxx = element(by.className('message error'));
      expect(xxx.getText()).toEqual('We are sorry, Spike and Chogori can not be shipped to New Jersey.');
}

function clickOnDeletetLink() {
   // Klik on delete link for address
   element.all(by.partialLinkText('DELETE')).get(0).click();
}

 module.exports = {
   enterCity,
   clickToSelectProvince,
   enterZip,
   lendOnProductThatHasRestricted,
   clickOnRestrictedAddress,
   checkRestrictedMessage,
   clickOnDeletetLink,
 }