function clickOnSaveChanges() {
    //  Klik n Discard Changes button
    element(by.buttonText('Save Changes')).click();
    browser.sleep(2000);
}

function checkIsAnswerEdited(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se text nije promenio nakon sto smo kliknuli na discard changes
    browser.wait(EC.textToBePresentInElement($('.input-field'), 'This is first edited text'), 7000);
}   

module.exports = {
    clickOnSaveChanges,
    checkIsAnswerEdited,
}