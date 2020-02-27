function enterCity() {
   // Unesi Street  
   element(by.id('city')).clear().sendKeys('New Jersey');
   browser.sleep(1000);
}

function clickToSelectProvince() {
   //  Klik to select option from drop
   element(by.css('select#region_id.validate-select.required-entry')).all(by.tagName('option')).get(41).click(); 
   // element(by.css('select#authnetcim-card-id.select')).click();
   browser.sleep(6000);
}

function enterZip() {
   // Unesi Zip  
   element(by.id('zip')).clear().sendKeys('07101');
   browser.sleep(1000);
}

function lendOnProductThatHasRestricted(){
   // Dolazak na product details 
   browser.get('https://shop.outfitterextreme.com/nemoequipment/spike-1p-ultralight-tent.html'); 
}

function clickOnRestrictedAddress() {
   // Klik on restricted address to select it
   element.all(by.className('action action-select-shipping-item')).get(3).click();
   browser.sleep(1000);
}

function checkRestrictedMessage(){ 
   // Provera da li se pojavila restricted message 
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('.message.message-error.error'), 'Restrictions prevent us from shipping this item to CA, LA, MN, and NJ'), 5000);
}


function clickOnDeletetLink() {
   // Klik on delete link for address
   element.all(by.partialLinkText('DELETE ADDRESS')).get(2).click();
   browser.sleep(3000);
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