function checkProductDetailsPageUrl() {
   // Provera da li se ucitao dobar URL za Product Details stranu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery/accu-x-capture-bowfishing-rest.html'), 7000);
}

function checkProductBreadcrumb() {
   // Provera da li se ucitao poslednji breadcrumb (ime proizvoda)
   var xxx = element(by.className('item product'));
   expect(xxx.getText()).toEqual('ACCU X™ CAPTURE BOWFISHING REST');
   browser.sleep(1000);
}

function checkCategoryBreadcrumb() {
   // Provera da li se ucitao srednji breadcrumb (kategorija)
   var xxx = element(by.className('item category1089'));
   expect(xxx.getText()).toEqual('ARCHERY');
   browser.sleep(1000);
}

function checkHomeBreadcrumb() {
   // Provera da li se ucitao prvi breadcrumb (Home)
   var xxx = element(by.className('item home'));
   expect(xxx.getText()).toEqual('Home');
   browser.sleep(1000);
}

function clickCategoryBreadcrumb() {
   // Klik srednji breadcrumb (kategorija) 
   element(by.className('item category1089')).click();
   browser.sleep(2000);
} 

function checkCategoryPageUrl() {
   // Provera da li se ucitao dobar URL za Category stranu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/archery.html'), 7000);
}

function clickHomeBreadcrumb() {
   // Klik prvi breadcrumb (Home) 
   element(by.className('item home')).click();
   browser.sleep(2000);
}

function checkHomepageUrl() {
   // Provera da li se ucitao dobar URL za Homepage
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo'), 7000);
}


module.exports = {
   checkProductDetailsPageUrl,
   checkProductBreadcrumb,
   checkCategoryBreadcrumb,
   checkHomeBreadcrumb,
   clickCategoryBreadcrumb,
   checkCategoryPageUrl,
   clickHomeBreadcrumb,
   checkHomepageUrl,
}