function clickOnAddTask() {
    element(by.partialLinkText('ADD TASK')).click();
    // element(by.buttonText('ADD TASK')).click();
    browser.sleep(2000);
}

function enterTitleOfTask() {
    // Unosenje email u invite email field
    element(by.name('title')).sendKeys('MyTitle');
    browser.sleep(2000);
}

function clickOnLinkedDoc() {
    element(by.className('btn link')).click();
    // element(by.buttonText('ADD TASK')).click();
    browser.sleep(2000);
}

function clickOnPhotoToSelect() {
    element(by.className('doc_option')).click();
    // element(by.buttonText('ADD TASK')).click();
    browser.sleep(2000);
}

function enterDescriptionOfTask() {
    element(by.id('description')).sendKeys('MyDescription');
    browser.sleep(2000);
}

function clickOnUserToAssignTask() {
    element(by.className('option chip')).click();
    browser.sleep(2000);
}

function clickOnCreateTaskButton() {
    element(by.buttonText('CREATE TASK')).click();
    browser.sleep(2000);
}

function checkIsTitleIsPresent(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.tasks_table'), 'MyTitle'), 5000);
}   

module.exports = {
    clickOnAddTask,
    enterTitleOfTask,
    clickOnLinkedDoc,
    clickOnPhotoToSelect,
    enterDescriptionOfTask,
    clickOnUserToAssignTask,
    clickOnCreateTaskButton,
    checkIsTitleIsPresent,
}