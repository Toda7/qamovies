function landOnVideoPage() {
    // Dolazak na admin stranu
    browser.get('https://qa.cbancnetwork.com/education/webinars/on_demand'); 
    browser.sleep(2000);
}

function enterTextInSearchField() {
    // Unosenje texta u search field
    element(by.name('search_term')).sendKeys('New video');
}

function clickOnAgreePayButton() {
    //  Klik on Agree & Pay button
    element(by.buttonText('Agree & Pay')).click();
    browser.sleep(2000);
}

function checkPurchaseMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavila treca error poruka
    browser.wait(EC.textToBePresentInElement($('.buy'), 'This video has been purchased.'), 7000);
}   

function enterNumbersInCreditCardField() {
    //  Enter numbers in credit card field
    element(by.className('stripe_cc_form')).all(by.tagName('input')).get(0).sendKeys('4111111111111111');
    browser.sleep(2000);
}

function enterNameOfCreditCard() {
    //  Enter name of credit card field
    element(by.className('stripe_cc_form')).all(by.tagName('input')).get(1).sendKeys('Test');
    browser.sleep(2000);
}

function enterNumbersInZipField() {
    //  Enter numbers in zip code field
    element(by.className('field text_field zip')).all(by.tagName('input')).get(0).sendKeys('12345');
    browser.sleep(2000);
}

    module.exports = {
        landOnVideoPage,
        enterTextInSearchField,
        clickOnAgreePayButton,
        checkPurchaseMessage,
        enterNumbersInCreditCardField,
        enterNameOfCreditCard,
        enterNumbersInZipField,
    }