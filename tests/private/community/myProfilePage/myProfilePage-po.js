function landOnMyProfile() {
   // Dolazak na My Profile stranu
   browser.get('https://qa.cbancnetwork.com/community/users/view/e340806a-b6fd-4fe2-8f52-7858e3ad5408'); 
   browser.sleep(1000);
}

function clickAftGroup() {
   //  Klikni na AFT Group link
   element.all(by.className('collection-item avatar')).get(0).element(by.className('title')).click();
   browser.sleep(1000);
}

function checkAftGroupURL() {
   // Provera da li se ucitao URL za AFT grupu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/groups/view/1bfdce90-7151-11e6-abb8-7831c1baaeec'), 5000);
}

function checkPageTitle() {
   // Provera da li smo na strani AFT grupe
   var xxx = element(by.className('group_title'));
   expect(xxx.getText()).toEqual('AFT Group');
}

// function checkSuccess1(){
//    var EC = protractor.ExpectedConditions;
//    // Provera da li je uspesno objavljen Reply
//    browser.wait(EC.textToBePresentInElement($('.reply'), 'ATQA Reply'), 5000);
//    browser.sleep(500);
// } 

module.exports = {
   landOnMyProfile,
   clickAftGroup,
   checkAftGroupURL,
   checkPageTitle,
   // checkSuccess1,
}