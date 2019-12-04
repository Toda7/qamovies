function chooseOptionFFL() {
   // Izaberi opciju iz dropa 
   element(by.name('super_attribute[467]')).all(by.tagName('option')).get(4).click();
   browser.sleep(2000);
}

function checkWarningNotice() {
   // Provera da li se ucitao warning notice za FFL proizvode 
   var xxx = element(by.className('notice'));
   expect(xxx.getText()).toEqual('Gun purchasers and owners are responsible for compliance with all Federal, State and local laws governing the purchase, ownership, possession and use of firearms.');
}

function landOnRegularProductDetailsPage() {
   // Dolazak na Regular Product details page 
   browser.get('https://shop.outfitterextreme.com/weatherby/unprimed-brass-20-count.html');
   browser.sleep(2000);
}

function checkImportantNotice() {
   // Provera da li se ucitao important notice za FFL proizvode 
   var xxx = element(by.className('note'));
   expect(xxx.getText()).toEqual('**Important Notice**\nAmmunition is restricted from sale to CT, IL, MA, NJ, NY, New Orleans, LA and Washington DC. You must be 18 or older to purchase ammunition, and 21 or older to purchase handgun ammunition. For safety reasons, we do not accept returns on ammunition. All ammunition is considered hazardous and will be shipped ground, contiguous 48 states only. A street address is required for delivery.');
}

function chooseOptionRegular() {
   // Izaberi opciju iz dropa 
   element(by.name('super_attribute[467]')).all(by.tagName('option')).get(15).click();
   browser.sleep(2000);
}

function checkRestrictionMessage() {
   // Provera da li se ucitao restriction warning
   var xxx = element.all(by.className('messages')).get(2);
   expect(xxx.getText()).toEqual('This product could not be added to your cart since it already contains FFL restricted items - please complete your current transaction, then purchase non-FFL restricted items on another order.');
   browser.sleep(1000);
}

module.exports = {
   chooseOptionFFL,
   checkWarningNotice,
   landOnRegularProductDetailsPage,
   checkImportantNotice,
   chooseOptionRegular,
   checkRestrictionMessage,
}