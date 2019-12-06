function clickOnAdminland() {
    // Click na Adminland
    element(by.partialLinkText('Adminland')).click();
    browser.sleep(5000);
}

function checkAdminlandURL() {
    // Provera da li se ucitao Adminland URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/file_vault/vault/8a1fd448-0185-42bd-bfba-c27c0efa0c71/users'), 5000);
}

function clickOnAddUserButton() {
    // Click na Add User dugme
    element(by.className('btn-floating btn-large blue')).click();
    browser.sleep(5000);
}

function insertEmailInSearchUserField() {
    // Unosenje user emaila u search polje
    element(by.name('q')).sendKeys('1@austin.com');
    browser.sleep(5000);
}

function clickOnPlus() {
    // Click na +
    element(by.className('btn-flat secondary-content')).click();
    browser.sleep(5000);
}

function clickOnOk() {
    // Click da potvrdis dodavanje Usera
    element(by.className('btn-flat right', 'Ok')).click();
    browser.sleep(5000);
}

function clickOnAddedUser() {
    // Click na upravo dodatog Usera
    element(by.className('person_icon', 'Austin Numero Uno User FI org')).click();
    browser.sleep(5000);
}

function clickOnThreeDots() {
    // Click da potvrdis dodavanje Usera
    element(by.className('page_menu')).click();
    browser.sleep(5000);
}

function clickOnRemoveUser() {
    // Click da removujes usera
    element(by.className('dropdown-content z-depth-3 expanded')).all(by.className('collection-item')).get(2).click();
    browser.sleep(5000);
}

function clickOnOkToRemove() {
    // Click da potvrdis remove Usera
    element(by.className('btn-flat right', 'Ok')).click();
    browser.sleep(5000);
}

function checkIsUserThere(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je User u listi
    browser.wait(EC.textToBePresentInElement($('div.user_item.collection-item.avatar'), 'Austin Numero Uno User FI org'), 5000);
}

module.exports = {
    clickOnAdminland,
    checkAdminlandURL,
    clickOnAddUserButton,
    insertEmailInSearchUserField,
    clickOnPlus,
    clickOnOk,
    clickOnAddedUser,
    clickOnThreeDots,
    clickOnRemoveUser,
    clickOnOkToRemove,
    checkIsUserThere,
   
}