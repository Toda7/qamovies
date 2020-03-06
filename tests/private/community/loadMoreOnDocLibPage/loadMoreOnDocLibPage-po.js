function count15docs() {
    // Provera da li se na strani nalazi 15 documenta
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(15);
}

function scrollDown() {
    // Skrolujemo do dna strani da bi dobili jos 15 dokumenta 
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function count30docs() {
    // Provera da li se na strani nalazi 30 documenta
    let list = element.all(by.css('.card_href'));
    expect(list.count()).toBe(30);
}

 module.exports = {
    count15docs,
    scrollDown,
    count30docs,
}