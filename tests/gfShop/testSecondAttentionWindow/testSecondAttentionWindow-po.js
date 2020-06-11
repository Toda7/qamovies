function clearNumberFromField() {
   // Brisanje broja iz polja
   element(by.css('.block-minicart .minicart-items .item-qty')).clear();
   browser.sleep(5000);
}

function enterNumber() {
   // Unos broja Producta
   element(by.css('.block-minicart .minicart-items .item-qty')).clear().sendKeys('200');
   browser.sleep(5000);
}

function checkAttentionTitleOfBox() {
   // Provera da li se ucitao Attention title u windowsu 
   var EC = protractor.ExpectedConditions;
   var xxx = element.all(by.className('modal-title')).get(1);
   browser.wait(EC.textToBePresentInElement((xxx), 'Attention'), 7000);
}

function checkAttentionContentOfBox() {
   // Provera da li se ucitala poruka u windowsu
   var EC = protractor.ExpectedConditions;
   var xxx = element.all(by.className('modal-content')).get(2);
   browser.wait(EC.textToBePresentInElement((xxx),'The requested qty is not available'), 7000);
}

 module.exports = {
   clearNumberFromField,
   enterNumber,
   checkAttentionTitleOfBox,
   checkAttentionContentOfBox,
}