function clickOnDiscardChanges() {
    //  Klik n Discard Changes button
    element(by.buttonText('Discard Changes')).click();
    browser.sleep(2000);
}
function clickOnOpenFirstQuestion() {
    //  Klik na complete link from side menu
    element(by.className('inherent_risk')).click();
    browser.sleep(2000);
 }
function checkIsAnswerNotEdited(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se text nije promenio nakon sto smo kliknuli na discard changes
    browser.wait(EC.textToBePresentInElement($('.input-field'), 'Answer on first question'), 7000);
}   

module.exports = {
clickOnDiscardChanges,
clickOnOpenFirstQuestion,
checkIsAnswerNotEdited,

}