function clickOnAllAccessLink() {
    //  Klik on webinars link
    element(by.partialLinkText('ALL ACCESS')).click();
    browser.sleep(2000);
 }

function enterTextInSearchField() {
    // Unosenje texa u search field
    element(by.name('search_term')).sendKeys('fifa');
}

function clickToOptionForSearch() {
    // Klik on option for search
    element(by.className('cta')).click();
    browser.sleep(2000);
 }

function clickOnEditButton() {
    // Klik on edit button
    element(by.className('edit')).click();
    browser.sleep(2000);
 }

function checkNoStatus(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao second title of question
    browser.wait(EC.textToBePresentInElement($('.no'), 'NO'), 7000);
}   

 function clickOnGrant() {
    // Klik on grant button
    element(by.className('grant')).click();
    browser.sleep(2000);
 }

 function checkYeStatus(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao second title of question
    browser.wait(EC.textToBePresentInElement($('.yes'), 'YES'), 7000);
}   



 module.exports = {
    clickOnAllAccessLink,
    enterTextInSearchField,
    clickToOptionForSearch,
    clickOnEditButton,
    checkNoStatus,
    clickOnGrant,
    checkYeStatus,
 }