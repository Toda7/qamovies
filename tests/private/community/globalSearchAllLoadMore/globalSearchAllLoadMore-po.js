function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('Greyguard');
   browser.sleep(2000);
}

function checkIfThirtyResultsOnPage() {
   // Provera da li su se na strani pojavilo 30 rezultata 
   var list = element.all(by.className('collection-item avatar'));
   expect(list.count()).toBe(30);
}

function checkIfFourtySixResultsOnPage() {
   // Provera da li se na strani pojavilo 46 rezultata 
   var list = element.all(by.className('collection-item avatar'));
   expect(list.count()).toBe(46);
}

 module.exports = {
   enterSearchWord,
   checkIfThirtyResultsOnPage,
   checkIfFourtySixResultsOnPage,
 }