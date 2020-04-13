
function clickTasksTab() {
    element(by.partialLinkText('Tasks')).click();
    browser.sleep(2000);
 }

function clickOnTask() {
    element(by.partialLinkText('MyTitle')).click();
    browser.sleep(2000);
} 
function clickOnThreeDots() {
    element(by.className('dropdown')).click(); 
    browser.sleep(2000);
 }

 function clickOnEditButton() {
    element(by.css('.dropdown-actions-menu')).all(by.tagName('ul li')).get(0).click(); 
    browser.sleep(2000);
 }

function deleteTextFromTheField() {
    element(by.name('title')).clear();
    browser.sleep(2000);
}

function enterEditedTitleOfTask() {
    element(by.name('title')).sendKeys('EditedMyTitle');
    browser.sleep(2000);
}

function clickOnSaveButton() {
    element(by.className('btn-flat right save')).click();
    browser.sleep(2000);
}

function checkIsTitleIsPresent(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-title'), 'EditedMyTitle'), 7000);
}   


module.exports = {
    clickTasksTab,
    clickOnTask,
    clickOnThreeDots,
    clickOnEditButton,
    deleteTextFromTheField,
    enterEditedTitleOfTask,
    clickOnSaveButton,
    checkIsTitleIsPresent,
}