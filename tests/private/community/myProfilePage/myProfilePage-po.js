function landOnMyProfile() {
   // Dolazak na My Profile stranu
   browser.get('https://qa.cbancnetwork.com/community/users/view/e340806a-b6fd-4fe2-8f52-7858e3ad5408');    
}

function checkIfFifteenthDiscussionsOnPage() {
   // Provera da li se na strani pojavilo 15 diskusija 
   var list = element.all(by.className('card item_card'));
   expect(list.count()).toBe(14);
}

function checkNameInProfileBox() {
   // Provera imena membera u Profile boxu 
   var xxx = element(by.className('card-title'));
   expect(xxx.getText()).toEqual('Chicago Alberto Diaz FI');
}

function checkAvatarInProfileBox() {
   // Provera avatara membera u Profile boxu 
   var xxx = element(by.className('card member')).element(by.tagName('img'));
   expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/membership/public/avatar/e340806a-b6fd-4fe2-8f52-7858e3ad5408');
}

function clickBankNameInProfileBox() {
   // Klik na ime banke u Profile boxu 
   element(by.partialLinkText('Bank of Chicago')).click();    
}

function checkChicagoBankURL() {
   // Provera da li se ucitao URL za Bank of Chicago
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/fis/view/83b7fdaf-7b6f-4934-bca4-a235a725c1af'), 5000);
}

function clickAftGroup() {
   //  Klikni na AFT Group link
   element.all(by.className('collection-item avatar')).get(0).element(by.className('title')).click();
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

function clickFiProfessionalsGroup() {
   //  Klikni na FI Professionals Group link
   element.all(by.className('collection-item avatar')).get(1).element(by.className('title')).click();
}

function checkFiProfessionalsGroupURL() {
   // Provera da li se ucitao URL za Fi Professionals grupu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'), 5000);
}

// function checkSuccess1(){
//    var EC = protractor.ExpectedConditions;
//    // Provera da li je uspesno objavljen Reply
//    browser.wait(EC.textToBePresentInElement($('.reply'), 'ATQA Reply'), 5000);
//    browser.sleep(500);
// } 

module.exports = {
   landOnMyProfile,
   checkIfFifteenthDiscussionsOnPage,
   clickSpace,
   checkNameInProfileBox,
   checkAvatarInProfileBox,
   clickBankNameInProfileBox,
   checkChicagoBankURL,
   clickAftGroup,
   checkAftGroupURL,
   checkPageTitle,
   clickFiProfessionalsGroup,
   checkFiProfessionalsGroupURL,
   clickOnStartDiscussion,
   // checkSuccess1,
}