function enterTextInSearchField() {
    // Unosenje texta u search field
    element(by.name('search_term')).sendKeys('New outsourced webinar');
}
module.exports = {
    enterTextInSearchField,
}