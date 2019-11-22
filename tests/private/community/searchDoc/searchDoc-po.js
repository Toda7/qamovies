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

function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je search uspesan
    browser.wait(EC.textToBePresentInElement($('.title'), 'Do Not Touch This Document (QA Property)'), 5000);
    browser.sleep(2000);
 } 

//  function clickAvatarMenu() {
//     //  Klik na User Menu
//     element(by.className('nav_user_auth')).click();
//     browser.sleep(2000);
// }

// function signOut() {
//     //  Klik na Sign Out
//     element(by.className('collection-item', '"Sign out"')).click();
//     browser.sleep(2000);
// }
  
 module.exports = { 
    // clickOnHomeButton,
    landOnHome, 
    landOnDocLibrary,
    clickOnSearchDocField,
    enterSearchWord,
    checkSuccess,
    // clickAvatarMenu,
    // signOut,
}