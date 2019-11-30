function landOnHome() {
    // dolazak na Home stranu
    browser.get('https://qa.cbancnetwork.com/community/home'); 
    browser.sleep(2000);
 }

function landOnDocLibrary() {
    // dolazak na Doc Library stranu
    browser.get('https://qa.cbancnetwork.com/community/documents'); 
    browser.sleep(2000);
}

function clickOnSearchDocField() {
    //  Klikni na Search Doc polje
    element(by.className('input-field search_field')).click();
}

function enterSearchWord() {
    //  Unesi text u search polje
    element(by.css('.input-field input[type=text]')).clear().sendKeys('Do Not Touch This Document (QA Property)');
    browser.sleep(2500);
}

function clickOnDoc() {
    //  Klikni na dokument
    element(by.className('title', 'Do Not Touch This Document (QA Property)')).click();
    browser.sleep(1000);
}

function thankDoc() {
    //  Klikni na Thank dugme
    element(by.cssContainingText('span.text_link', 'Thanks')).click();
}

function checkSuccess1(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dokument uspesno thankovan
    browser.wait(EC.textToBePresentInElement($('.thanks_count '), '1'), 5000);

    browser.sleep(2000);
 }  

 function unThankDoc() {
    //  Unthankuj dokument (klikni na Thanked dugme)
    element(by.cssContainingText('span.text_link', 'Thanked')).click();
}

function checkSuccess2(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dokument uspesno unthankovan
    browser.wait(EC.textToBePresentInElement($('.thanks_count '), '0'), 5000);

    browser.sleep(2000);
 }  

 module.exports = {
    landOnHome,
    landOnDocLibrary,
    clickOnSearchDocField,
    enterSearchWord,
    clickOnDoc,
    thankDoc,
    checkSuccess1,
    unThankDoc,
    checkSuccess2,
 }