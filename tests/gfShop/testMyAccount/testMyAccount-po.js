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
   browser.wait(EC.urlContains('https://www.outfitterextreme.com/my-orders'), 7000);
}

function checkTitleOnMyOrdersPage() {
   // Provera da li se ucitao My Orders title na My Orders strani 
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('.base'), 'My Orders'), 7000);
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

function landOnMyAccountPage() {
   // povratak na Account stranu
   browser.get('https://shop.outfitterextreme.com/truglo/customer/account/'); 
   browser.sleep(2000);
}

function checkMyOrdersTitle() {
   // Provera cene
   var xxx = element.all(by.className('d-flex flex-items-xs-middle flex-items-xs-between p-t-3 p-b-1')).get(0);
   expect(xxx.getText(0)).toEqual('My Orders');

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
   clickMyPaymentDataLink,
   checkMyPaymentDataURL,
   checkTitleOnMyPaymentDataPage,
   checkCreditCardSectionTitle,
   checkAddCreditCardSectionTitle,
   landOnMyAccountPage,
   checkMyOrdersTitle,
}