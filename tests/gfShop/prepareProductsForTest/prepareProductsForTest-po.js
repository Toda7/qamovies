function checkSaveButton(){
    // Provera da li se ucitao Save button, ovo koristimo za browser.wait da bi sacekali da se strana ucita
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.page-actions .actions-split .action-default'), "Save"), 20000);
}

    
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

// ovo je parent product 
// function landProduct16DetailsPage() {
//     // Dolazak na product 16 u magento
//     browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/7797/');
// }

function landProduct17DetailsPage() {
    // Dolazak na product 17 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27126/');
}

function landProduct18DetailsPage() {
    // Dolazak na product 18 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27127/');
}

function landProduct19DetailsPage() {
    // Dolazak na product 19 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42985/');
}

function landProduct20DetailsPage() {
    // Dolazak na product 20 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/43019/');
}

function landProduct21DetailsPage() {
    // Dolazak na product 21 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/7794/');
}

function landProduct22DetailsPage() {
    // Dolazak na product 22 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/7795/');
}

function landProduct23DetailsPage() {
    // Dolazak na product 23 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/7796/');
}

// ovo je parent product
// function landProduct24DetailsPage() {
//     // Dolazak na product 24 u magento
//     browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/7797/');
// }

function landProduct25DetailsPage() {
    // Dolazak na product 25 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42696/');
}

function landProduct26DetailsPage() {
    // Dolazak na product 26 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42697/');
}

function landProduct27DetailsPage() {
    // Dolazak na product 27 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42698/');
}

// ovo je parent product
function landProduct28DetailsPage() {
    // Dolazak na product 28 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42694/');
}

function landProduct29DetailsPage() {
    // Dolazak na product 29 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42695/');
}

// ovo je parent product
// function landProduct30DetailsPage() {
//     // Dolazak na product 30 u magento
//     browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/29155/');
// }

function landProduct31DetailsPage() {
    // Dolazak na product 31 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/35568/');
}

function landProduct32DetailsPage() {
    // Dolazak na product 32 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/60322/');
}

function landProduct33DetailsPage() {
    // Dolazak na product 33 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/60328/');
}

function landProduct34DetailsPage() {
    // Dolazak na product 34 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/29181/');
}

// ovo je parent product 
// function landProduct35DetailsPage() {
//     // Dolazak na product 35 u magento
//     browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27149/');
// }

function landProduct36DetailsPage() {
    // Dolazak na product 36 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27152/');
}

function landProduct37DetailsPage() {
    // Dolazak na product 37 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27153/');
}

function landProduct38DetailsPage() {
    // Dolazak na product 38 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27154/');
}

function landProduct39DetailsPage() {
    // Dolazak na product 39 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27155/');
}

function landProduct40DetailsPage() {
    // Dolazak na product 40 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27144/');
}

function landProduct41DetailsPage() {
    // Dolazak na product 41 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/48284/');
}

// ovo je parent product
// function landProduct42DetailsPage() {
//     // Dolazak na product 42 u magento
//     browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27094/');
// }

function landProduct43DetailsPage() {
    // Dolazak na product 43 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27099/');
}

function landProduct44DetailsPage() {
    // Dolazak na product 44 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27100/');
}

function landProduct45DetailsPage() {
    // Dolazak na product 45 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/64157/');
}

function landProduct46DetailsPage() {
    // Dolazak na product 46 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/64158/');
}

function landProduct47DetailsPage() {
    // Dolazak na product 47 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/41224/');
}

function landProduct48DetailsPage() {
    // Dolazak na product 48 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/39194/');
}

function landProduct49DetailsPage() {
    // Dolazak na product 49 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/21906/');
}

function landProduct50DetailsPage() {
    // Dolazak na product 50 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/39209/');
}

function landProduct51DetailsPage() {
    // Dolazak na product 51 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/14977/');
}

function landProduct52DetailsPage() {
    // Dolazak na product 52 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27193/');
}

function landProduct53DetailsPage() {
    // Dolazak na product 53 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27092/');
}

function landProduct54DetailsPage() {
    // Dolazak na product 54 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27130/');
}

function landProduct55DetailsPage() {
    // Dolazak na product 55 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27132/');
}

function landProduct56DetailsPage() {
    // Dolazak na product 56 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27112/');
}

function landProduct57DetailsPage() {
    // Dolazak na product 57 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/61615/');
}

function landProduct58DetailsPage() {
    // Dolazak na product 58 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/41627/');
}

function landProduct59DetailsPage() {
    // Dolazak na product 59 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/26821/');
}

