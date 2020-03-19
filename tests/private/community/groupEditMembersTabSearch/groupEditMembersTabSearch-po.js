function clickOnSearchField() {
    // klik na Search polje
    element(by.className('input-field search_field')).click();
}

function enterSearchTerm() {
    // unos imena usera
    element(by.css('.input-field input[type=text]')).sendKeys('Zoran');
}

function checkOneResult() {
    // Provera da li smo dobili samo jedan rezultat
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(1);
}

function checkUserName() {
    // Provera ime 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection .collection-item.avatar '), 'Zoran Radmilovic'), 5000);
}

function checkUsersBank() {
    // Provera Userovu banku
    var xxx = element(by.className('info'));
    expect(xxx.getText()).toEqual('Bank of Detroit CU\n($12M | MI)');
}

function checkMemberSince() {
    // Proverava od kada je user u grupi
    var xxx = element(by.className('employee_description'));
    expect(xxx.getText()).toEqual('Actor | in group since Aug 6, 2019');
}

module.exports = {
    clickOnSearchField,
    enterSearchTerm,
    checkOneResult,
    checkUserName,
    checkMemberSince,
    checkUsersBank,

}