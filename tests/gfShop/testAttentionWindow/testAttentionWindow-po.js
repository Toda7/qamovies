function landOnProductPage() {
   // Dolazak na product details page
   browser.get('https://shop.outfitterextreme.com/truglo/archery/spring-shot-bowfishing-rest.html'); 
}

function clickOnCart() {
   // Kslik na cart 
   element(by.className('action showcart')).click();
} 

function enterNumber() {
   // Unos broja Producta
   element(by.css('.block-minicart .minicart-items .item-qty')).clear().sendKeys('1000');
}

function clickOnUpdate() {
   // Klik na update dugme
   element(by.className('update-cart-item')).click();
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
   browser.wait(EC.textToBePresentInElement((xxx),'The most you may purchase is 10000.'), 7000);
}

function clickOnOK() {
   // Klik na cart 
   element(by.className('action-primary action-accept')).click();
   browser.sleep(3000);
} 

function clickOnDeleteProductIcon() {
   // Klik on Delete product icon
   element(by.css('a.action.delete')).click();
} 

function clickOnDeleteConfirmation() {
   // Potvrda brisanja Producta  
   element(by.className('action-primary action-accept action primary')).click();
} 

 module.exports = {
   landOnProductPage,
   clickOnCart,
   enterNumber,
   clickOnUpdate,
   checkAttentionTitleOfBox,
   checkAttentionContentOfBox,
   clickOnOK,
   clickOnDeleteProductIcon,
   clickOnDeleteConfirmation,
}