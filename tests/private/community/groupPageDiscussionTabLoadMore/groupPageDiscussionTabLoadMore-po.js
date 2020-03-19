function scrollPage() {
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function count15Discussions() {
    // Provera da li se ucitalo 15 diskusija
    let list = element.all(by.className('card_href'));
    expect(list.count()).toBe(15);
}

function count30Discussions() {
    // Provera da li se ucitalo 30 diskusija
    let list = element.all(by.className('card_href'));
    expect(list.count()).toBe(30);
}

function count45Discussions() {
    // Provera da li se ucitalo 45 diskusija
    let list = element.all(by.className('card_href'));
    expect(list.count()).toBe(45);
}

module.exports = {
    scrollPage,
    count15Discussions,
    count30Discussions,
    count45Discussions,

}