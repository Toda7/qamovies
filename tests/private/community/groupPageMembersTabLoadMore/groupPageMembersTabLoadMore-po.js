function scrollPage() {
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function count15People() {
    // Provera da li se na strani nalazi 15 usera
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(15);
}

function count30People() {
    // Provera da li se na strani nalazi 30 usera
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(30);
}

function count45People() {
    // Provera da li se na strani nalazi 45 usera
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(45);
}

function clickOnMembersTab() {
    // klik members tab 
    // element(by.className('btn-flat')).click();
    element(by.buttonText('Members')).click();
}

module.exports = {
    scrollPage,
    count15People,
    count30People,
    count45People,
    clickOnMembersTab
}