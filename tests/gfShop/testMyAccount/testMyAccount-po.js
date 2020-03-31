function checkTitleOnMyAccountPage() {
   // Provera da li se ucitao My Account title na My Account strani 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.page-title'), 'My Account'), 7000);
}

function checkAccountInformationSectionTitle() {
   // Provera da li se ucitao title za Account Information sekciju 
   var x1 = element.all(by.className('block-title')).get(3);
   expect(x1.getText()).toEqual('Account Information');
}

function checkAddressBookSectionTitle() {
   // Provera da li se ucitao title za Address Book sekciju 
   var x2 = element.all(by.className('block-title')).get(4);
   expect(x2.getText()).toEqual('Address Book MANAGE ADDRESSES');
}

function checkTitleOnAddressBookPage() {
   // Provera da li se ucitao Address Book title na Address Book strani 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.page-title'), 'Address Book'), 7000);
}

function checkDefaultAddressesSectionTitle() {
   // Provera da li se ucitao title za Default Addresses sekciju 
   var x3 = element.all(by.className('block-title')).get(2);
   expect(x3.getText()).toEqual('Default Addresses');
}

function checkAdditionalAddressEntriesSectionTitle() {
   // Provera da li se ucitao title za Additional Address Entries sekciju 
   var x4 = element.all(by.className('block-title')).get(3);
   expect(x4.getText()).toEqual('Additional Address Entries');
}

function checkChangeBillingAddressLink() {
   // Provera da li se ucitao Change Billing Address link 
   var x5 = element.all(by.className('action edit')).get(0);
   expect(x5.getText()).toEqual('CHANGE BILLING ADDRESS');
}

function checkChangeShippingAddressLink() {
   // Provera da li se ucitao Change Shipping Address link 
   var x6 = element.all(by.className('action edit')).get(1);
   expect(x6.getText()).toEqual('CHANGE SHIPPING ADDRESS');
}

function checkFirstEditAddressLink() {
   // Provera da li se ucitao Prvi Edit Address link 
   var x7 = element.all(by.className('action edit')).get(2);
   expect(x7.getText()).toEqual('EDIT');
}

function checkSecondEditAddressLink() {
   // Provera da li se ucitao Drugi Edit Address link 
   var x7 = element.all(by.className('action edit')).get(3);
   expect(x7.getText()).toEqual('EDIT');
}

function checkFirstDeleteAddressLink() {
   // Provera da li se ucitao Prvi Delete Address link 
   var x8 = element.all(by.className('action delete')).get(0);
   expect(x8.getText()).toEqual('DELETE');
}  

function checkSecondDeleteAddressLink() {
   // Provera da li se ucitao Drugi Delete Address link 
   var x8 = element.all(by.className('action delete')).get(1);
   expect(x8.getText()).toEqual('DELETE');
} 

function clickMyOrdersLink() {
   // Klik na My Orders link
   element(by.partialLinkText('My Orders')).click();
}

function checkMyOrdersURL() {
   // Provera da li se ucitao My Orders URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/sales/order/history/'), 7000);
}

function checkTitleOnMyOrdersPage() {
   // Provera da li se ucitao My Orders title na My Orders strani 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.base'), 'My Orders'), 7000);
}

function checkFirstViewOrderLink() {
   // Provera da li se ucitao Prvi View Order link 
   var x9 = element.all(by.className('action view')).get(0);
   expect(x9.getText()).toEqual('VIEW ORDER');
}  

function clickPageTwo() {
   // klik na 2 u paginaciji 
   element(by.className('items pages-items')).all(by.tagName('a')).get(0).click();
}

function checkSecondPageUrl() {
   // Provera da li se ucitao dobar URL za drugu stranu paginacije 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/sales/order/history/?p=2'), 7000);
}

function checkPaginationSuccess() {
   var EC = protractor.ExpectedConditions;
   // Provera da li je dobra paginacija
   browser.wait(EC.textToBePresentInElement($('.toolbar-amount'), 'Items 11 to 20'), 7000);
}

function clickMyPaymentDataLink() {
   // Klik na My Payment Data link
   element(by.partialLinkText('My Payment Data')).click();
}

function checkMyPaymentDataURL() {
   // Provera da li se ucitao My Payment Data URL
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://shop.outfitterextreme.com/truglo/customer/paymentinfo/'), 7000);
}

function checkTitleOnMyPaymentDataPage() {
   // Provera da li se ucitao My Payment Data title na My Payment Data strani 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.page-title'), 'My Payment Data'), 7000);
}

function checkCreditCardSectionTitle() {
   // Provera da li se ucitao title za Credit Card sekciju 
   var x4 = element.all(by.className('block-title')).get(2);
   expect(x4.getText()).toEqual('Credit Card');
}

function checkAddCreditCardSectionTitle() {
   // Provera da li se ucitao title za Add A Credit Card sekciju 
   var x4 = element.all(by.className('block-title')).get(3);
   expect(x4.getText()).toEqual('Add A Credit Card');
}

module.exports = {
   checkTitleOnMyAccountPage,
   checkAccountInformationSectionTitle,
   checkAddressBookSectionTitle,
   checkTitleOnAddressBookPage,
   checkDefaultAddressesSectionTitle,
   checkAdditionalAddressEntriesSectionTitle,
   checkChangeBillingAddressLink,
   checkChangeShippingAddressLink,
   checkFirstEditAddressLink,
   checkSecondEditAddressLink,
   checkFirstDeleteAddressLink,
   checkSecondDeleteAddressLink,
   clickMyOrdersLink,
   checkMyOrdersURL,
   checkTitleOnMyOrdersPage,
   checkFirstViewOrderLink,
   clickPageTwo,
   checkSecondPageUrl,
   checkPaginationSuccess,
   clickMyPaymentDataLink,
   checkMyPaymentDataURL,
   checkTitleOnMyPaymentDataPage,
   checkCreditCardSectionTitle,
   checkAddCreditCardSectionTitle,
}