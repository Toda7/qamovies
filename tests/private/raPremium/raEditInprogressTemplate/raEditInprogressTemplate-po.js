function clickOnEditLink() {
    //  Klik na edit link iz drop down menu
    element.all(by.css('.in_progress .collection-item.in_progress_assessment .actions .dropdown_menu .dropdown-content .collection .collection-item')).get(0).click();
    browser.sleep(2000);
 }
 function deleteTextFromTheField() {
    // Brisanje texa iz polja
    element(by.className('materialize-textarea')).clear();
    browser.sleep(2000);
}
function enterFirstEditTextInTheSecondAnswerField() {
    // Unosenje prvog text u polje
    element(by.className('materialize-textarea')).sendKeys('This is first edited text');
    browser.sleep(2000);
}
function enterSecondEditTextInTheSecondAnswerField() {
    // Unosenje drugog text u polje
    element(by.className('materialize-textarea')).sendKeys('This is second edited text');
    browser.sleep(2000);
}
function enterThirdEditTextInTheSecondAnswerField() {
    // Unosenje treceg text u polje
    element(by.className('materialize-textarea')).sendKeys('This is third edited text');
    browser.sleep(2000);
}


 module.exports = {
    clickOnEditLink,
    deleteTextFromTheField,
    enterFirstEditTextInTheSecondAnswerField,
    enterSecondEditTextInTheSecondAnswerField,
    enterThirdEditTextInTheSecondAnswerField
}