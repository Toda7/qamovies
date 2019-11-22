function clickOnSearchField() {
    //  Klikni na search polje
    element(by.className('search_button')).click();
}

function enterSearchWord() {
    //  Unesi text u search polje
    element(by.id('navbar_search_id')).clear().sendKeys('Do Not Touch This Discussion');
    browser.sleep(2500);
}

function clickOnSearchSuggestion() {
    //  Klikni na tacan rezultat pretrage
    element(by.cssContainingText('span.title', 'Do Not Touch This Discussion')).click(); 
    browser.sleep(2000);    
}

 module.exports = {
    clickOnSearchField,
    enterSearchWord,
    clickOnSearchSuggestion,
 }