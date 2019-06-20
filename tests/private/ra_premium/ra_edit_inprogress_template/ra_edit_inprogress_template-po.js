function clickOnEditLink() {
    //  Klik na edit link iz drop down menu
    element(by.xpath('//*[@id="root"]/div/div[2]/div/div[2]/ul/li[2]/div[3]/div[2]/div/ul/li[1]')).click();
    browser.sleep(2000);
 }
 function deleteTextFromTheField() {
    // Brisanje texa iz polja
    element(by.className('materialize-textarea')).clear();
    browser.sleep(2000);
}
function enterFirstEditTextInTheSecondAnswerField() {
    // Unosenje prvog text u polje
    element(by.className('materialize-textarea')).sendKeys('This first edited text');
    browser.sleep(2000);
}
function enterSecondEditTextInTheSecondAnswerField() {
    // Unosenje drugog text u polje
    element(by.className('materialize-textarea')).sendKeys('This second edited text');
    browser.sleep(2000);
}
function enterThirdEditTextInTheSecondAnswerField() {
    // Unosenje treceg text u polje
    element(by.className('materialize-textarea')).sendKeys('This third edited text');
    browser.sleep(2000);
}


 module.exports = {
    clickOnEditLink,
    deleteTextFromTheField,
    enterFirstEditTextInTheSecondAnswerField,
    enterSecondEditTextInTheSecondAnswerField,
    enterThirdEditTextInTheSecondAnswerField
}