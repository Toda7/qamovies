function enterNumber() {
   // Unos broja Producta
   element(by.css('.block-minicart .minicart-items .item-qty')).clear().sendKeys('200');
   browser.sleep(5000);
}

function checkAttentionTitleOfBox() {
   // Provera da li se ucitao Attention title u windowsu 
   var EC = protractor.ExpectedConditions;
   var xxx = element.all(by.className('modal-title')).get(1);
   browser.wait(EC.textToBePresentInElement((xxx), 'Attention'), 5000);
}

function checkAttentionContentOfBox() {
   // Provera da li se ucitala poruka u windowsu
   var EC = protractor.ExpectedConditions;
   var xxx = element.all(by.className('modal-content')).get(2);
   browser.wait(EC.textToBePresentInElement((xxx),'have as many "SPRING SHOT™ BOWFISHING REST" as you requested.'), 5000);
}

 module.exports = {
   enterNumber,
   checkAttentionTitleOfBox,
   checkAttentionContentOfBox,
}