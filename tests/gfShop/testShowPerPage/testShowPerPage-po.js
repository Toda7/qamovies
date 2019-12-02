function clickToSelectShow24PerPage() {
   // click to select show 24 per page 
   element.all(by.css('select#limiter.limiter-options')).get(1).all(by.tagName('option')).get(2).click();
   browser.sleep(5000); 
}

function checkNumberOfItems(){
   var EC = protractor.ExpectedConditions;
   // Provera koliko imamo items nakon koriscenja Show Per Page option 
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), '13 Items'), 5000);
   browser.sleep(2500);
}

function checkShowPerPageRL() {
   // Provera da li se ucitao URL sa parametrom za show 24 per page 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?product_list_limit=24'), 5000);
}

function clickToSelectShow9PerPage() {
   // click to select show 9 per page 
   element.all(by.css('select#limiter.limiter-options')).get(1).all(by.tagName('option')).get(0).click();
   browser.sleep(3000); 
}

function checkNumberOfItemsForShow9PerPage(){
   var EC = protractor.ExpectedConditions;
   // Provera koliko imamo items nakon koriscenja Show 9 Per Page option 
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 1-9 of 13'), 5000);
   browser.sleep(2500);
}

function checkShow9PerPageRL() {
   // Provera da li se ucitao URL sa parametrom za show 9 per page 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/firearm-hunting.html?product_list_limit=9'), 5000);
}

 module.exports = {
   clickToSelectShow24PerPage,
   checkNumberOfItems,
   checkShowPerPageRL,
   clickToSelectShow9PerPage,
   checkNumberOfItemsForShow9PerPage,
   checkShow9PerPageRL,
 }