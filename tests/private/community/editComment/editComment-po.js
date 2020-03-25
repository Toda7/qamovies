function clickAction() {
   // Klik na Action menu
   element.all(by.className('dropdown_menu')).get(2).click();
   browser.sleep(1000);
}

function clickEditButton() {
   // Klik na Edit dugme
   element(by.cssContainingText('li.collection-item', 'Edit')).click();
   browser.sleep(1000);
}

function editCommentText() {
   // Edit Comment texta
   element(by.className('rte')).sendKeys(' EDITED');
   browser.sleep(1000);
}

function clickUpdateCommentButton() {
   // Klik na Update Comment dugme
   element(by.buttonText('Update Comment')).click();
   browser.sleep(1000);
}

function checkSuccess(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je uspesno editovan Comment
   browser.wait(EC.textToBePresentInElement($('.community .thread_detail .replies .reply .comments'), 'ATQA Comment EDITED'), 7000);
   browser.sleep(1000);
}  

module.exports = {
   clickAction,
   clickEditButton,
   editCommentText,
   clickUpdateCommentButton,
   checkSuccess,
}