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
    browser.wait(EC.textToBePresentInElement($('.buy'), 'This video has been purchased.'), 5000);
}   

function enterNumbersInCreditCardField() {
    //  Enter numbers in credit card field
    element(by.xpath('//*[@id="main"]/div/div/div[2]/aside/div/div/div/form/div[1]/input')).sendKeys('4111111111111111');
    browser.sleep(2000);
}

function enterNameOfCreditCard() {
    //  Enter name of credit card field
    element(by.xpath('//*[@id="main"]/div/div/div[2]/aside/div/div/div/form/div[2]/input')).sendKeys('Testing');
    browser.sleep(2000);
}

function enterNumbersInZipField() {
    //  Enter numbers in zip code field
    element(by.xpath('//*[@id="main"]/div/div/div[2]/aside/div/div/div/form/div[3]/div[2]/input')).sendKeys('12345');
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