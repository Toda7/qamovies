function clickOnInviteField() {
    // klik na group Invite polje
    element(by.className('input-field')).click();
}

getRandomEmail = function () {
    // dobijanje random emaila
    var strValues = "abcdefghijk123456789";
    var strEmail = "";
    for (var i = 0; i < strValues.length; i++) {
        strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
    }
    return strEmail + "@boston.com" 
};

function randomEmail() {
    // unosenje random emaila
    element(by.css('.input-field input[type=email]')).sendKeys(getRandomEmail(5));
}

function clickOnInviteButton() {
    // klik na Invite dugme
    element(by.className('btn')).click();
}

function checkSnackbarInvite() {
    // proverava success poruke za slanje invita
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.snackbar.sb_message'), 'Invite sent!'), 2000);
}

module.exports = {
    clickOnInviteField,
    clickOnInviteButton,
    checkSnackbarInvite,
    randomEmail,

}