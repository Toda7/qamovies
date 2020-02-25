function landOnDiscoverPagePopular() {
    // Dolazak na home stranu
    browser.get('https://qa.cbancnetwork.com/community/topics?s=popularity'); 
    browser.sleep(2000);
}

function checkSubTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao sub title
    browser.wait(EC.titleIs('Discover'), 2000);
}

function checkPopularityTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Popularity tab
    browser.wait(EC.textToBePresentInElement($('.tabs'), 'Popularity'), 2000);
}

function checkAlphabeticalTab(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Popularity tab
    browser.wait(EC.textToBePresentInElement($('.tabs'), 'Alphabetical'), 2000);
}

function count15topics() {
    // Provera da li se na strani nalazi 15 topic kartica
    let list = element.all(by.css('.collection-item topic card'));
    expect(list.count()).toBe(15);
}

function clickSpaceOnKeyboard() {
    //  Klik na SPACE na tastaturi
    element(by.id('search')).sendKeys(protractor.Key.SPACE);
    browser.sleep(2500);
 }

module.exports = {
    landOnDiscoverPagePopular,
    checkSubTitleOnPage,
    checkPopularityTab,
    checkAlphabeticalTab,
    count15topics,
    clickSpaceOnKeyboard,
}