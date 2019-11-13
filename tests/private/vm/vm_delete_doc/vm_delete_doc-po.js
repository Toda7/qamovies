function clickOnDocLink() {
    //  Klik na photo 
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/div/div[2]/div/div[2]/table/tbody/tr/td[1]')).click();
    browser.sleep(2000);
 }

 function clickOnThreeDots() {
    //  Klik na three dots 
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/div/div[1]/div/div[1]/div/span')).click();
    browser.sleep(2000);
 }

 function clickOnDeleteButton() {
    //  Klik na complete link from side menu
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/div/div[1]/div/div[1]/div/ul/li[2]')).click();
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
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'photo successfully deleted.'), 5000);
}   

 module.exports = {
    clickOnDocLink,
    clickOnThreeDots,
    clickOnDeleteButton,
    clickOnDeleteToConfirm,
    checkSuccessfullyMessage,
 }