function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46');
    browser.sleep(2000);
}

function clickReputationTimeline() {
    // Klik na Reputation Timeline link
    element(by.className('collection menu_items')).all(by.tagName('a')).get(4).click();
    browser.sleep(2000);
}

function count15logs() {
    // Provera da li se na strani nalazi 15 logova
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(15);
}

function scrollPage() {
    // scroll page
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function count30logs() {
    // Provera da li se na strani nalazi 30 logova
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(30);
}

function count45logs() {
    // Provera da li se na strani nalazi 45 logova
    let list = element.all(by.className('collection-item avatar'));
    expect(list.count()).toBe(45);
}

module.exports = {
    landOnFIProfessionalsHome,
    clickReputationTimeline,
    count15logs,
    count30logs,
    count45logs,
    count15logs,
    scrollPage,
}