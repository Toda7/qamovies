
 function clickOnCreditMemoLink(){
    // Klik na Credit Memo link 
   element(by.id('order_creditmemo')).click();
}

function clickOnRefundedOfflineButton(){
    // Klik na Refunded offline 
    element(by.buttonText('Refund Offline')).click();
}

 function checkClosedLabel() {
     // Provera da li se ucitala Closed labela
     var xxx = element.all(by.className('col status')).get(1);
      expect(xxx.getText()).toEqual('Closed');
}

function checkRefundedLabelInOrdersList() {
  // Provera da li se ucitala Refunded labela u listi ordera 
  var xxx = element.all(by.className('thicker text-capitalize p-t-25')).get(0);
   expect(xxx.getText()).toEqual('Refunded');
}

function checkCloseButtonForOrderDetails() {
  // Provera da li se ucitao Close button za order details  
  var xxx = element.all(by.className('btn btn-link btn-link-secondary')).get(0);
   expect(xxx.getText()).toEqual('CLOSE');
}

function checkPrintLink() {
  // Provera da li se ucitao Print link
  var xxx = element.all(by.className('text-xs-right aside-menu-button-holder')).get(1);
   expect(xxx.getText()).toEqual('PRINT');
}

function checkBrandLogoLink() {
  // Provera da li se ucitao logo trijicon brenda
  var xxx = element(by.className('avatar avatar-thumb brand')).element(by.tagName('img'));  expect(xxx.getAttribute('src')).toEqual('https://shop.outfitterextreme.com/pub/media/email/logo/websites/70/truglo_00.png');
}

function checkRefundedLabelInOrderDetails() {
  // Provera da li se ucitala Refunded labela in order details 
  var xxx = element(by.className('StyledFlex-web__sc-1o7egg3-0 iRXXGU'));
   expect(xxx.getText()).toEqual('Refunded');
}

function checkProductDetails() {
  // Provera da li se ucitala Refunded labela in order details 
  var xxx = element(by.className('avatar-listing-disabled avatar-listing'));
   expect(xxx.getText()).toEqual('HIP-SHOT™ ADAPTIVE SHOOTING REST\nSKU# TG8935XB\nQty: 1\n$20.70\nQty. Refunded: 1');
}

function checkPricesSectionDetails() {
  // Provera cene za Subtotal, Shipping, Taxes, Total, Saving
  var xxx = element(by.className('StyledPadded-web__sc-1jotv5v-0 eBHuyX'));
   expect(xxx.getText()).toEqual('Subtotal\n$20.70\nShipping\n$10.00\nTaxes\n$0.00\nTotal\n$30.70\nSaving\n$0.00');
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
  // Provera Shipping Method-a
  var xxx = element.all(by.className('Column-web__k6dai2-0 fUNTPk')).get(4);
  expect(xxx.getText()).toEqual('PAYMENT METHOD:\nCredit Card\nAmericanExpress\n•••• •••••• •8431');
}

function clickOnOrdersLink(){
  // Klik na Orders link 
 element(by.id('tab_orders_content')).click();
}

function clickOnOrderLink(){
  // Klik na Order link 
 element.all(by.className('action view')).get(1).click();
}


 module.exports = {
   clickOnCreditMemoLink,
   clickOnRefundedOfflineButton,
   checkClosedLabel,
   checkRefundedLabelInOrdersList,
   checkRefundedLabelInOrderDetails,
   checkCloseButtonForOrderDetails,
   checkPrintLink,
   checkBrandLogoLink,
   checkProductDetails,
   checkPricesSectionDetails,
   checkShippingAddress,
   checkShippingMethod,
   checkBillingAddress,
   checkPaymentMethod,
   clickOnOrdersLink,
   clickOnOrderLink,
 }