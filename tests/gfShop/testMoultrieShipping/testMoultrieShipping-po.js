function landOnMoultrieHomePage() {
    // Dolazak na Moultrie shop
    browser.get('https://shop.outfitterextreme.com/Moultrie'); 
    browser.sleep(2000);
}

function landOnCameraDetailPage() {
    // Dolazak na detail stranu kamere
    browser.get('https://shop.outfitterextreme.com/Moultrie/moultrie/cameras/game-cameras/a300-game-camera.html'); 
    browser.sleep(2000);
}

function clickOnAddToCart() {
    //  Klik na add to cart button
    element(by.className('action primary tocart btn-lg')).click();
    browser.sleep(2000);
}

function landOnFeederDetailPage() {
    // Dolazak na detail stranu feeder-a
    browser.get('https://shop.outfitterextreme.com/Moultrie/wildlife-directional-feeder-1.html'); 
    browser.sleep(2000);
}

function landOnAttractantsDetailPage() {
    // Dolazak na detail stranu Attractant-a
    browser.get('https://shop.outfitterextreme.com/Moultrie/bear-magnet-savory-bacon-1.html'); 
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

function checkShippingPrice() {
    // Provera da li je shipping $27,00
    var xxx = element.all(by.className('price')).get(1);
    expect(xxx.getText()).toEqual('$27.00');
    browser.sleep(2000);
 }

function clickOnNext() {
    //  Klik to go to Review & Payments page 
    element(by.className('button action continue primary btn-lg')).click();
    browser.sleep(5000);
}

function clickOnPlaceOrder() {
    //  Klik on PLACE ORDER button
    element(by.className(' action primary checkout')).click();
    browser.sleep(9000);
}

function landOnMyOrdersPage() {
    // Dolazak na My Orders stranu 
    browser.get('https://www.outfitterextreme.com/my-orders');
 }

 function clickOrderOnPage() {
    // Klik na prvi  order na my orders strani
    element.all(by.className('avatar-section')).get(0).click();
 }

 function checkShippingPrice2() {
    // Provera da li je shipping $27,00 na My Orders
    var xxx = element.all(by.className('gflexdata gflexdata-centered ')).get(1);
    expect(xxx.getText()).toEqual('Shipping\n$27.00');
 }

module.exports = {
    landOnMoultrieHomePage,
    landOnCameraDetailPage,
    clickOnAddToCart,
    landOnFeederDetailPage,
    landOnAttractantsDetailPage,
    clickToOpenCart,
    clickToGoToCheckoutPage,
    checkShippingPrice,
    clickOnNext,
    clickOnPlaceOrder,
    landOnMyOrdersPage,
    clickOrderOnPage,
    checkShippingPrice2,
}