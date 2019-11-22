
function clickTasksTab() {
    element(by.partialLinkText('Tasks')).click();
    browser.sleep(2000);
 }

function clickOnTask() {
    element(by.partialLinkText('MyTitle')).click();
    // element(by.className('tasks_table')).clisck();
    browser.sleep(2000);
} 
function clickOnThreeDots() {
    //  Klik na three dots 
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/section[1]/div/div[1]/div/div/span')).click();
    browser.sleep(2000);
 }

 function clickOnEditButton() {
    //  Klik na complete link from side menu
    element(by.xpath('//*[@id="main_wrapper"]/div/div/div[2]/section[1]/div/div[1]/div/div/ul/li[1]')).click();
    browser.sleep(2000);
 }

function deleteTextFromTheField() {
    // Brisanje texa iz polja
    element(by.name('title')).clear();
    browser.sleep(2000);
}

function enterEditedTitleOfTask() {
    // Unosenje email u invite email field
    element(by.name('title')).sendKeys('EditedMyTitle');
    browser.sleep(2000);
}

function clickOnSaveButton() {
    element(by.className('btn-flat right save')).click();
    browser.sleep(2000);
}

function checkIsTitleIsPresent(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-title'), 'EditedMyTitle'), 5000);
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