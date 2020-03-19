function checkGroupMembersCount() {
    // Provera broj usera u grupi
    var xxx = element(by.className('count'));
    expect(xxx.getText()).toEqual('49');
}

function enterUsersName() {
    // unos imena usera
    element(by.css('.input-field input[type=text]')).sendKeys('Miho Gru');
}

function checkSearchedUser() {
    // Provera ime usera kojeg smo trazili
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection .collection-item.avatar '), 'Miho Gru'), 5000);
}

function clickOnRemoveIcon() {
    // klik na remove icon
    element(by.className('secondary-content ban_person')).click();
}

function confirmRemoveUser() {
    // klik na Remove user
    element(by.buttonText('Remove user')).click();
}

function checkSnackbarRemoveUser() {
    // cekiranje sussces poruke za Removed user
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.snackbar.sb_message'), 'Person removed.'), 5000);
}

function checkGroupMembersCountRemoved() {
    // Provera broj usera u grupi
    var xxx = element(by.className('count'));
    expect(xxx.getText()).toEqual('48');
}

function checkSearchResoult() {
    // provera da user nije na listi
    var xxx = element(by.className('row'));
    expect(xxx.getText()).toEqual("Could not find members that match 'Miho Gru'");
}

function enterEmail() {
    // unos emaila
    element(by.name('email')).sendKeys('mpesko@cbancnetwork.com');
}

function enterPass() {
    // unos passworda
    element(by.name('password')).clear().sendKeys('test1234');
}

function landOnAdminPeople() {
    // dolazak u Admin
    browser.get('https://qa.cbancnetwork.com/admin/people/');
    browser.sleep(3000);
}

function clickOnSearchField() {
    // klik na search polje
    element(by.className('input-field')).click();
}

function findUser() {
    // unos imena usera
    element(by.name('q')).sendKeys('Gru');
}

function clickOnViewPerson() {
    // klik na view person
element(by.partialLinkText('VIEW PERSON')).click();

}

function clickTabGroups() {
    // klik na Tab Groups
    element.all(by.className('tab')).get(1).click();
}

function clickOnJoinToGroup() {
    //  Klikni Join to group
    element.all(by.className('btn-flat blue-text')).get(2).click();
    browser.sleep(500);
}

function checkMessageSuccess() {
    // cekiranje success poruke za Grupe
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('alert alert-success'), 'Groups were updated.'), 5000)
}

function clickOnSignIn() {
    element(by.className('sign_in')).click();
 }

module.exports = {
    checkGroupMembersCount,
    enterUsersName,
    checkSearchedUser,
    clickOnRemoveIcon,
    confirmRemoveUser,
    checkSnackbarRemoveUser,
    checkGroupMembersCountRemoved,
    checkSearchResoult,
    enterEmail,
    enterPass,
    landOnAdminPeople,
    clickOnSearchField,
    findUser,
    clickOnViewPerson,
    clickTabGroups,
    clickOnJoinToGroup,
    checkMessageSuccess,
    clickOnSignIn,
    

}