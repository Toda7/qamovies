function clickAction() {
   // Klik na Action menu
   element.all(by.className('dropdown_menu')).get(1).click();
   browser.sleep(1000);
}

function clickEditButton() {
   // Klik na Edit dugme
   element(by.cssContainingText('li.collection-item', 'Edit')).click();
   browser.sleep(1000);
}

function editReplyText() {
   // Edit Reply texta
   element(by.className('rte')).sendKeys(' EDITED');
   browser.sleep(1000);
}

function clickUpdateReplyButton() {
   // Klik na Update Reply dugme
   element(by.buttonText('Update Reply')).click();
   browser.sleep(1000);
}

function checkSuccess(){
   var EC = protractor.ExpectedConditions;
   // Provera da li je uspesno editovan Reply
   browser.wait(EC.textToBePresentInElement($('.community .thread_detail .replies .reply'), 'ATQA Reply EDITED'), 7000);
   browser.sleep(1000);
}  

module.exports = {
   clickAction,
   clickEditButton,
   editReplyText,
   clickUpdateReplyButton,
   checkSuccess,
}