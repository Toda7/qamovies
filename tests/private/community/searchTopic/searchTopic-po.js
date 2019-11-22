function landOnDiscover() {
    // dolazak na Discover stranu
    browser.get('https://qa.cbancnetwork.com/community/topics?s=popularity'); 
    browser.sleep(2000);
}

function clickOnSearchTopicsField() {
    //  Klikni na Search Topics polje
    element(by.className('input-field search_field')).click();
}

function enterSearchWord() {
    //  Unesi text u search polje
    element(by.css('.input-field input[type=text]')).clear().sendKeys('Arkansas');
    browser.sleep(2500);
}

function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je search uspesan
    browser.wait(EC.textToBePresentInElement($('.card-title'), 'Arkansas'), 5000);
    browser.sleep(2000);
 } 
  
 module.exports = {
    landOnDiscover,
    clickOnSearchTopicsField,
    enterSearchWord,
    checkSuccess,
    
}