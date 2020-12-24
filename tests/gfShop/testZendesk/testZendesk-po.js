function landOnTrugloPage() {
   // Dolazak na home page
   browser.get('https://shop.outfitterextreme.com/truglo'); 
   browser.sleep(5000);
}

function clickOnZendesk() {
   // Klik on Zendesk to open form
   var xxx = element(by.id('launcher'));
   xxx.click();
}

function clickOnDelete() {
   // Klik na delete ikonicu
   element(by.className('action delete')).click();
}
   

function clickOnCart() {
   // Klik on Cart
   element(by.className('action showcart')).click();
}


 module.exports = {
   landOnTrugloPage,
   clickOnZendesk,
   clickOnDelete,
   clickOnCart,
}