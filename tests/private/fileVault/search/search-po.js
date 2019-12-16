function clickOnSearch() {
    // Click na Search
    element(by.partialLinkText('Search')).click();
    browser.sleep(5000);
}

function insertTxtInSearch() {
    // Unosenje txt-a u search polje
    element(by.name('q')).sendKeys('Z1');
    browser.sleep(5000);
}

function checkSearchResult() {
    // Provera da li je search rezultat dobar
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection-item.avatar.task_item'), 'Z1'), 5000);
}

module.exports = {
    clickOnSearch,
    insertTxtInSearch,
    checkSearchResult,
   
   }