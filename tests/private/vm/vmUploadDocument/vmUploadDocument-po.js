function clickOnTBDLink() {
    //  Klik na complete link from side menu
    element(by.partialLinkText('TBD')).click();
    browser.sleep(4000);
 }
 
 function clickOnVendorLink() {
    //  Klik na complete link from side menu
    element(by.partialLinkText('Fifa')).click();
    browser.sleep(2000);
 }

 function addDoc() {
    // add paid doc
    var path = require('path');
    var fileToUpload = './photo.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.id('file_input_id')).sendKeys(absolutePath);
    browser.sleep(3000);
 }

function checkUploadCompleteMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera dal se ucitala Upload Complete message
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Upload Complete'), 7000);
}   

function clickOnOkLink() {
    //  Klik na complete link from side menu
    element(by.buttonText('ok')).click();
    browser.sleep(2000);
 }

module.exports = {
    clickOnTBDLink,
    clickOnVendorLink,
    addDoc,
    checkUploadCompleteMessage,
    clickOnOkLink,
}