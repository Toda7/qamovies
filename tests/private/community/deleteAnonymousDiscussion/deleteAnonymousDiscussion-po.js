function enterSearchWord() {
   //  Unesi rec za pretragu u Search polje
   element(by.id('navbar_search_id')).clear().sendKeys('Anonymoussssly');
   browser.sleep(2000);
}
function clickAction() {
   // Klik na Action menu
   element(by.className('dropdown_menu')).click(); 
   browser.sleep(1000);
}
function clickDelete() {
   //  Klikni na Delete dugme
   element(by.cssContainingText('li.collection-item', 'Delete')).click();
   browser.sleep(1000);
}
function checkSuccess(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je uspesno obrisana diskusija
   browser.wait(EC.textToBePresentInElement($('.card-content'), 'Excellent work. You are all caught up!'), 5000);
   browser.sleep(2000);
}  
module.exports = {
   enterSearchWord,
   clickAction,
   clickDelete,
   checkSuccess,
}