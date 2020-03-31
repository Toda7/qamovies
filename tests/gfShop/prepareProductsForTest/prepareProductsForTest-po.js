function clickSwitch() {
    //  Klik na switch
    element(by.className('admin__actions-switch')).element(by.tagName('input')).getAttribute('value').then(function (text) {
        // console.log(text);
        // console.log(typeof text);
        if (text == 2) {
            element(by.className('admin__actions-switch')).click();
        }
    });

    // // primer gde nije ispunjen promise i varijabla se vraca kao objekat umesto kao string
    // browser.sleep(5000);
    // var xxx = element(by.className('admin__actions-switch')).element(by.tagName('input')).getAttribute('value');
    //     console.log(xxx);
    //     console.log(typeof xxx);
}

function enterNumbersOfQTY() {
    // Unosenje numbers u qty polje
    browser.wait(element.all(by.className('admin__control-text')).get(4).clear().sendKeys('100'), 10000);
}

function selectInStock() {
    // Selektovanje In stock option
    browser.wait(element.all(by.className('admin__control-select')).get(1).all(by.tagName('option')).get(0).click(), 10000);
}

function clickOnSave() {
    // klik na Save button
    browser.wait(element(by.id('save-button')).click(), 10000);
}

function checkSuccessMessage() {
    // Provera success poruke
    var xxx = element(by.className('message message-success success'));
    expect(xxx.getText()).toEqual('You saved the product.');
}

function landProduct1DetailsPage() {
    // Dolazak na product 1 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42985/');
}

function landProduct2DetailsPage() {
    // Dolazak na product 2 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27146/');
}

function landProduct3DetailsPage() {
    // Dolazak na product 3 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27156/');
}

function landProduct4DetailsPage() {
    // Dolazak na product 4 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27151/');
}

function landProduct5DetailsPage() {
    // Dolazak na product 5 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27118/');
}

function landProduct6DetailsPage() {
    // Dolazak na product 6 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27095/');

}

function landProduct7DetailsPage() {
    // Dolazak na product 7 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27107/');

}

function landProduct8DetailsPage() {
    // Dolazak na product 8 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27083/');
}

function landProduct9DetailsPage() {
    // Dolazak na product 9 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27135/');
}

function landProduct10DetailsPage() {
    // Dolazak na product 10 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27129/');
}

function landProduct11DetailsPage() {
    // Dolazak na product 11 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27161/');
}

function landProduct12DetailsPage() {
    // Dolazak na product 12 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27216/');
}

function landProduct13DetailsPage() {
    // Dolazak na product 13 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27053/');
}

function landProduct14DetailsPage() {
    // Dolazak na product 14 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27146/');
}

function landProduct15DetailsPage() {
    // Dolazak na product 15 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27223/');
}


module.exports = {
    clickSwitch,
    enterNumbersOfQTY,
    selectInStock,
    clickOnSave,
    checkSuccessMessage,
    landProduct1DetailsPage,
    landProduct2DetailsPage,
    landProduct3DetailsPage,
    landProduct4DetailsPage,
    landProduct5DetailsPage,
    landProduct6DetailsPage,
    landProduct7DetailsPage,
    landProduct8DetailsPage,
    landProduct9DetailsPage,
    landProduct10DetailsPage,
    landProduct11DetailsPage,
    landProduct12DetailsPage,
    landProduct13DetailsPage,
    landProduct14DetailsPage,
    landProduct15DetailsPage,
}

