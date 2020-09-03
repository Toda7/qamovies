function landOnArcheryPage() {
   // Dolazak na Archery page 
   browser.get('https://shop.outfitterextreme.com/truglo/archery.html');
   browser.sleep(2000);
}

function clickPageTwo() {
   // klik na 2 u paginaciji 
   element.all(by.className('items pages-items')).get(1).all(by.tagName('a')).get(0).click();
   browser.sleep(2000);
}

function checkUrl() {
   // Provera da li se ucitao dobar URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery.html?p=2'), 7000);
}

function checkSuccess() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 13-23 of 23'), 7000);
   browser.sleep(2500);
}


module.exports = {
   landOnArcheryPage,
   clickPageTwo,
   checkUrl,
   checkSuccess,
}