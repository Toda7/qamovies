function clickOnNewDiscussion() {
   // Klik na Novu diskusiju 
   element.all(by.className('html_content')).get(0).click();
}

function checkDiscussionDesc() {
   // Proveri discussion title
   var xxx = element(by.className('html_content'));
   expect(xxx.getText()).toEqual('ATQA Description description testing credit EDITED');
}

module.exports = {
   clickOnNewDiscussion,
   checkDiscussionDesc,
}