function clickPrintOrder() {
   // Klik na Print Order link 
   element(by.className('action print')).click();
   browser.sleep(2000);
}

function clickEsc() {
   //  Klik Escape na tastaturi
   element(by.css('body')).sendKeys(protractor.Key.ESCAPE);
   browser.sleep(500);
}

function checkGFLogo() {
   // Provera da li je dobar GF logo na print order strani
   var xxx = element.all(by.tagName('img')).get(0);
   expect(xxx.getAttribute('src')).toEqual('https://shop.outfitterextreme.com/pub/static/version1575471651/frontend/Guidefitter/luma/en_US/images/logo-shop-print.jpg');
   browser.sleep(500);
}

function checkTrugloLogo() {
   // Provera da li je dobar Truglo logo na print order strani
   var xxx = element.all(by.tagName('img')).get(1);
   expect(xxx.getAttribute('src')).toEqual('https://shop.outfitterextreme.com/pub/media//sales/store/logo_html/websites/70/truglo_00.png');
   browser.sleep(500);
}

function checkItemsOrderedTitle() {
   // Provera da li je dobar title za Items Ordered section
   var xxx = element(by.className('order-title'));
   expect(xxx.getText()).toEqual('Items Ordered');
   browser.sleep(500);
}

function checkOrderInformationTitle() {
   // Provera da li je dobar title za Order Information sekciju
   var xxx = element.all(by.className('block-title')).get(0);
   expect(xxx.getText()).toEqual('Order Information');
   browser.sleep(500);
}

 module.exports = {
   clickPrintOrder,
   clickEsc,
   checkGFLogo,
   checkItemsOrderedTitle,
   checkTrugloLogo,
   checkOrderInformationTitle,
 }