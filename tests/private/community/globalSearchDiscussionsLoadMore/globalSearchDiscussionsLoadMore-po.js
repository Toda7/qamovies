function checkIfFifteenResultsOnPage() {
   // Provera da li su se na strani pojavilo 15 rezultata 
   var list = element.all(by.className('collection-item avatar'));
   expect(list.count()).toBe(15);
}

function scrollPage() {
   // Klik na Space na tastaturi za Load More na strani
      element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function checkIfThirtyResultsOnPage() {
   // Provera da li se na strani pojavilo 30 rezultata 
   var list = element.all(by.className('collection-item avatar'));
   expect(list.count()).toBe(30);
}

 module.exports = {
   checkIfFifteenResultsOnPage,
   scrollPage,
   checkIfThirtyResultsOnPage,
 }