function landProduct60DetailsPage() {
    // Dolazak na product 60 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/48181/');
}

function landProduct61DetailsPage() {
    // Dolazak na product 60 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/48310/');
}

function landProduct62DetailsPage() {
    // Dolazak na product 60 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/7793/');
}

function landProduct63DetailsPage() {
    // Dolazak na product 63 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/48310/');
}

function landProduct64DetailsPage() {
    // Dolazak na product 64 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/7793/');
}

function landProduct65DetailsPage() {
    // Dolazak na product 65 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27128/');
}

function landProduct66DetailsPage() {
    // Dolazak na product 66 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27105/');
}

function landProduct67DetailsPage() {
    // Dolazak na product 67 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27080/');
}

function landProduct68DetailsPage() {
    // Dolazak na product 68 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/72540/');
}

function landProduct69DetailsPage() {
    // Dolazak na product 69 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/72541/');
}

function landProduct70DetailsPage() {
    // Dolazak na product 70 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27150/');
}

function landProduct71DetailsPage() {
    // Dolazak na product 71 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27136/');
}

function landProduct72DetailsPage() {
    // Dolazak na product 72 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/27137/');
}

function landProduct73DetailsPage() {
    // Dolazak na PARENT product 73 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42983/');
}

function landProduct74DetailsPage() {
    // Dolazak na product 74 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/42986/');
}

function landProduct75DetailsPage() {
    // Dolazak na PARENT product 75 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/41688/');
}

function landProduct76DetailsPage() {
    // Dolazak na product 76 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/43016/');
}

function landProduct77DetailsPage() {
    // Dolazak na product 77 u magento
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/catalog/product/edit/id/52538/');
}



function clickOnAdvancedInventoryLink(){
    // Klik on Advanced Inventory
    element(by.buttonText('Advanced Inventory')).click();
}

function clickOnDoneButton(){
    // Klik na DONE button
    element.all(by.className('page-actions-buttons')).get('1').click();
}

function enterNumbersOfQTYForParrent() {
    // Unosenje numbers u qty polje
    browser.wait(element.all(by.className('admin__control-text')).get(12).clear().sendKeys('100'), 10000);
}

module.exports = {
    checkSaveButton,
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
    // landProduct16DetailsPage,
    landProduct17DetailsPage,
    landProduct18DetailsPage,
    landProduct19DetailsPage,
    landProduct20DetailsPage,
    landProduct21DetailsPage,
    landProduct22DetailsPage,
    landProduct23DetailsPage,
    // landProduct24DetailsPage,
    landProduct25DetailsPage,
    landProduct26DetailsPage,
    landProduct27DetailsPage,
    landProduct28DetailsPage,
    landProduct29DetailsPage,
    // landProduct30DetailsPage,
    landProduct31DetailsPage,
    landProduct32DetailsPage,
    landProduct33DetailsPage,
    landProduct34DetailsPage,
    // landProduct35DetailsPage,
    landProduct36DetailsPage,
    landProduct37DetailsPage,
    landProduct38DetailsPage,
    landProduct39DetailsPage,
    landProduct40DetailsPage,
    landProduct41DetailsPage,
    // landProduct42DetailsPage,
    landProduct43DetailsPage,
    landProduct44DetailsPage,
    landProduct45DetailsPage,
    landProduct46DetailsPage,
    landProduct47DetailsPage,
    landProduct48DetailsPage,
    landProduct49DetailsPage,
    landProduct50DetailsPage,
    landProduct51DetailsPage,
    landProduct52DetailsPage,
    landProduct53DetailsPage,
    landProduct54DetailsPage,
    landProduct55DetailsPage,
    landProduct56DetailsPage,
    landProduct57DetailsPage,
    landProduct58DetailsPage,
    landProduct59DetailsPage,
    landProduct60DetailsPage,
    landProduct61DetailsPage,
    landProduct62DetailsPage,
    landProduct63DetailsPage,
    landProduct64DetailsPage,
    landProduct65DetailsPage,
    landProduct66DetailsPage,
    landProduct67DetailsPage,
    landProduct68DetailsPage,
    landProduct69DetailsPage,
    landProduct70DetailsPage,
    landProduct71DetailsPage,
    landProduct72DetailsPage,
    landProduct73DetailsPage,
    landProduct74DetailsPage,
    landProduct75DetailsPage,
    landProduct76DetailsPage,
    landProduct77DetailsPage,
    clickOnAdvancedInventoryLink,
    clickOnDoneButton,
    enterNumbersOfQTYForParrent,
}

