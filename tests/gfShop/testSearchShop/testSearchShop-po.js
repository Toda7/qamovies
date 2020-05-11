function landOnShopHomepage() {
   // Dolazak na Truglo Shop homepage 
   browser.get('https://shop.outfitterextreme.com/truglo');
   browser.sleep(2000);
}

function enterSearchWord1() {
   //  Unesi titanium u search polje
   element(by.id('search')).clear().sendKeys('titanium');
   browser.sleep(2000);
   element(by.id('search')).sendKeys(protractor.Key.ENTER);
   browser.sleep(2000);
}

function checkSuccess1() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobar prvi search 
   var xxx = element.all(by.className('product-item-link')).get(2);
   expect(xxx.getText()).toEqual('TITANIUM X BACKFLIP™ MECHANICAL-BLADE BROADHEADS');
}


function enterSearchWord2() {
   //  Unesi splatter u search polje
   element(by.id('search')).clear().sendKeys('splatter');
   browser.sleep(2000);
   element(by.id('search')).sendKeys(protractor.Key.ENTER);
   browser.sleep(2000);
}

function checkSuccess2() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobar drugi search 
   var xxx = element(by.className('product-item-link'));
   expect(xxx.getText()).toEqual('TRU-SEE™ SPLATTER TARGET');
}

module.exports = {
   landOnShopHomepage,
   enterSearchWord1,
   checkSuccess1,
   enterSearchWord2,
   checkSuccess2,
}