function count15Disc() {
    // Provera da li se na strani nalazi 15 diskusija
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(15);
}

function count30Disc() {
    // Provera da li se na strani nalazi 30 diskusija
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(30);
}

function messageAtTheBottom(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavi poruka na dnu strane
    browser.wait(EC.textToBePresentInElement($('.btn.btn-flat'), 'DISCOVER NEW TOPICS'), 7000);
    browser.sleep(2000);
}

function scrollDown() {
    // Klik 14 puta na SPACE da bismo dobili jos 15 diskusija
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

module.exports = {
    count15Disc,
    count30Disc,
    messageAtTheBottom,
    scrollDown,
}