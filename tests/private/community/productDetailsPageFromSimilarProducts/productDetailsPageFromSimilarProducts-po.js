function clickOnDocumentFromSimilarProducts() {
    // Klik on product iz Similar Products sekcije
    element.all(by.className('card-title')).get(1).click();
}

function checkBreadcrumbs() {
    // Provera da li se ucitao Breadcrumb u headeru
    var xxx = element(by.className('nav_title'));
    expect(xxx.getText()).toEqual('Vendor Mandrill');
}

function checkSecondBreadcrumbs() {
    // Provera da li se ucitao drugi Breadcrumb u headeru
    var xxx = element.all(by.className('nav_title')).get(1);
    expect(xxx.getText()).toEqual('New one');
}

function checkTitleOfProduct() {
    // Provera da li se ucitao title of product
    var xxx = element(by.className('card-title'));
    expect(xxx.getText()).toEqual('New one');
}

function checkLinkOfVendor() {
    // Provera da li se ucitao link vendora
    var xxx = element(by.css('.product .card-content a'));
    expect(xxx.getText()).toEqual('Vendor Mandrill');
}

function checkContactVendorButton() {
    // Provera da li se ucitao contact vendor button
    var xxx = element(by.tagName('button'));
    expect(xxx.getText()).toEqual('CONTACT VENDOR');
}

function checkDescriptionOfProduct() {
    // Provera da li se ucitao description of product
    var xxx = element(by.className('html_content'));
    expect(xxx.getText()).toEqual('Test.');
}

function checkDescriptionOfProduct() {
    // Provera da li se ucitao description of product
    var xxx = element(by.tagName('h4'));
    expect(xxx.getText()).toEqual('Similar products');
}

function checkTitleOfProductInSimilarSection() {
    // Provera da li se ucitao title of product for product in similar section
    var xxx = element.all(by.className('card-title')).get(1);
    expect(xxx.getText()).toEqual('Product Mandrill 2');
}

module.exports = {
    clickOnDocumentFromSimilarProducts,
    checkBreadcrumbs,
    checkSecondBreadcrumbs,
    checkTitleOfProduct,
    checkLinkOfVendor,
    checkContactVendorButton,
    checkDescriptionOfProduct,
    checkTitleOfProductInSimilarSection,
}