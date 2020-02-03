function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
    browser.sleep(2000);
}

function findDiscussion() {
    // Pronadji napravljenu diskusiju i klikni
    element(by.className('title', 'ATQA')).click(); 
    browser.sleep(1000);
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
   browser.wait(EC.textToBePresentInElement($('.reply'), 'ATQA Reply'), 5000);
   browser.sleep(500);
}  

 module.exports = {
    landOnFIProfessionalsHome,
    findDiscussion,
    clickReply,
    replyText,
    attachDoc,
    postReply,
    checkSuccess,
 }