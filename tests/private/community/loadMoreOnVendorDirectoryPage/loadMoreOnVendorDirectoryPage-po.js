function count18vendors() {
    // Provera da li se na strani nalazi 18 vendora
    let list = element.all(by.className('vendor card horizontal'));
    expect(list.count()).toBe(18);
}

function count23vendors() {
    // Provera da li se na strani nalazi 23 vendora
    let list = element.all(by.className('vendor card horizontal'));
    expect(list.count()).toBe(23);
}

 module.exports = {
    count18vendors,
    count23vendors,
}