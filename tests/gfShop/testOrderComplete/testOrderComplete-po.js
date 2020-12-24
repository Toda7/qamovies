function lendOnProductDetails(){
    //dolazak na stranu producta
    browser.get('https://shop.outfitterextreme.com/truglo/hip-shot-adaptive-shooting-rest.html'); 
    browser.sleep(2000);
}

function clickOnOrdersLink(){
    // Klik na Orders link 
   element(by.id('tab_orders_content')).click();
 }

 function clickOnOrdersLastOrder(){
    // Klik na poslednji naruceni ordcer 
    element.all(by.className('col-created_at')).get(2).click();
 }

 function clickOnShip(){
    // Klik na Ship link 
   element(by.id('order_ship')).click();
 }

 function clickOnAddNumber(){
    //klik na add tracking number
   element(by.buttonText('Add Tracking Number')).click();
 }

 function addNumber(){
    //klik na add tracking number
   element(by.id('trackingN1')).clear().sendKeys('121312');
}

function scrollPage(){
    element(by.tagName('body')).sendKeys(protractor.Key.SPACE);
}

function clickOnSubmitShip(){
    //klik na Submit shipping
    element(by.buttonText('Submit Shipment')).click();
}

function landOnMyOrders() {
    // dolazak My Orders stranu
    browser.get('https://www.outfitterextreme.com/my-orders'); 
    browser.sleep(2000);
 }

 function clickOnOrderView(){
    // Klik na poslednji naruceni order 
    element.all(by.className('avatar-listing')).get(0).click();
 }
 
 function checkOrderShippedLabelInOrderList() {
    // Cekiranje Order Shipped labele u Order listi
    var xxx = element(by.className('avatar-listing-active avatar-listing')).element(by.className('thicker text-capitalize p-t-25'));
    expect(xxx.getText()).toEqual('Order Shipped');
 }

 function checkOrderShippedLabelInOrderDetails() {
   // Cekiranje Order Shipped labele u Order Details
   var xxx = element(by.className('container-fluid max520 p-y-05')).element(by.className('thicker text-capitalize p-t-25'));
   expect(xxx.getText()).toEqual('Order Shipped');
}

function clickProductName() {
   // Klik na naziv proizvoda u orderu
   element(by.partialLinkText('HIP-SHOT™ ADAPTIVE SHOOTING REST')).click();
}

function checkShopProductUrl() {
   // Provera URL-a na product details u Shopu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/hip-shot-adaptive-shooting-rest.html'), 7000);
}

function checkProductSKU() {
   // Provera SKU-a u Order Details
   var xxx = element.all(by.className('breakit'));
   expect(xxx.getText()).toEqual([ 'SKU# TG8935XB' ]);
}

function checkQtyAndPrice() {
   // Provera Qty i Cene
   var xxx = element.all(by.className('StyledFlex-web__sc-1o7egg3-0 hBRpUq')).get(1);
   expect(xxx.getText()).toEqual('Qty: 1\n$20.70');
}

function clickLeaveReview() {
   // Klik na Leave Review link u orderu
   element(by.className('btn btn-link btn-sm wrap p-l-0')).click();
}

function checkCreateReviewUrl() {
   // Provera URL-a na Create Review stranu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/reviews/create-review/27156'), 7000);
}

function checkShippingAddress() {
   // Provera Shipping adrese
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(1);
   expect(xxx.getText()).toEqual('SHIPPING ADDRESS:\nBradly Seales \n2690 COUNTY ROAD 64\nPLANTERSVILLE, Alabama 36758\nUnited States\n334-467-0770');
}

function checkShippingMethod() {
   // Provera Shipping Method
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(2);
   expect(xxx.getText()).toEqual('SHIPPING METHOD:\nFlat Rate - Fixed');
}

function checkBillingAddress() {
   // Provera Billing adrese
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(3);
   expect(xxx.getText()).toEqual('BILLING ADDRESS:\nBradly Seales \n2690 COUNTY ROAD 64\nPLANTERSVILLE, Alabama 36758\nUnited States\n334-467-0770');
}

function checkPaymentMethod() {
   // Provera Payment Method
   var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(4);
   expect(xxx.getText()).toEqual('PAYMENT METHOD:\nCredit Card\nAmericanExpress\n•••• •••••• •8431');
}

// function clickPrintLink() {
//    // Klik na Print link
//    element(by.partialLinkText('PRINT')).click();
// }

// function clickEsc() {
//    //  Klik Escape na tastaturi
//    element(by.tagName('print-preview-app')).sendKeys(protractor.Key.ESCAPE);
// }

// function checkOrderShippedLabelInPrintOrder() {
//    // Cekiranje Order Shipped labele na Print Order strani
//    var xxx = element(by.className('thicker text-capitalize p-t-25'));
//    expect(xxx.getText()).toEqual('Order Shipped');
// }

function checkIfPrintLinkIsPresent() {
   // Provera da li na strani postoji Print link
   var xxx = element.all(by.className('btn btn-link')).get(5);
   expect(xxx.getText()).toEqual('PRINT');
}

function clickCloseLink() {
   // Klik na Close link
   element(by.className('btn btn-link btn-link-secondary')).click();
}

function checkImportantText2() {
   // Provera da li se ucitao text u glavnoj sekciji
   var EC = protractor.ExpectedConditions;
   var c = element(by.className('container-fluid max520'));
   browser.wait(EC.textToBePresentInElement(c, "Important!Here you will find all of your recent and past orders. Check this page for your current order status, or to double check the broadheads you ordered last year or the load of ammo you ordered last month, to make sure you get the exact same product on your next order.All orders through Guidefitter are shipped directly from the brand’s warehouse. If you have not received tracking yet on an order just know we will get it to you as soon as we have it from the brand.Timing on shipping varies from brand to brand - to find out the average ship time for a brand, reference that brand’s “brand page” on The Grid. If you recently placed an order with a brand, you will receive an email shortly that outlines that particular brand’s average shipping times.Should you have any questions on you order(s) please reach out to the Guidefitter team, and not the brand, as the Guidefitter team should always be your point of contact on orders placed on The Grid."), 5000);
}

 module.exports = {
    clickOnOrdersLink,
    clickOnOrdersLastOrder,
    clickOnShip,
    clickOnAddNumber,
    addNumber,
    scrollPage,
    clickOnSubmitShip,
    landOnMyOrders,
    lendOnProductDetails,
    clickOnOrderView,
    checkOrderShippedLabelInOrderList,
    checkOrderShippedLabelInOrderDetails,
    clickProductName,
    checkShopProductUrl,
    checkProductSKU,
    checkQtyAndPrice,
    clickLeaveReview,
    checkCreateReviewUrl,
    checkShippingAddress,
    checkShippingMethod,
    checkBillingAddress,
    checkPaymentMethod,
    //  clickPrintLink,
    //  clickEsc,
    //  checkOrderShippedLabelInPrintOrder,
    checkIfPrintLinkIsPresent,
    clickCloseLink,
    checkImportantText2,
 }