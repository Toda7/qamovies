function clickOnCompleteLink() {
    //  Klik na complete link from side menu
    element(by.partialLinkText('Completed')).click();
    browser.sleep(2000);
 }
 function clickOnThreeDotsLink() {
    //  Klik na three dots icon
    element(by.className('dropdown_menu')).click();
    browser.sleep(2000);
 }
 function clickOnEditLink() {
   element.all(by.className('dropdown-content')).get(2).all(by.tagName('li')).get(0).click();
    browser.sleep(2000);
 }
 function clickOnOptionToEditIt() {
   element.all(by.className('options')).get(0).all(by.tagName('p')).get(3).click();
   browser.sleep(2000);
}
function clickOn2OptionToEditIt() {
   element.all(by.className('options')).get(0).all(by.tagName('p')).get(3).click();
   browser.sleep(2000);
}
function clickOn3OptionToEditIt() {
   element.all(by.className('options')).get(0).all(by.tagName('p')).get(3).click();
   browser.sleep(2000);
}
function checkRatingSummary() {
   var EC = protractor.ExpectedConditions;
   // Provera da li se ucitao rating summery -> Considerable' 
   browser.wait(EC.textToBePresentInElement($('.card-content'), 'High.'), 5000);
} 
function checkAverageResidual() {
   var EC = protractor.ExpectedConditions;
   // Provera da li se ucitao Average Residual
   browser.wait(EC.textToBePresentInElement($('.card'), '4.0'), 5000);
} 
function checkRiskLevel() {
   var EC = protractor.ExpectedConditions;
   // Provera da li se ucitao Risk Level
   browser.wait(EC.textToBePresentInElement($('.card'), 'High'), 5000);
} 
function checkMyFirstEditedAnswer() {
   var EC = protractor.ExpectedConditions;
   // Provera da li se ucitao my first answer
   browser.wait(EC.textToBePresentInElement($('.card'), 'This is first edited text'), 5000);
}
function checkMySecondEditedAnswer() {
   var EC = protractor.ExpectedConditions;
   // Provera da li se ucitao my first answer
   browser.wait(EC.textToBePresentInElement($('.card'), 'This is second edited text'), 5000);
}
function checkMyThirEditeddAnswer() {
   var EC = protractor.ExpectedConditions;
   // Provera da li se ucitao my first answer
   browser.wait(EC.textToBePresentInElement($('.card'), 'This is third edited text'), 5000);
}
function clickToOpenForm() {
   //  Klik na three dots icon
   element(by.className('secondary-content')).click();
   browser.sleep(2000);
}

 module.exports = {
    clickOnCompleteLink,
    clickOnThreeDotsLink,
    clickOnEditLink,
    clickOnOptionToEditIt,
    clickOn2OptionToEditIt,
    clickOn3OptionToEditIt,
    checkRatingSummary,
    checkAverageResidual,
    checkRiskLevel,
    checkMyFirstEditedAnswer,
    checkMySecondEditedAnswer,
    checkMyThirEditeddAnswer,
    clickToOpenForm,
 }
