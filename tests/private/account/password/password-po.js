function clickOnPasswordTab() {
    element(by.partialLinkText('PASSWORD')).click();
    // Klik na Password tab
    browser.sleep(2000);
}

function clickOnPassResetBtn() {
    element(by.className('pass_reset', 'Reset Password')).click();
    // klik na Pass Reset btn
    browser.sleep(2000);
}

function checkSuccessMessageForPassreset(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je poslat email za reset pass
    browser.wait(EC.textToBePresentInElement($('.message.success'), 'just sent you an email to reset your password. (1@chicago.com)'), 7000);
}

module.exports = {
    clickOnPasswordTab,
    clickOnPassResetBtn,
    checkSuccessMessageForPassreset,

}
