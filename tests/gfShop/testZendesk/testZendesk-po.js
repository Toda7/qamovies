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

 module.exports = {
   landOnTrugloPage,
   clickOnZendesk,
}