function landOnProductPage() {
   // Dolazak na product details page
   browser.get('https://shop.outfitterextreme.com/truglo/archery/spring-shot-bowfishing-rest.html'); 
   browser.sleep(2000);
}

function clickOnCart() {
   // Kslik na cart 
   element(by.className('action showcart')).click();
   browser.sleep(5000);
} 

function enterNumber() {
   // Unos broja Producta
   element(by.css('.block-minicart .minicart-items .item-qty')).clear().sendKeys('1005');
   browser.sleep(5000);
}

function clickOnUpdate() {
   // Klik na update dugme
   element(by.className('update-cart-item')).click();
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
   browser.sleep(3000);
} 

function clickOnDeleteConfirmation() {
   // Potvrda brisanja Producta  
   element(by.className('action-primary action-accept action primary')).click();
   browser.sleep(3000);
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