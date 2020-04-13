function lendOnBadlands() {
   // Dolazak na Badlands home page 
   browser.get('https://shop.outfitterextreme.com/badlands');
   browser.sleep(3000);
}

function lendOnUserDetailsInAdmin() {
   // Klik to open user menu 
   browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/customer/index/edit/id/27540/');
   browser.sleep(3000);
}

function clickOnAddressesLink() {
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

function clickOnSelectLink() {
   // Klik na Select link da se otvori drop menu 
   element.all(by.className('action-select')).get(1).click();
   browser.sleep(1500);
}

function clickOnDelete() {
   // Klik na Delete iz drop menija 
   element(by.className('action-menu _active')).all(by.className('action-menu-item')).get(3).click();
   browser.sleep(2000);
}

function clickOnOkInModal() {
   // Klik na OK u Confirm Delete modalu 
   element(by.className('action-primary action-accept')).click();
   browser.sleep(2000);
}

module.exports = {
   lendOnBadlands,
   lendOnUserDetailsInAdmin,
   clickOnAddressesLink,
   enterFirstName,
   enterLastName,
   clickOnSelectLink,
   clickOnDelete,
   clickOnOkInModal,
}