function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
    browser.sleep(2000);
}

function clickUserMenu() {
    // Klik na User menu
    element(by.className('nav_user_auth')).click(); 
    browser.sleep(1000);
}

function clickInbox() {
    //  Klikni na Inbox link
    element(by.className('collection-item inbox_link')).click();
    browser.sleep(3000);
}

function clickNewMessage() {
    //  Klikni na New Message dugme
    element(by.className('fixed-action-btn')).click();
    browser.sleep(2000);
}

function findContact() {
    //  Search kontakt
    element(by.id('contact_search')).sendKeys('1st Detroit');
    browser.sleep(2000);
}

function clickContact() {
    //  Klik na kontakt
    element(by.className('autocomplete-list collection contacts')).click();
    browser.sleep(2000);
}

function attachDoc() {
    var path = require('path');
    var fileToUpload = './TestTXT.txt',
    absolutePath = path.resolve(__dirname, fileToUpload);
     element(by.css('input[type="file"]')).sendKeys(absolutePath); 
 }

function clickSendButton() {
    //  Klik na Send dugme
    element(by.className('right', 'send')).click();
    browser.sleep(2000);
}

// function checkSuccess(){
//     var EC = protractor.ExpectedConditions;
//     // Provera da li je uspesno obrisana diskusija
//     browser.wait(EC.textToBePresentInElement($('.card-content'), 'Excellent work. You are all caught up!'), 7000);
//     browser.sleep(2000);
//  }  

 module.exports = {
    landOnFIProfessionalsHome,
    clickUserMenu,
    clickInbox,
    clickNewMessage,
    findContact,
    clickContact,
    attachDoc,
    clickSendButton,
    // checkSuccess,
}