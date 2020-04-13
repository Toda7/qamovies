function enterEmail() {
    // unos emaila
    element(by.name('email')).sendKeys('mihogrupa@boston.com');
}

function enterPass() {
    // unos passworda
    element(by.name('password')).clear().sendKeys('test1234');
}

function landOnAFTPage() {
    // dolazak na Reputation stranu
    browser.get('https://qa.cbancnetwork.com/community/groups/view/1bfdce90-7151-11e6-abb8-7831c1baaeec');
    browser.sleep(3000);
}

function clickOnLeaveGroup() {
    // klik na Leave group
    element(by.buttonText('Leave Group')).click();
}

function clickOnYes() {
    //  Klik na Yes
    element.all(by.className('btn btn-flat')).get(1).click();
    browser.sleep(1000);
}

module.exports = {
    enterEmail,
    enterPass,
    landOnAFTPage,
    clickOnLeaveGroup,
    clickOnYes,

}