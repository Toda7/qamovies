function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
    browser.sleep(2000);
}

function clickSearch() {
   //  Klikni na Search polje
   element(by.className('search_button')).click();
   browser.sleep(1000);
}

function enterSearchWord() {
   //  Unesi rec za pretragu u Search polje
   element(by.id('navbar_search_id')).clear().sendKeys('ATQA');
   browser.sleep(2000);
}

function clickFirstResult() {
   //  Klikni na prvi search rezultat
   element(by.className('content_title')).click();
   browser.sleep(2000);
}

function clickReply() {
    //  Klikni na Reply dugme
    element(by.cssContainingText('span.text_link', 'Reply')).click();
    browser.sleep(1000);
}

function replyText() {
    // Unos texta za Reply
    element(by.className('rte')).sendKeys('ATQA Reply');
    browser.sleep(1000);
 }

 function attachDoc() {
   var path = require('path');
   var fileToUpload = './TestTXT.txt',
   absolutePath = path.resolve(__dirname, fileToUpload);
   element(by.css('input[type="file"]')).sendKeys(absolutePath); 
}

 function postReply() {
    // klik na Reply dugme
    element(by.buttonText('Reply')).click();
    browser.sleep(2000);
 }

function checkSuccess(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je uspesno objavljen Reply
   browser.wait(EC.textToBePresentInElement($('.reply'), 'ATQA Reply'), 7000);
   browser.sleep(1000);
}  

 module.exports = {
    landOnFIProfessionalsHome,
    clickSearch,
    enterSearchWord,
    clickFirstResult,
   //  findDiscussion,
    clickReply,
    replyText,
    attachDoc,
    postReply,
    checkSuccess,
 }