function clickOnTask() {
    element(by.partialLinkText('EditedMyTitle')).click();
    browser.sleep(2000);
} 

function clickOnDeleteButton() {
    element(by.css('.dropdown-actions-menu')).all(by.tagName('ul li')).get(1).click(); 
    browser.sleep(2000);
 }

 function clickOnDeleteToConfirm() {
    element(by.className('btn-flat right save')).click();
    browser.sleep(2000);
}

function checkDeletedMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.col.s10.main'), 'Task successfully deleted.'), 7000);
}   

 module.exports = {
    clickOnDeleteButton,
    clickOnDeleteToConfirm,
    clickOnTask,
    checkDeletedMessage,
 }