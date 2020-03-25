function clickOnDocLink() {
    //  Klik na photo 
    element(by.css('.provider_page .sub_items table tr td')).click();
    browser.sleep(2000);
 }

 function clickOnThreeDots() {
    //  Klik na three dots 
    element(by.className('dropdown')).click(); 
    browser.sleep(2000);
 }

 function clickOnDeleteButton() {
    //  Klik na complete link from side menu
    element(by.css('.dropdown-actions-menu')).all(by.tagName('ul li')).get(1).click(); 
    browser.sleep(2000);
 }
 function clickOnDeleteToConfirm() {
    //  Klik na complete link from side menu
    element(by.buttonText('DELETE')).click();
    browser.sleep(2000);
 }
 function checkSuccessfullyMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera dal se ucitala Upload Complete message
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'photo successfully deleted.'), 7000);
}   

 module.exports = {
    clickOnDocLink,
    clickOnThreeDots,
    clickOnDeleteButton,
    clickOnDeleteToConfirm,
    checkSuccessfullyMessage,
 }