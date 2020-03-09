function landOnDiscoverPage() {
    // Dolazak na home stranu
    browser.get('https://qa.cbancnetwork.com/community/topics?s=popularity'); 
    browser.sleep(5000);
}

function clickOnAlphabeticalTab() {
    // Click na Alphabetical Tab
    element(by.css('.discover .controls .tabs .tab:nth-child(2)')).click();
    browser.sleep(2000);
}

function count15topics() {
    // Provera da li se na strani nalazi 15 topic kartica
    let list = element.all(by.className('collection-item topic card'));
    expect(list.count()).toBe(15);
}

function clickSpaceOnKeyboard() {
    //  Klik na SPACE na tastaturi
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
    browser.sleep(2500);
 }

 function count30topics() {
    // Provera da li se na strani nalazi 30 topic kartica
    let list = element.all(by.className('collection-item topic card'));
    expect(list.count()).toBe(30);
}

module.exports = {
    landOnDiscoverPage,
    clickOnAlphabeticalTab,
    count15topics,
    clickSpaceOnKeyboard,
    count30topics,
}