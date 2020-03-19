function enterEmail1() {
   // Unesi email adresu profile_check@phoenix.com 
   element(by.name('email')).sendKeys('profile_check@phoenix.com');
}

function enterPassword1() {
   // Unesi password test1234
   element(by.name('password')).clear().sendKeys('test1234');
}

function discussionTitle() {
   // Unos texta za Discussion Title
   element(by.id('input-field title')).sendKeys('Check discussion on member profile page');
}

function discussionDesc() {
   // Unos texta za Discussion Desription
   element(by.className('rte')).sendKeys('Check it');
}

function selectTopic() {
   // Dodavanje topika
   element(by.cssContainingText('span', 'Administration')).click();
}

function landOnMemberProfilePage() {
   // Dolazak na profilnu stranu membera
   browser.get('https://qa.cbancnetwork.com/community/users/view/d4219456-ce23-4a93-bf81-58a5d29f3321');
}

function checkDiscussionDesc() {
   // Proveri discussion title
   var xxx = element(by.className('html_content'));
   expect(xxx.getText()).toEqual('Check it');
}

function landOnMyProfile() {
   // Dolazak na My Profile stranu
   browser.get('https://qa.cbancnetwork.com/community/users/view/d4219456-ce23-4a93-bf81-58a5d29f3321');
}

module.exports = {
   enterEmail1,
   enterPassword1,
   discussionTitle,
   discussionDesc,
   selectTopic,
   landOnMemberProfilePage,
   checkDiscussionDesc,
   landOnMyProfile,
}