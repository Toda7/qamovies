function clickMyCart() {
   // Klik na My Cart link
   element.all(by.className('header links')).get(1).all(by.tagName('li')).get(2).click();
   browser.sleep(2000);
}

function checkMyCartUrl() {
   // Provera da li se ucitao dobar URL za My Cart stranu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/checkout/cart/'), 7000);
}

function clickOrderGuidelines() {
   // Klik na Order Guidelines link
   element.all(by.className('header links')).get(1).all(by.tagName('li')).get(3).click();
   browser.sleep(2000);
}

function checkOrderGuidelinesUrl() {
   // Provera da li se ucitao dobar URL za Order Guidelines stranu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/gear-discounts/truglo'), 7000);
   browser.sleep(2000);
}

function clickAllGearDiscounts() {
   // Klik All Gear Discounts link
   element.all(by.className('header links')).get(1).all(by.tagName('li')).get(4).click();
   browser.sleep(2000);
}

function checkAllGearDiscountsUrl() {
   // Provera da li se ucitao dobar URL za Grid stranu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/gear-discounts'), 7000);
   browser.sleep(1000));
}

module.exports = {
   clickMyCart,
   checkMyCartUrl,
   clickOrderGuidelines,
   checkOrderGuidelinesUrl,
   clickAllGearDiscounts,
   checkAllGearDiscountsUrl,
}