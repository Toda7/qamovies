function landOnHome() {
   // dolazak na Home stranu
   browser.get('https://qa.cbancnetwork.com/community/home'); 
}

 function clickOnStartDiscussion() {
    //  Klik na Start Discussion dugme
    element(by.className('start_discussion')).click(); 
 }

function checkSelectAudienceTitleOnPage(){
   // Provera Select Audience title na strani 
   var xxx = element(by.tagName('h4'));
   expect(xxx.getText()).toEqual('Select Audience');
}

function checkTextOnPage(){
   // Provera texta na strani 
   var xxx = element(by.tagName('p'));
   expect(xxx.getText()).toEqual('Your account allows you to post content to different groups. Please select an audience.');
}

 function selectGroup() {
   //  Odaberi grupu
   element(by.cssContainingText('span.title', 'Professionals')).click(); 
}

function checkSelectedGroup(){
   // Provera da li smo izabrali dobru grupu
   var xxx = element(by.className('collection-item avatar'));
   expect(xxx.getText()).toEqual('FI Professionals\nPeople are added to the bankers group if there are an employee of an FI.');
}

function discussionTitle() {
   // Unos texta za Discussion Title
   element(by.id('input-field title')).sendKeys('ATQA Title');
}

function discussionDesc() {
   // Unos texta za Discussion Desription
   element(by.className('rte')).sendKeys('ATQA Description description testing credit');
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
}

function checkSuccess(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je uspesno objavljena diskusija
   browser.wait(EC.textToBePresentInElement($('.card-title'), 'Your discussion is successfully posted!'), 5000);
}  

function clickOnViewDiscussion() {
   //  Klik na View Discussion dugme
   element(by.className('btn btn-flat')).click(); 
}

// cekeri za discussion card 
function checkTitleOfDiscussion() {
   // Provera title of discussion 
   var xxx = element(by.tagName('h1'));
   expect(xxx.getText()).toEqual('ATQA Title');
}

function checkTopicsOfDiscussion() {
   // Provera topics of discussion 
   var xxx = element(by.className('tags'));
   expect(xxx.getText()).toEqual('Topics: Credit Union');
}

function checkUserName(){
   // Provera da li se ucitao user name
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .person_name'), 'Chicago Alberto Diaz FI'), 5000);
}

function checkFunctionLevel(){
   // Provera da li se ucitao function level
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_function'), 'Employee - Technology'), 5000);
}

function checkOrgSize(){
   // Provera da li se ucitao org size
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_size'), '($500M | IL)'), 5000);
}

function checkOrgLink(){
   // Provera da li se ucitao org link
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_link'), 'Bank of Chicago'), 5000);
}

function checkDescriptionOfDiscussion(){
   // Provera da li se ucitao description of discussion
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.community .html_content'), 'ATQA Description description testing credit'), 5000);
}

function checkDocumentInDiscussionCard(){
   // Provera dokumenta u discussion card
   var xxx = element(by.className('attachment txt'));
   expect(xxx.getText()).toEqual('TXT\nTestTXT.txt');
}

 module.exports = {
    landOnHome,
    clickOnStartDiscussion,
    checkSelectAudienceTitleOnPage,
    checkTextOnPage,
    selectGroup,
    checkSelectedGroup,
    discussionTitle,
    discussionDesc,
    attachDoc,
    selectTopic,
    postDiscussion,
    checkSuccess,
    clickOnViewDiscussion,
    checkTitleOfDiscussion,
    checkTopicsOfDiscussion,
    checkUserName,
    checkFunctionLevel,
    checkOrgSize,
    checkOrgLink,
    checkDescriptionOfDiscussion,
    checkDocumentInDiscussionCard,
 }