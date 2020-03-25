function clickOnAddButton() {
    // Click to get options
    element(by.className('btn-floating btn-large')).click();
    browser.sleep(2000);
}

function clickOnCreateDoc() {
    // Click na Create Doc
    element(by.className('btn-floating create_doc')).click();
    browser.sleep(5000);
}

function clickOnCreateCBArticle() {
    // Click na Create Article
    element(by.buttonText('Create KB Article')).click();
    browser.sleep(2000);
}

function insertDocTitle() {
    // Unosenje Doc Title-a
    element(by.name('title')).sendKeys('Protractor Doc 1');
    browser.sleep(2000);
}

function clickOnCreateCBArticleBtn() {
    // Click na Create Article Dugme
    element(by.className('btn-flat right hide-on-small-and-down'), 'Create Document').click();
    browser.sleep(2000);
}

function clickOnCheckMark() {
    // Click na Check Mark
    element(by.className('back')).click();
    browser.sleep(5000);
}

function checkActivityTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Activity tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'ACTIVITY'), 7000);
}

function checkTaskTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Task tab tu
    browser.wait(EC.textToBePresentInElement($('.card-tabs'), 'TASKS'), 7000);
}

module.exports = {
    clickOnAddButton,
    clickOnCreateDoc,
    clickOnCreateCBArticle,
    insertDocTitle,
    clickOnCreateCBArticleBtn,
    clickOnCheckMark,
    checkActivityTab,
    checkTaskTab,   
   
   }