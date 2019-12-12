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

function clearFirstNameField() {
   // Brisanje texta iz first name polja
   element(by.id('firstname')).clear();
   browser.sleep(1000);
}

function clearLastNameField() {
   // Brisanje texta iz last name polja
   element(by.id('lastname')).clear();
   browser.sleep(1000);
}

function checkRequiredMessageForFirstName(){
   // provera da li se ucitala required message for phone
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('div#firstname-error.mage-error'), 'This is a required field.'), 5000);
}

function checkRequiredMessageForLastName(){
   // provera da li se ucitala required message for phone
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('div#lastname-error.mage-error'), 'This is a required field.'), 5000);
}


function checkRequiredMessageForPhone(){
// provera da li se ucitala required message for phone
var EC = protractor.ExpectedConditions;
browser.wait(EC.textToBePresentInElement($('div#telephone-error.mage-error'), 'This is a required field.'), 5000);
}

function checkRequiredMessageForStreet(){
   // provera da li se ucitala required message for street
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('div#street_1-error.mage-error'), 'This is a required field.'), 5000);
}

function checkRequiredMessageForcity(){
   // provera da li se ucitala required message for city
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('div#city-error.mage-error'), 'This is a required field.'), 5000);
}

function checkRequiredMessageForState(){
   // provera da li se ucitala required message for State
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('div#region_id-error.mage-error'), 'Please select an option.'), 5000);
}

function checkRequiredMessageForZip(){
   // provera da li se ucitala required message for zip
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('div#zip-error.mage-error'), 'This is a required field.'), 5000);
}

function checkAddNewAddressURL() {
   // Provera da li se ucitao Add New Address URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/customer/address/new/'), 5000);
}

function enterFirstName() {
   // Unesi Phone Number 
   element(by.id('firstname')).sendKeys('Bradly');
   browser.sleep(1000);
}

function enterLastName() {
   // Unesi Phone Number 
   element(by.id('lastname')).sendKeys('Seales');
   browser.sleep(1000);
}

function enterPhoneNumber() {
   // Unesi Phone Number 
   element(by.id('telephone')).sendKeys('555333');
   browser.sleep(1000);
}

function enterStreet() {
   // Unesi Street  
   element(by.id('street_1')).sendKeys('Street 1');
   browser.sleep(1000);
}

function enterCity() {
   // Unesi Street  
   element(by.id('city')).sendKeys('New York');
   browser.sleep(1000);
}


function clickProvince() {
   //  Klik on Privince link to get drop down options
   element(by.className('validate-select required-entry')).click(); 
   browser.sleep(6000);
}


function clickToSelectProvince() {
   //  Klik to select option from drop
   element(by.css('select#region_id.validate-select.required-entry')).all(by.tagName('option')).get(43).click(); 
   browser.sleep(6000);
}

function enterZip() {
   // Unesi Zip  
   element(by.id('zip')).sendKeys('90001');
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
   enterFirstName,
   enterLastName,
   enterPhoneNumber,
   enterStreet,
   enterCity,
   clickProvince,
   clickToSelectProvince,
   enterZip,
   clickOnSave,
   checkIsAddressIsSaved,
   checkRequiredMessageForPhone,
   checkRequiredMessageForStreet,
   checkRequiredMessageForcity,
   checkRequiredMessageForState,
   checkRequiredMessageForZip,
   clearFirstNameField,
   clearLastNameField,
   checkRequiredMessageForFirstName,
   checkRequiredMessageForLastName
 }