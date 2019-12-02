function landOnMyOrdersPage() {
   // Dolazak na My Orders stranu 
   browser.get('https://shop.outfitterextreme.com/truglo/sales/order/history/');
   browser.sleep(2000);
}

function clickShopLogoInOrder() {
   // Klik na logo shopa u prvom orderu
   element.all(by.className('col shop')).get(1).element(by.tagName('a')).click();
   browser.sleep(2000);
}

function checkTrugloShopeHomepageUrl() {
   // Provera da li se ucitao dobar URL za Truglo Shop homepage
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo'), 5000);
}

function checkSuccess1() {
   // Provera da li je dobar title u Hero Imageu
   var xxx = element(by.className('gf-hero'));
   expect(xxx.getText()).toEqual('Truglo\nWHEN BRIGHTNESS COUNTS');
   browser.sleep(500);
}

function clickFirstViewOrderLink() {
   // Klik na prvi View Order link 
   element.all(by.className('action view')).get(0).click();
   browser.sleep(2000);
} 

function checkSuccess2() {
   // Provera da li postoji Print Order link na strani
   var xxx = element(by.className('action print'));
   expect(xxx.getText()).toEqual('PRINT ORDER');
   browser.sleep(500);
}

function checkSuccess3() {
   // Provera da li je dobar title za Items Ordered sekciju
   var xxx = element(by.className('order-title'));
   expect(xxx.getText()).toEqual('Items Ordered');
   browser.sleep(500);
}

function checkSuccess4() {
   // Provera da li je dobar title za Order Information sekciju
   var xxx = element.all(by.className('block-title')).get(2);
   expect(xxx.getText()).toEqual('Order Information');
   browser.sleep(500);
}

module.exports = {
   landOnMyOrdersPage,
   clickShopLogoInOrder,
   checkTrugloShopeHomepageUrl,
   checkSuccess1,
   clickFirstViewOrderLink,
   checkSuccess2,
   checkSuccess3,
   checkSuccess4,

}