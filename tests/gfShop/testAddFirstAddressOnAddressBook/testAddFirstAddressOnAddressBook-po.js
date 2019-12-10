function lendOnBadlands() {
   // Klik to open user menu 
browser.get('https://shop.outfitterextreme.com/badlands');
browser.sleep(3000);
}

function lendOnUserDetailsInAdmin() {
   // Klik to open user menu 
browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/customer/index/edit/id/27540/');
browser.sleep(3000);
}

function clickOnAddressesLink(){
   // Klik na Addresses link 
  element(by.partialLinkText('Addresses')).click();
   browser.sleep(3000);
}

 module.exports = {
    lendOnBadlands,
    lendOnUserDetailsInAdmin,
    clickOnAddressesLink,
 }