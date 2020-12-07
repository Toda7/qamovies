function landOnAplsHomePage() {
    // Dolazak na ALPS product details page in shop
    browser.get('https://shop.outfitterextreme.com/truglo/tfx-pro-handgun-day-night-sights-tfx-sw-j-frm-frnt-pro-orn.html'); 
}

function clickOnAddToCart() {
    //  Klik na add to cart button
    element(by.className('action primary tocart btn-lg')).click();
}

function clickToOpenCart() {
    //  Klik to open credit cart
    element(by.className('action showcart')).click();
}

function clickToGoToCheckoutPage() {
    //  Klik to go to checkout page 
    element(by.className('action primary checkout btn-lg')).click();
}

function clickOnNextButton() {
    //  Klik on Next button
    element(by.className('button action continue primary btn-lg')).click();
    // element(by.partialLinkText('NEXT')).click();
}

function clickOnCreditCartToOpenDrop() {
    //  Klik on credit cart to open drop 
    element(by.id('authnetcim-card-id')).click();
}

function clickToAddNewCard() {
    //  Klik na complete link from side menu
    element(by.css('select#authnetcim-card-id.select')).all(by.tagName('option')).get(0).click(); 
    // element(by.css('select#authnetcim-card-id.select')).click();
}

function enterNumbersCreditCard() {
    // Unosenje numbers credit card 
    element(by.css('.checkout-payment-method .ccard .number .input-text')).clear().sendKeys('5105105105105100');
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
 }

function clickToOpenMonth() {
    //  Klik to open month drop 
    element(by.className('select month')).click();
}

function selectMonth() {
    // Selektovanje meseca
    element(by.css('select#authnetcim-cc-exp-month.select.month')).all(by.tagName('option')).get(2).click(); 
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
}

function clickToOpenYear() {
    //  Klik to open year drop 
    element(by.className('select year')).click();
}

function selectYear() {
    // Selektovanje godine 
    element(by.css('select#authnetcim-cc-exp-year.select.year')).all(by.tagName('option')).get(3).click(); 
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
 }

function enterCvvNumber() {
    // Unosenje cvv numbers
    element(by.css('.checkout-payment-method .ccard .cvv .input-text')).sendKeys('123');
    // element(by.id('gf-input-1')).sendKeys('milos@idp.com');
 }

function clickOnPlaceOrder() {
    //  Klik on PLACE ORDER button
    element(by.className(' action primary checkout')).click();
}

 module.exports = {
    landOnAplsHomePage,
    clickOnAddToCart,
    clickToOpenCart,
    clickToGoToCheckoutPage,
    clickOnNextButton,
    clickOnCreditCartToOpenDrop,
    clickToAddNewCard,
    enterNumbersCreditCard,
    clickToOpenMonth,
    selectMonth,
    clickToOpenYear,
    selectYear,
    enterCvvNumber,
    clickOnPlaceOrder,
 }