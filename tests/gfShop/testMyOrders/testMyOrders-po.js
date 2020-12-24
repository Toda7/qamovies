function landOnMyOrdersPage() {
   // Dolazak na My Orders stranu 
   browser.get('https://www.outfitterextreme.com/my-orders');
   browser.sleep(2000);
}

function checkMyOrdersTitle() {
   // Provera My Orders title-a
   var xxx = element(by.className('d-flex flex-items-xs-middle flex-items-xs-between p-t-3 p-b-1'));
   expect(xxx.getText()).toEqual('My Orders');
   browser.sleep(1000);
}

function checkImportantSection() {
   // Provera Important Section-a
   var EC = protractor.ExpectedConditions;
   var c = element(by.className('container-fluid max520'));
   browser.wait(EC.textToBePresentInElement(c, "Important!Here you will find all of your recent and past orders. Check this page for your current order status, or to double check the broadheads you ordered last year or the load of ammo you ordered last month, to make sure you get the exact same product on your next order.All orders through Guidefitter are shipped directly from the brand’s warehouse. If you have not received tracking yet on an order just know we will get it to you as soon as we have it from the brand.Timing on shipping varies from brand to brand - to find out the average ship time for a brand, reference that brand’s “brand page” on The Grid. If you recently placed an order with a brand, you will receive an email shortly that outlines that particular brand’s average shipping times.Should you have any questions on you order(s) please reach out to the Guidefitter team, and not the brand, as the Guidefitter team should always be your point of contact on orders placed on The Grid."), 5000);
}

function clickOnFirstOrder() {
   // Klik na prvi Order
   element.all(by.className('avatar-listing')).get(0).click();
   browser.sleep(2000);
} 

function checkIsPrintBtnThere() {
   // Provera da li postoji Print btn na strani
   var xxx = element.all(by.className('btn btn-link')).get(5);
   expect(xxx.getText()).toEqual('PRINT');
   browser.sleep(1000);
}

function checkIsCloseBtnThere() {
   // Provera da li postoji Close btn na strani
   var xxx = element(by.className('btn btn-link btn-link-secondary'));
   expect(xxx.getText()).toEqual('CLOSE');
   browser.sleep(1000);
}

function checkShippingAddress() {
   // Provera Shipping adrese
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(1);
   expect(xxx.getText()).toEqual('SHIPPING ADDRESS:\nBradly Seales \nMy street 4321\nTexas, Texas 90001\nUnited States\n333444');
}

function checkShippingMethod() {
   // Provera Shipping Method-a
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(2);
   expect(xxx.getText()).toEqual('SHIPPING METHOD:\nFlat Rate - Fixed');
}

function checkBillingAddress() {
   // Provera Billing adrese
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(3);
   expect(xxx.getText()).toEqual('BILLING ADDRESS:\nBradly Seales \nMy street 4321\nTexas, Texas 90001\nUnited States\n333444');
}

function checkPaymentMethod() {
   // Provera Shipping Method-a
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(4);
   expect(xxx.getText()).toEqual('PAYMENT METHOD:\nCredit Card\nAmericanExpress\n•••• •••••• •8431');
}

function checkBrandLogo() {
   // Provera Brand logoa
   var xxx = element(by.className('avatar avatar-thumb brand')).element(by.tagName('img'));
   expect(xxx.getAttribute('src')).toEqual('https://shop.outfitterextreme.com/pub/media/email/logo/websites/70/truglo_00.png');
}

function clickOnProduct() {
   // Klik na produkt
   element(by.className('d-block')).click();
   browser.sleep(2000);
}

function checkProductUrl() {
   // Provera URL-a product strane
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/omnia-1-4x24-30mm-ir-sp-1pc-illuminated-reticle-tactical-scope.html'), 5000);
}

module.exports = {
   landOnMyOrdersPage,
   checkMyOrdersTitle,
   checkImportantSection,
   clickOnFirstOrder,
   checkIsPrintBtnThere,
   checkIsCloseBtnThere,
   checkShippingAddress,
   checkShippingMethod,
   checkBillingAddress,
   checkPaymentMethod,
   checkBrandLogo,
   clickOnProduct,
   checkProductUrl,

}