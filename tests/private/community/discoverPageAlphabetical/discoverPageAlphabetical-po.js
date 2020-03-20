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

function checkFirstTopicCard() {
    // Provera prve Topic kartice
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card .card-content .card-title'), 'ABA'), 5000);
}

function checkSecondTopicCard() {
    // Provera druge Topic kartice
    var xxx = element.all(by.className('card-title')).get(1);
    expect(xxx.getText()).toEqual('Ability To Pay');
}

function checkThirdTopicCard() {
    // Provera trece Topic kartice
    var xxx = element.all(by.className('card-title')).get(2);
    expect(xxx.getText()).toEqual('Acceptable Use');
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
    checkFirstTopicCard,
    checkSecondTopicCard,
    checkThirdTopicCard,
}