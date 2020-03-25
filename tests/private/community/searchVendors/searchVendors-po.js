function landOnVendorDirectory() {
    // dolazak na Vendor Directory stranu
    browser.get('https://qa.cbancnetwork.com/community/vendors'); 
    browser.sleep(2000);
}

function clickOnSearchVendorsField() {
    //  Klikni na Search Vendors polje
    element(by.className('input-field search_field')).click();
}

function enterSearchWord() {
    //  Unesi text u search polje
    element(by.css('.input-field input[type=text]')).clear().sendKeys('Vendor Pet Taxi');
    browser.sleep(2500);
}

function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je search uspesan
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Vendor Pet Taxi'), 7000);
    browser.sleep(2000);
 } 
  
 module.exports = {
    landOnVendorDirectory,
    clickOnSearchVendorsField,
    enterSearchWord,
    checkSuccess,
    
}