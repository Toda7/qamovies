function landOnTrugloPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo'); 
}

function clickOnReturnPolicyLink() {
   // Klik on Return policy link from footer
   element(by.id('modal-return-policy')).click();
}

function checkTextInReturnPolicyWindow() {
   // Provera da li se uctao text iz cockpita u return policy window
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.textToBePresentInElement($('span#return-policy-content'), 'Testing from PROT. We are TRUGLO!'), 7000);
}

function landOnProductPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo/new-head-banger-long-range-turkey-choke-tube.html'); 
}

function landOnMyAccountPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo/customer/account/'); 
}

function clickCloseButton() {
   //  Klik na close button to close the window
   element(by.className('action-close')).click();
}


 module.exports = {
   landOnTrugloPage,
   clickOnReturnPolicyLink,
   checkTextInReturnPolicyWindow,
   landOnProductPage,
   landOnMyAccountPage,
   clickCloseButton,
}