// function checkRequiredMessageForBox(){
//    // provera da li se ucitala required message za box
//    var EC = protractor.ExpectedConditions;
//    browser.wait(EC.textToBePresentInElement($('div#super_attribute[210]-error.mage-error'), 'This is a required field.'), 5000);
// }

function checkRequiredMessageForBox() {
   // Provera cene
   var xxx = element(by.id('super_attribute[210]-error'));
   expect(xxx.getText()).toEqual('This is a required field.');
}

function clearQtyField() {
   // Brisanje broja iz qty polja
   element(by.id('qty')).clear();
   browser.sleep(1000);
}

function checkRequiredMessageForQTY(){
   // Provera da li se ucitala required message jer nema broja u QTY
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('div#qty-error.mage-error'), 'Please enter a valid number in this field'), 5000);
}

function EnterQty() {
   // Unesi broja iz qty polja
   element(by.id('qty')).sendKeys('1');
   browser.sleep(1000);
}

function landOnProductDetailsPage() {
   // Dolazak na product koji ima drop 
   browser.get('https://shop.outfitterextreme.com/truglo/tru-see-splatter-target-5-bullseye.html'); 
   browser.sleep(2000);
}
function checkRequiredMessageForDrop() {
   // Provera cene
   var xxx = element(by.id('attribute414-error'));
   expect(xxx.getText()).toEqual('This is a required field.');
}

function selectOptionFromDrop() {
   // Select option from drop
   element(by.css('select#attribute414.super-attribute-select')).all(by.tagName('option')).get(1).click(); 
}


 module.exports = {
   checkRequiredMessageForBox,
   clearQtyField,
   checkRequiredMessageForQTY,
   EnterQty,
   landOnProductDetailsPage,
   checkRequiredMessageForDrop,
   selectOptionFromDrop,
 }