function landOnProductDetailsPage() {
   // Dolazak na Product Details page
   browser.get('https://shop.outfitterextreme.com/Browning/side-by-side.html'); 
   browser.sleep(2000);
}

function enterStreet() {
   // Unesi Street  
   element(by.name('street[0]')).clear().sendKeys('4200 N Lamar Blvd Suite 250');
   browser.sleep(1000);
}

function enterCity() {
   // Unesi city 
   element(by.name('city')).clear().sendKeys('Austin');
   browser.sleep(1000);
}

function enterZip() {
   // Unesi ZIP 
   element(by.name('postcode')).clear().sendKeys('78756');
   browser.sleep(1000);
}

function clickUnitedParcelService(){
   // Klik on United Parcel Service opciju
   element(by.id('label_carrier_GND_ups')).click();
   browser.sleep(2000);
}

function checkUnitedParcelMethodOnPaymentPage() {
   // Provera United Parcel shipping metode na Payment strani
   var xxx = element(by.className('totals shipping excl')).element(by.className('value'));
   expect(xxx.getText()).toEqual('United Parcel Service - Ground');
   browser.sleep(100);
}

function landOnShippingPage() {
   // Dolazak na Shipping page
   browser.get('https://shop.outfitterextreme.com/Browning/checkout/#shipping'); 
   browser.sleep(2000);
}

function clickUnitedStatesPostalService(){
   // Klik on United States Postal Service opciju
   element(by.id('label_method_4_usps')).click();
   browser.sleep(2000);
}

function checkUnitedStatesPostalService() {
   // Provera United States Postal shipping metode na Payment strani
   var xxx = element(by.className('totals shipping excl')).element(by.className('value'));
   expect(xxx.getText()).toEqual('United States Postal Service - USPS Retail Ground');
   browser.sleep(1000);
}

function landOnAddressBookPage() {
   // Dolazak na Address Book page
   browser.get('https://shop.outfitterextreme.com/Browning/customer/address/'); 
   browser.sleep(2000);
}

function clickLastDeleteAddress() {
   //  Klik na Poslednje Delete Address dugme
   element.all(by.className('action delete')).get(0).click();
   browser.sleep(3000);
}

module.exports = {
   landOnProductDetailsPage,
   enterStreet,
   enterCity,
   enterZip,
   clickUnitedParcelService,
   checkUnitedParcelMethodOnPaymentPage,
   landOnShippingPage,
   clickUnitedStatesPostalService,
   checkUnitedStatesPostalService,
   landOnAddressBookPage,
   clickLastDeleteAddress,
}