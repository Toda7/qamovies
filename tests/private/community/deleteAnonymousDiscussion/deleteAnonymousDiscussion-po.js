function landOnHome() {
   // dolazak na Home stranu
   browser.get('https://qa.cbancnetwork.com/community/home'); 
   browser.sleep(2000);
}

 function clickOnStartDiscussion() {
    //  Klik na Start Discussion dugme
    element(by.className('start_discussion')).click(); 
    browser.sleep(1000);
 }

 function selectGroup() {
   //  Odaberi grupu
   element(by.cssContainingText('span.title', 'Professionals')).click();
   browser.sleep(1000); 
}

function discussionTitle() {
   // Unos texta za Discussion Title
   element(by.id('input-field title')).sendKeys('ATQA Title');
   browser.sleep(1000);
}

function discussionDesc() {
   // Unos texta za Discussion Desription
   element(by.className('rte')).sendKeys('ATQA Description description testing credit');
   browser.sleep(1000);
}

function attachDoc() {
   var path = require('path');
   var fileToUpload = './TestTXT.txt',
   absolutePath = path.resolve(__dirname, fileToUpload);
   element(by.css('input[type="file"]')).sendKeys(absolutePath); 
}

function selectTopic() {
   // Dodavanje topika
   element(by.cssContainingText('span', 'Union')).click();
}

function postDiscussion() {
   // klik na Post Discussion dugme
   element(by.buttonText('Post Discussion')).click();
   browser.sleep(2000);
}

function checkSuccess(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je uspesno objavljena diskusija
   browser.wait(EC.textToBePresentInElement($('.card-title'), 'Your discussion is successfully posted!'), 5000);
   browser.sleep(2000);
}  

 module.exports = {
    landOnHome,
    clickOnStartDiscussion,
    selectGroup,
    discussionTitle,
    discussionDesc,
    attachDoc,
    selectTopic,
    postDiscussion,
    checkSuccess,
 }