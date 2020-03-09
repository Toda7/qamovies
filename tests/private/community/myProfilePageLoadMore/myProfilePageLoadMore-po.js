function landOnMyProfile() {
   // Dolazak na My Profile stranu
   browser.get('https://qa.cbancnetwork.com/community/users/view/e340806a-b6fd-4fe2-8f52-7858e3ad5408');    
}

function checkIfFifteenDiscussionsOnPage() {
   // Provera da li se na strani pojavilo 15 diskusija 
   var list = element.all(by.className('card item_card'));
   expect(list.count()).toBe(15);
}

function scrollPage() {
   // Klik na Space na tastaturi za Load More na strani
      element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function checkIfThirtyDiscussionsOnPage() {
   // Provera da li se na strani pojavilo jos 15 diskusija 
   var list = element.all(by.className('card item_card'));
   expect(list.count()).toBe(30);
}

module.exports = {
   landOnMyProfile,
   checkIfFifteenDiscussionsOnPage,
   scrollPage,
   checkIfThirtyDiscussionsOnPage,
}