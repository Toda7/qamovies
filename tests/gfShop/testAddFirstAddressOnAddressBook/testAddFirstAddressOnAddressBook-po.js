function lendOnBadlands() {
   // Klik to open user menu 
browser.get('https://shop.outfitterextreme.com/badlands');
browser.sleep(3000);
}

function lendOnUserDetailsInAdmin() {
   // Klik to open user menu 
browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/customer/index/edit/id/27540/');
browser.sleep(3000);
}

function clickOnAddressesLink(){
   // Klik na Addresses link 
  element(by.partialLinkText('Addresses')).click();
   browser.sleep(3000);
}

function enterFirstName() {
   // Unesi Phone Number 
   element(by.id('firstname')).sendKeys('Brent');
   browser.sleep(1000);
}

function enterLastName() {
   // Unesi Phone Number 
   element(by.id('lastname')).sendKeys('Snyder');
   browser.sleep(1000);
}

function clickOnRemoveLink(){
   // Klik na Remove link 
  element(by.className('action-delete')).click();
   browser.sleep(3000);
}

function clickToConfirmDelete(){
   // Klik to confirm delete link 
  element(by.className('action-primary action-accept')).click();
   browser.sleep(3000);
}


 module.exports = {
    lendOnBadlands,
    lendOnUserDetailsInAdmin,
    clickOnAddressesLink,
    enterFirstName,
    enterLastName,
    clickOnRemoveLink,
    clickToConfirmDelete,
 }