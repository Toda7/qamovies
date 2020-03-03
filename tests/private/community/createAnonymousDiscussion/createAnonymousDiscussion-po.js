function landOnFIProfessionalsHome() {
   // dolazak na FI Professionals page
   browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
   browser.sleep(2000);
}

function clickOnStartDiscussion() {
   //  Klik na Start Discussion dugme
   element(by.className('start_discussion')).click(); 
   browser.sleep(2000);
}

//  function selectGroup() {
//    //  Odaberi grupu
//    element(by.cssContainingText('span.title', 'Professionals')).click(); 
//    browser.sleep(2000);
// }

function discussionTitle() {
   // Unos texta za Discussion Title
   element(by.id('input-field title')).sendKeys('Anonymoussssly');
   browser.sleep(2000);
}

function discussionDesc() {
   // Unos texta za Discussion Desription
   element(by.className('rte')).sendKeys('Anonymoussssly Discussion description testing credit');
   browser.sleep(2000);
}

function selectTopic() {
   // Dodavanje topika
   element(by.cssContainingText('span', 'Reporting')).click();
   browser.sleep(2000);
}

function makeAnonymous() {
   // Klik na Anonymous switch
   element(by.className('switch anonymous')).click();
   browser.sleep(2000);
}

function postDiscussion() {
   // klik na Post Discussion dugme
   element(by.buttonText('Post Discussion')).click();
   browser.sleep(2500);
}

function clickOnViewDiscussion() {
   //  Klik na VIEW DISCUSSION dugme
   element(by.cssContainingText('.btn.btn-flat', 'View')).click(); 
   browser.sleep(2000);
}

function checkSuccess(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je uspesno objavljena anonimna diskusija
   browser.wait(EC.textToBePresentInElement($('.person_name'), 'Employee Technology'), 5000);
   browser.sleep(2500);
}  

 module.exports = {
    landOnFIProfessionalsHome,
    clickOnStartDiscussion,
   //  selectGroup,
    discussionTitle,
    discussionDesc,
    selectTopic,
    makeAnonymous,
    postDiscussion,
    clickOnViewDiscussion,
    checkSuccess,
 }