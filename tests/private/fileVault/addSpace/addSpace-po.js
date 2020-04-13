function clickOnFABButton() {
    // Click to add Space
    element(by.className('btn-floating btn-large blue')).click();
    browser.sleep(2000);
}

function checkAddSpaceForm(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se otvorila Add Space Forma
    browser.wait(EC.textToBePresentInElement($('.space_form'), 'Space Name'), 7000);
}

function insertSpaceName() {
    // Unosenje imena Spacea
    element(by.name('space_name')).sendKeys('Protractor');
    browser.sleep(2000);
}

function clickOnCreateButton() {
    // Click to add Space
    element(by.className('btn-flat right hide-on-small-and-down', 'Create Space')).click();
    browser.sleep(2000);
}

function checkConfirmationCard(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila confirmation kartica
    browser.wait(EC.textToBePresentInElement($('.main_card'), 'Protractor space was created'), 7000);
}

function clickOnViewSpaceButton() {
    // Click to view Space
    element(by.className('btn btn-flat', 'View Space')).click();
    browser.sleep(2000);
}

function checkIsSpaceAdded() {
    // Provera da li je Space napravljen
    var xxx = element(by.className('col center')).element(by.tagName('h5'));
    expect(xxx.getText()).toEqual('Protractor');
 }

 module.exports = {
 clickOnFABButton,
 checkAddSpaceForm,
 insertSpaceName,
 clickOnCreateButton,
 checkConfirmationCard,
 clickOnViewSpaceButton,
 checkIsSpaceAdded,

}
