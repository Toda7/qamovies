function clickDeleteLink() {
    //  Klik na delete link iz drop down menija
    element(by.xpath('//*[@id="root"]/div/div[2]/div/div[2]/ul/li[2]/div[3]/div[2]/div/ul/li[2]')).click();
    browser.sleep(2000);
 }
 function checkSuccessfullyMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.success'), 'Assessment START UP TEMPLATE was successfully deleted.'), 5000);
    browser.sleep(2000);
}   
 function checkNoAssessmentMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'There are no completed assessments'), 5000);
    browser.sleep(2000);
}   

 module.exports = {
    clickDeleteLink,
    checkSuccessfullyMessage,
    checkNoAssessmentMessage,
 }
