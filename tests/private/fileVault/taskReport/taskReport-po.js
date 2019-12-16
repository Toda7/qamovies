function clickOnTaskReport() {
    // Click na Task Report
    element(by.partialLinkText('Task Report')).click();
    browser.sleep(5000);
}

function clickOnAllTasks() {
    // Click na Task Report
    element(by.className('tab', 'All Tasks')).click();
    browser.sleep(5000);
}

function checkIsItURLAllTasks() {
    // Provera da li se ucitao All Tasks URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/tasks?s=all&q='), 5000);
}

function insertTaskNameInAllTasks() {
    // Trazenje taska u All Tasks 
    element(by.name('q')).sendKeys('Protractor');
    browser.sleep(5000);
}

function checkIsItTaskShows() {
    // Provera da li se pojavio task sa trazenim imenom
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Protractor Task 1'), 5000);
}

 function clickOnX() {
    // Click na X
    element(by.className('clear_search enabled', 'close')).click();
    browser.sleep(5000);
}

function clickOnOpenTasks() {
    // Click na Open Task Report
    element(by.css('.tabs.tabs-fixed-width')).all(by.tagName('li')).get(1).click();     
    browser.sleep(5000);
}

function checkIsItURLOpenTasks() {
    // Provera da li se ucitao Open Tasks URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/tasks?s=open&q='), 5000);
}

function insertTaskNameInOpenTasks() {
    // Trazenje taska u Open Tasks 
    element(by.name('q')).sendKeys('Protractor');
    browser.sleep(5000);
}

function checkIsItOpenTaskShows() {
    // Provera da li se pojavio task sa trazenim imenom
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Protractor Task 1'), 5000);
}

function clickOnCompletedTasks() {
    // Click na Task Report
    element(by.css('.tabs.tabs-fixed-width')).all(by.tagName('li')).get(2).click();
    browser.sleep(5000);
}

function checkIsItURLCompletedTasks() {
    // Provera da li se ucitao Completed Tasks URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/tasks?s=done&q='), 5000);
}

function insertTaskNameInCompletedTasks() {
    // Trazenje taska u Completed Tasks 
    element(by.name('q')).sendKeys('Z1');
    browser.sleep(5000);
}

function checkIsItCompletedTaskShows() {
    // Provera da li se pojavio task sa trazenim imenom
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Z1'), 5000);
}

module.exports = {
    clickOnTaskReport,
    clickOnAllTasks,
    checkIsItURLAllTasks,
    insertTaskNameInAllTasks,
    checkIsItTaskShows,
    clickOnX,
    clickOnOpenTasks,
    checkIsItURLOpenTasks,
    insertTaskNameInOpenTasks,
    checkIsItOpenTaskShows,
    clickOnCompletedTasks,
    checkIsItURLCompletedTasks,
    insertTaskNameInCompletedTasks,
    checkIsItCompletedTaskShows, 
   
   }