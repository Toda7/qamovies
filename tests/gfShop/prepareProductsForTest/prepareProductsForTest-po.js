function landProductDetailsPage() {
    // Dolazak na product details page u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/48310/'); 
}

// function enterNumbersOfQTY() {
//     // Unosenje numbers u qty polje
//     browser.wait(element.all(by.className('admin__control-text')).get(4).clear().sendKeys('100'), 10000);
//  }

// function selectInStock() {
//     // Selektovanje In stock option
//     browser.wait(element.all(by.className('admin__control-select')).get(1).all(by.tagName('option')).get(0).click(), 10000); 
// }

// function clickToOpenYear() {
//     //  Klik to open year drop 
//     browser.wait(element(by.id('save-button')).click(), 10000);
// }

function clickSwitch() {
    //  Klik switch
    element(by.className('admin__actions-switch')).element(by.tagName('input')).getAttribute('value').then(function (text) {
        // console.log(text);
        // console.log(typeof text);
        if (text == 2) {
            element(by.className('admin__actions-switch')).click();
            browser.sleep(1000);
            element(by.buttonText('Save')).click();
        }
    });

    // // primer gde nije ispunjen promise i varijabla se vraca kao objekat umesto kao string
    // browser.sleep(5000);
    // var xxx = element(by.className('admin__actions-switch')).element(by.tagName('input')).getAttribute('value');
    //     console.log(xxx);
    //     console.log(typeof xxx);
}

 module.exports = {
    landProductDetailsPage,
    // enterNumbersOfQTY,
    // selectInStock,
    // clickToOpenYear,
    clickSwitch,
 }