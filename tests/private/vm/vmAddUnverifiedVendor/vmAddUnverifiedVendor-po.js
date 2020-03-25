function clickOnAddVendorButton() {
    //  Klik n Discard Changes button
        element(by.buttonText('Add Unverified Vendor')).click();
        browser.sleep(2000);
}
function checkNameOfVendorOnVendorDetails(){
    var EC = protractor.ExpectedConditions;
    // Provera Fifa Vendor name kada na vendor details page
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Fifa'), 7000);
}   

module.exports = {
    clickOnAddVendorButton,
    checkNameOfVendorOnVendorDetails,
}