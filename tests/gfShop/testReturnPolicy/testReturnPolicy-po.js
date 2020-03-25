function landOnTrugloPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo'); 
   browser.sleep(5000);
}

function clickOnReturnPolicyLink() {
   // Klik on Return policy link from footer
   element(by.id('modal-return-policy')).click();
   browser.sleep(4000);
}

function checkTextInReturnPolicyWindow() {
   // Provera da li se uctao text iz cockpita u return policy window
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('span#return-policy-content'), 'Testing from PROT. We are TRUGLO!'), 7000);
}

function landOnProductPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo/new-head-banger-long-range-turkey-choke-tube.html'); 
   browser.sleep(5000);
}

function landOnMyAccountPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo/customer/account/'); 
   browser.sleep(5000);
}

function clickCloseButton() {
   //  Klik na close button to close the window
   element(by.className('action-close')).click();
   browser.sleep(2000);
}


 module.exports = {
   landOnTrugloPage,
   clickOnReturnPolicyLink,
   checkTextInReturnPolicyWindow,
   landOnProductPage,
   landOnMyAccountPage,
   clickCloseButton,
}