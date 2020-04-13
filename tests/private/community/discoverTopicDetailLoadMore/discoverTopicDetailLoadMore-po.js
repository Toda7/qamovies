function landOnTopicDetail() {
    // Dolazak na Detail stranu topica
    browser.get('https://qa.cbancnetwork.com/community/topics/view/1ed4b722-6200-4a8c-ade9-0fade9a74ec4'); 
}

function count15Disc() {
    // Provera da li se na strani nalazi 15 diskusija
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(15);
}

function scrollDown() {
    // Klik 6 puta na SPACE da bismo dobili jos 15 diskusija
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function count30Disc() {
    // Provera da li se na strani nalazi 30 diskusija
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(30);
}

function clickOnDocsTab() {
    // Klik na Docs Tab
    element.all(by.className('btn-flat')).get(1).click();
}

function count15Docs() {
    // Provera da li se na strani nalazi 15 dokumentata
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(15);
}

function count30Docs() {
    // Provera da li se na strani nalazi 30 dokumenata
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(30);
}

module.exports = {
    landOnTopicDetail,
    count15Disc,
    scrollDown,
    count30Disc,
    clickOnDocsTab,
    count15Docs,
    count30Docs,
}