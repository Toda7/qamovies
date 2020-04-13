function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('bank');
   browser.sleep(2000);
}

function checkIfSixteenResultsOnPage() {
  // Provera da li se na strani pojavilo 16 rezultata 
  var list = element.all(by.className('collection-item avatar'));
  expect(list.count()).toBe(16);
}

 module.exports = {
   enterSearchWord,
   checkIfSixteenResultsOnPage,
 }