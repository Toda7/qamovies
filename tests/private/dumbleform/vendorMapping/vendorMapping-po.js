function landOnVendorMappingHomePage() {
    // Dolazak na vendor mapping Home Page
    browser.get('https://qa.cbancnetwork.com/dumbleform/e1ada22d-219a-48ff-8d7f-401125176fe1/home'); 
}
function checkHelpTitleOnHomePage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio help title on page
    browser.wait(EC.textToBePresentInElement($('.wizard_home'), 'Help us understand what Vendors your institution uses so we can help you.'), 7000);
}   
function checkHelpSummaryOnHomePage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se pojavio summary ispod title on page
    browser.wait(EC.textToBePresentInElement($('.middle'), 'Many of you want to know which other institutions are using the same Vendors that your institution uses. '), 7000);
}  
function clickOnGetStartedButton() {
    // Klik on GET STARTED button
    element(by.className('cta')).click();
    browser.sleep(2000);
}
function checkVendorMappingURL() {
    // Provera vendor mapping URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/dumbleform/e1ada22d-219a-48ff-8d7f-401125176fe1/vendor_mapping'), 7000);
    browser.sleep(2000);
}
function selectFirstProduct() {
    // Select first product
    element(by.cssContainingText('option', 'Vendor FIFA - PROT - Second product')).click();
    browser.sleep(2000);
}
function selectSecondProduct() {
    // Select second product
    $('[name="product_1"]').element(by.cssContainingText('option', 'Vendor FIFA - PROT - Third product')).click();
    browser.sleep(2000);
}
function selectThirdProduct() {
    // Select third product
    $('[name="product_2"]').element(by.cssContainingText('option', 'Add a new Vendor - Product')).click();
    browser.sleep(2000);
}
function enterTextInTheNewProductField() {
    // Enter text in new vendor - product field
    element(by.name('product_text_2')).sendKeys('Lorem ipsum dolor sit amet');
    browser.sleep(2000);
}
function selectdFourthProduct() {
    // Select fourth product
    $('[name="product_3"]').element(by.cssContainingText('option', 'Vendor FIFA - PROT - Fifth')).click();
    browser.sleep(2000);
}
function selectdFifthProduct() {
    // Select fifth product
    $('[name="product_4"]').element(by.cssContainingText('option', 'Add a new Vendor - Product')).click();
    browser.sleep(2000);
}
function enterAnotherTextInTheNewProductField() {
    // Enter another text in new vendor - product field
    element(by.name('product_text_4')).sendKeys('Cu numquam tractatos eos.');
    browser.sleep(2000);
}
function clickOnAddAnotherButton() {
    // Klik on + Add another button
    element(by.className('add_input')).click();
    browser.sleep(2000);
}
function enterThirdTextInTheCatagoryField() {
    // Enter text in my category field
    element(by.name('cat_5')).sendKeys('My PROT category');
    browser.sleep(2000);
}
function enterMyVendorNameTextInTheField() {
    // Enter text in my vendor field
    element(by.name('product_5')).sendKeys('My PROT Vendor - MY PROT Product');
    browser.sleep(2000);
}
function clickOnRemoveButton() {
    // Klik on Remove button
    element(by.buttonText('- Remove')).click();
    browser.sleep(2000);
}
function clickDoneButton() {
    // Klik on Done button
    element(by.buttonText('Done')).click();
    browser.sleep(2000);
}

module.exports = {
    landOnVendorMappingHomePage,
    checkHelpTitleOnHomePage,
    checkHelpSummaryOnHomePage,
    clickOnGetStartedButton,
    checkVendorMappingURL,
    selectFirstProduct,
    selectSecondProduct,
    selectThirdProduct,
    enterTextInTheNewProductField,
    selectdFourthProduct,
    selectdFifthProduct,
    enterAnotherTextInTheNewProductField,
    clickOnAddAnotherButton,
    enterThirdTextInTheCatagoryField,
    enterMyVendorNameTextInTheField,
    clickOnRemoveButton,
    clickDoneButton,
}