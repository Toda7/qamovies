function count15discussions() {
    // Provera da li se na strani nalazi 15 diskusija
    let list = element.all(by.className('card_href'));
    expect(list.count()).toBe(15);
}

function count30discussions() {
    // Provera da li se na strani nalazi 30 diskusija
    let list = element.all(by.className('card_href'));
    expect(list.count()).toBe(30);
}

 module.exports = {
    count15discussions,
    count30discussions,
}