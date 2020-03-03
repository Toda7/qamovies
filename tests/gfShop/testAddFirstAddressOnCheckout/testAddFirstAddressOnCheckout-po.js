function landOnSpypointHomePage() {
    // Dolazak na Spypoint shop
    browser.get('https://shop.outfitterextreme.com/spypoint'); 
    browser.sleep(2000);
}

function landOnSpypointProductDetailPage() {
    // Dolazak na detail stranu Product-a
    browser.get('https://shop.outfitterextreme.com/spypoint/force-20.html'); 
    browser.sleep(2000);
}

function clickOnAddToCart() {
    //  Klik na add to cart button
    element(by.className('action primary tocart btn-lg')).click();
    browser.sleep(2000);
}

function clickToOpenCart() {
    //  Klik to open cart
    element(by.className('action showcart')).click();
    browser.sleep(2000);
}

function clickToGoToCheckoutPage() {
    //  Klik to go to checkout page 
    element(by.className('action primary checkout btn-lg')).click();
    browser.sleep(5000);
}

function clickOnNext() {
    //  Klik on NEXT 
    element(by.className('button action continue primary btn-lg')).click();
    browser.sleep(7000);
}

// function checkSuccess1() {
//     // Provera error poruke "This is a required field"
//     var zzz = element.all(by.className('mage-error')).get(0);
//     expect(zzz.getText()).toEqual('This is a required field.');
// }

// function checkSuccess2() {
//     // Provera error poruke "This is a required field"
//     var zzz = element.all(by.className('mage-error')).get(1);
//     expect(zzz.getText()).toEqual('This is a required field.');
// }

// function checkSuccess3() {
//     // Provera error poruke "This is a required field"
//     var zzz = element.all(by.className('mage-error')).get(2);
//     expect(zzz.getText()).toEqual('This is a required field.');
// }

// function checkSuccess4() {
//     // Provera error poruke "This is a required field"
//     var zzz = element.all(by.className('mage-error')).get(3);
//     expect(zzz.getText()).toEqual('This is a required field.');
// }

// function checkSuccess5() {
//     // Provera error poruke "This is a required field"
//     var zzz = element.all(by.className('mage-error')).get(4);
//     expect(zzz.getText()).toEqual('This is a required field.');
// }

function enterCompanyName() {
    //  Unesi Company name
    element(by.name('company')).clear().sendKeys('CBANC');
    browser.sleep(5000);
}

function enterStreetName() {
    //  Unesi Street name
    element(by.name('street[0]')).clear().sendKeys('4200 N Lamar Blvd Suite 250');
    browser.sleep(2000);
}

function enterCityName() {
    //  Unesi Street name
    element(by.name('city')).clear().sendKeys('Austin');
    browser.sleep(2000);
}

function clickToSelectProvince() {
    //  Klik to select Province from drop
    element(by.name('region_id')).all(by.tagName('option')).get(57).click(); 
    browser.sleep(6000);
 }

function enterZipCode() {
    //  Unesi Zip
    element(by.name('postcode')).clear().sendKeys('78756');
    browser.sleep(2000);
}

function enterPhoneNumber() {
    //  Unesi broj telefona
    element(by.name('telephone')).clear().sendKeys('5125834570');
    browser.sleep(2000);
}

function checkEnteredAddress() {
    // Provera da li je Adresa vidljiva na Review & Payments 
    var xxx = element.all(by.className('billing-address-details')).get(0);
    expect(xxx.getText()).toEqual('Brent Snyder\n4200 N Lamar Blvd Suite 250\nCBANC\nAustin, Texas 78756\nUnited States\n5125834570');
}

module.exports = {
    landOnSpypointHomePage,
    landOnSpypointProductDetailPage,
    clickOnAddToCart,
    clickToOpenCart,
    clickToGoToCheckoutPage,
    clickOnNext,
    // checkSuccess1,
    // checkSuccess2,
    // checkSuccess3,
    // checkSuccess4,
    // checkSuccess5,
    enterCompanyName,
    enterStreetName,
    enterCityName,
    clickToSelectProvince,
    enterZipCode,
    enterPhoneNumber,
    checkEnteredAddress,
}