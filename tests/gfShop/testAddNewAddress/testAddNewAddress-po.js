function clickToOpenUserMenu() {
   // Klik to open user menu 
   element(by.id('header-avatar')).click();
   browser.sleep(3000);
}

function clickOnMyAccountLink() {
   // Klik on my account from user menu
   element(by.partialLinkText('My Account')).click();
}

function checkMyAccountURL() {
   // Provera da li se ucitao My Account URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/customer/account/'), 5000);
}

function clickAddressBook() {
   // Klik on Address Book
   element(by.partialLinkText('Address Book')).click();
   browser.sleep(3000);
}

function checkAddressBookURL() {
   // Provera da li se ucitao Address Book URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/customer/address/'), 5000);
}

function clickAddNewAddress() {
   // Klik on Add New Address button
   element(by.className('action primary add')).click();
   browser.sleep(3000);
}

function checkAddNewAddressURL() {
   // Provera da li se ucitao Add New Address URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/customer/address/new/'), 5000);
}

function enterPhoneNumber() {
   // Unesi Phone Number 
   element(by.id('telephone')).clear().sendKeys('555333');
   browser.sleep(1000);
}

function enterStreet() {
   // Unesi Street  
   element(by.id('street_1')).clear().sendKeys('Street 1');
   browser.sleep(1000);
}

function enterCity() {
   // Unesi Street  
   element(by.id('city')).clear().sendKeys('New York');
   browser.sleep(1000);
}


function clickProvince() {
   //  Klik on Privince link to get drop down options
   element(by.className('validate-select required-entry')).click(); 
   browser.sleep(6000);
}


function clickToSelectProvince() {
   //  Klik to select option from drop
   element(by.css('select#region_id.validate-select.required-entry')).all(by.tagName('option')).get(42).click(); 
   // element(by.css('select#authnetcim-card-id.select')).click();
   browser.sleep(6000);
}

function enterZip() {
   // Unesi Zip  
   element(by.id('zip')).clear().sendKeys('90001');
   browser.sleep(1000);
}

function clickOnSave() {
   // Klik on Save button  
   element(by.className('action save primary')).click();
   browser.sleep(1000);
}

function checkIsAddressIsSaved() {
// Da li se pojavila success poruka saved
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('.message-success.success.message'), 'You saved the address.'), 5000);
}



 module.exports = {
   clickToOpenUserMenu,
   clickOnMyAccountLink,
   checkMyAccountURL,
   clickAddressBook,
   checkAddressBookURL,
   clickAddNewAddress,
   checkAddNewAddressURL,
   enterPhoneNumber,
   enterStreet,
   enterCity,
   clickProvince,
   clickToSelectProvince,
   enterZip,
   clickOnSave,
   checkIsAddressIsSaved,
 }