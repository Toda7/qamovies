 function clickOnVendorLink(){
    element(by.partialLinkText('Vendor FIFA')).click();
    browser.sleep(2000);
 }

function checkDeletedMessage(){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Vendor FIFA successfully deleted.'), 7000);
  }   
  
 module.exports = {
    clickOnVendorLink,
    checkDeletedMessage,
 }