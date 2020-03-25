function clickViewDiscussion() {
   // Klik na View Discussion dugme
   element.all(by.className('btn btn-flat')).get(0).click();
   browser.sleep(1000);
}

function clickAction() {
   // Klik na Action menu
   element(by.className('dropdown_menu')).click();
   browser.sleep(1000);
}

function clickEditButton() {
   // Klik na Edit dugme
   element(by.cssContainingText('li.collection-item', 'Edit')).click();
   browser.sleep(1000);
}

function editDiscussionText() {
   // Edit texta Diskusije
   element(by.className('rte')).sendKeys(' EDITED');
   browser.sleep(1000);
}

function clickUpdateButton() {
   // Klik na Update dugme
   element(by.buttonText('Update')).click();
   browser.sleep(1000);
}

function checkSuccess() {
   // Provera da li je uspesno editovana diskusija
   var xxx = element.all(by.className('html_content')).get(0);
   expect(xxx.getText()).toEqual('ATQA Description description testing credit EDITED');
}  

module.exports = {
   clickViewDiscussion,
   clickAction,
   clickEditButton,
   editDiscussionText,
   clickUpdateButton,
   checkSuccess,
}