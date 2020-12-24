function landOnBowfishingPage() {
    // Dolazak na Bowfishing page
    browser.get('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html');
    browser.sleep(2000)
}

function clickOnListView() {
    // klik na List View Producta 
    element(by.className('modes-mode mode-list')).click();
    browser.sleep(2000);
 }

 function checkListViewURL() {
    // Provera da li se ucitao URL sa parametrom za position name za sorting
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html?product_list_mode=list'), 7000);
 }

 function clickOnLimiter() {
    // klik na Limiter 5 producta po strani 
    element.all(by.className('limiter-options')).get(1).all(by.tagName('option')).get(0).click();
    browser.sleep(5000);
 }

 function checkListViewLimit5URL() {
    // Provera da li se ucitao URL sa parametrom za position name za sorting
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html?product_list_mode=list&product_list_limit=5'), 7000);
 }

 function checkItemsNumber(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dobra paginacija
    var xxx = element.all(by.className('toolbar-amount')).get(0);
    expect(xxx.getText()).toEqual('Items 1-5 of 6');
 }

 function clickPageTwoPagination() {
    // klik na 2 u paginaciji 
    element.all(by.className('items pages-items')).get(1).element(by.tagName('a')).click();
    browser.sleep(2000);
 }

 function checkOneProductOnPage() {
    var EC = protractor.ExpectedConditions;
    // Da li se ucitao jedan Product na strani
    var xxx = element.all(by.className('product name product-item-name')).get(0);
    expect(xxx.getText()).toEqual('LUNKER™ BOWFISHING ARROW');
 }

 function checkPage2URL() {
    // Provera da li se ucitao URL page 2
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/bowfishing.html?p=2&product_list_limit=5&product_list_mode=list'), 7000);
 }

 function checkItemsNumberOn2Page(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je dobra paginacija
    var xxx = element.all(by.className('toolbar-amount')).get(0);
    expect(xxx.getText()).toEqual('Items 6-6 of 6');
   //  browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 6-6 of 6'), 7000);
   //  browser.sleep(2500);
 }


 module.exports = {
    landOnBowfishingPage,
    clickOnListView,
    clickOnLimiter,
    checkListViewURL,
    clickPageTwoPagination,
    checkListViewLimit5URL,
    checkOneProductOnPage,
    checkItemsNumber,
    checkItemsNumberOn2Page,
    checkPage2URL,
 }