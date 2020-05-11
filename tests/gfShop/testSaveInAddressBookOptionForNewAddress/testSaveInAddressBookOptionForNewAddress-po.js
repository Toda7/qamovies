function lendOnProductDetails(){
   // Dolazak na product details 
   browser.get('https://shop.outfitterextreme.com/truglo/omnia-1-4x24-30mm-ir-sp-1pc-illuminated-reticle-tactical-scope.html'); 
   browser.sleep(5000);
}

function enterStreet() {
   // Unesi Street  
   element(by.name('street[0]')).clear().sendKeys('My street 4321');
   browser.sleep(3000);
}

function checkBoxContent() {
   // Provera da li je nasa nova addresa pojavila na Address Book strani
   var xxx = element(by.tagName(`tbody`)).all(by.tagName(`tr`)).get(0);
   expect(xxx.getText()).toEqual(`Bradly Seales My street 4321 Texas United States Texas 90001 333444 EDIT DELETE`);
}

 module.exports = {
   lendOnProductDetails,
   enterStreet,
   checkBoxContent,
 }