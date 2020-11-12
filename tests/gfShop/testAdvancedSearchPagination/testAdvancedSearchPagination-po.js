function enterProductName() {
   // Unesi short description
   element(by.id('short_description')).clear().sendKeys('truglo');
   browser.sleep(2000);
}

function checkSuccess1() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija na prvoj strani
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 1-12 of 26'), 7000);
   browser.sleep(2500);
}

function checkSuccess2() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija na drugoj strani
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 13-24 of 26'), 7000);
   browser.sleep(2500);
}

function clickPageThree() {
   // Klik na 3 u paginaciji 
   element.all(by.className('items pages-items')).get(1).all(by.tagName('a')).get(2).click();
   browser.sleep(2000);
}

function checkSuccess3() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija na trecoj strani
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 25-26 of 26'), 7000);
   browser.sleep(2500);
}

module.exports = {
   enterProductName,
   checkSuccess1,
   checkSuccess2,
   clickPageThree,
   checkSuccess3,
}