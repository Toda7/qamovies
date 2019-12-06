function clickOnSpaceInHeader() {
    // Click na Space u header-u
    element(by.className('pt_text truncate'), 'Protractor').click();
    browser.sleep(5000);
}

function clickOnAddButton() {
    // Click to get options
    element(by.className('btn-floating btn-large')).click();
    browser.sleep(2000);
}

function clickOnAddUser() {
    // Click na Add User
    element(by.className('btn-floating add_user')).click();
    browser.sleep(5000);
}

function checkSpaceUsers(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Space Users tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'SPACE USERS'), 5000);
}

function checkAvailableUsers(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Available Users tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'AVAILABLE USERS'), 5000);
}

function clickOnAvailableUsers() {
    // Click na Available Users
    element(by.className('card-tabs', 'Available Users')).click();
    browser.sleep(5000);
}

function clickToSelectUser() {
    // Click na Usera
    element(by.className('person_icon', 'Vlada Drobnyak')).click();
    browser.sleep(5000);
}

function clickToAddUser() {
    // Click da dodas User
    element(by.className('valign-wrapper dropdown-button', 'Add User')).click();
    browser.sleep(5000);
}

function clickToConfirmAdding() {
    // Click da potvrdis dodavanje Usera
    element(by.className('btn-flat right', 'Ok')).click();
    browser.sleep(5000);
}

function checkIsUserAdded(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je User dodat
    browser.wait(EC.textToBePresentInElement($('div.collection-item.avatar.user_item'), 'Vlada Drobnyak'), 5000);
}

module.exports = {
    clickOnSpaceInHeader,
    clickOnAddButton,
    clickOnAddUser,
    checkSpaceUsers,
    checkAvailableUsers,
    clickOnAvailableUsers,
    clickToSelectUser,
    clickToAddUser,
    clickToConfirmAdding,
    checkIsUserAdded,      
   
   }