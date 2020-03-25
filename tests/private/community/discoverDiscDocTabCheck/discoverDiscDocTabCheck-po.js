function landOnTopicDetail() {
    // Dolazak na Detail stranu topica
    browser.get('https://qa.cbancnetwork.com/community/topics/view/1ed4b722-6200-4a8c-ade9-0fade9a74ec4'); 
}

function clickOnDocsTab() {
    // Klik na Docs Tab
    element.all(by.className('btn-flat')).get(1).click();
}

function clickOnFirstDoc() {
    // Klik na prvi Doc
    element.all(by.className('card_href')).get(0).click();
}

function checkDocURL() {
    // Provera da li se ucitao Doc URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/documents/view/54e63390-1ecc-4e09-9b8c-439cfc33264a'), 7000);
}

function checkDocTitle() {
    // Provera Doc Title-a
    var xxx = element(by.className('document_title'));
    expect(xxx.getText()).toEqual('CSV\nCBANC\nTopics: Symitar Episys');
}

function clickOnDiscTab() {
    // Klik na Discussion Tab
    element.all(by.className('btn-flat')).get(0).click();
}

function clickOnFirstDisc() {
    // Klik na prvu Diskusiju
    element.all(by.className('card_href')).get(0).click();
}

function checkDiscURL() {
    // Provera da li se ucitao Disc URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/discussions/view/ee9fe8f5-b177-4e0c-87cd-0797abb14dd7?filter=topic%2B1ed4b722-6200-4a8c-ade9-0fade9a74ec4'), 7000);
}

function checkDiscTitle() {
    // Provera Doc Title-a
    var xxx = element(by.className('thread_title'));
    expect(xxx.getText()).toEqual('in FI Professionals\nnotifications_none\nNOTIFICATIONS OFF\nVoyage 30\nTopics: Symitar Episys');
}

module.exports = {
    landOnTopicDetail,
    clickOnDocsTab,
    clickOnFirstDoc,
    checkDocURL,
    checkDocTitle,
    clickOnDiscTab,
    clickOnFirstDisc,
    checkDiscURL,
    checkDiscTitle,
}