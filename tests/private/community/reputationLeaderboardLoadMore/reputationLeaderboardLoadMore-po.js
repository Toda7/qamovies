function scrollPage() {
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function count15People() {
    // Provera da li se na strani nalazi 15 ljudi
    let list = element.all(by.className('rank'));
    expect(list.count()).toBe(15);
}

function count30People() {
    // Provera da li se na strani nalazi 30 ljudi
    let list = element.all(by.className('rank'));
    expect(list.count()).toBe(30);
}

function count45People() {
    // Provera da li se na strani nalazi 45 ljudi
    let list = element.all(by.className('rank'));
    expect(list.count()).toBe(45);
}

module.exports = {
    scrollPage,
    count15People,
    count30People,
    count45People,
}