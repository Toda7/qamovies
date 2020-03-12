function clickOnFirstProduct() {
    // Klik on drugi product link
    element.all(by.className('card-content')).get(2).click();
}

function checkBreadcrumbs() {
    // Provera da li se ucitao Breadcrumb u headeru
    var xxx = element(by.className('nav_title'));
    expect(xxx.getText()).toEqual('Vendor Mandrill');
}

function checkSecondBreadcrumbs() {
    // Provera da li se ucitao drugi Breadcrumb u headeru
    var xxx = element.all(by.className('nav_title')).get(1);
    expect(xxx.getText()).toEqual('Product Mandrill 2');
}

function checkTitleOfProduct() {
    // Provera da li se ucitao title of product
    var xxx = element(by.className('card-title'));
    expect(xxx.getText()).toEqual('Product Mandrill 2');
}

function checkLinkOfVendor() {
    // Provera da li se ucitao link vendora
    var xxx = element(by.css('.product .card-content a'));
    expect(xxx.getText()).toEqual('Vendor Mandrill');
}

function clickOnVendorLink() {
    // Klik on vendor link
    element.all(by.partialLinkText('Vendor Mandrill')).click();
}

function checkVendorURL() {
    // Provera da li se ucitao vendor URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/vendors/view/d12dd16a-08e7-48e7-9df2-7f4f5e5976d9'), 5000);
 }


function checkContactVendorButton() {
    // Provera da li se ucitao contact vendor button
    var xxx = element(by.tagName('button'));
    expect(xxx.getText()).toEqual('CONTACT VENDOR');
}

function checkDescriptionOfProduct() {
    // Provera da li se ucitao description of product
    var xxx = element(by.className('html_content'));
    expect(xxx.getText()).toEqual('test description 123 123 123 123 12 123');
}

function checkDescriptionOfProduct() {
    // Provera da li se ucitao description of product
    var xxx = element(by.tagName('h4'));
    expect(xxx.getText()).toEqual('Similar products');
}

//  function checkBreadcrumbs() {
//     // Provera da li se ucitao breadcrumbs
//     var EC = protractor.ExpectedConditions;
//     browser.wait(EC.textToBePresentInElement($('.card-title'), 'test description 123 123 123 123 12 123 '), 5000);
// }

module.exports = {
    clickOnFirstProduct,
    checkBreadcrumbs,
    checkSecondBreadcrumbs,
    checkTitleOfProduct,
    checkLinkOfVendor,
    checkContactVendorButton,
    checkDescriptionOfProduct,
    clickOnVendorLink,
    checkVendorURL,
}