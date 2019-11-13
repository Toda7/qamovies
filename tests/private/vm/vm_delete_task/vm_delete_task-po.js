function clickOnTask() {
    element(by.partialLinkText('EditedMyTitle')).click();
    browser.sleep(2000);
} 

function clickOnDeleteButton() {
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/section[1]/div/div[1]/div/div/ul/li[2]')).click();
    browser.sleep(2000);
 }

 function clickOnDeleteToConfirm() {
    element(by.className('btn-flat right save')).click();
    browser.sleep(2000);
}

function checkDeletedMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.col.s10.main'), 'Task successfully deleted.'), 5000);
}   

 module.exports = {
    clickOnDeleteButton,
    clickOnDeleteToConfirm,
    clickOnTask,
    checkDeletedMessage,
 }