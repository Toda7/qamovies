function landOnMyPaymentDataPage() {
    // Dolazak na My Payment Data page
    browser.get('https://shop.outfitterextreme.com/ALPSOutdoorz/customer/paymentinfo/');
    browser.sleep(2000)
}

function enterFirstName() {
    // Unesi First Name  
    element(by.name('billing[firstname]')).clear().sendKeys('Bradly');
    browser.sleep(2000);
}

function enterLastName() {
    // Unesi Last Name  
    element(by.name('billing[lastname]')).clear().sendKeys('Seales');
    browser.sleep(2000);
}

function enterPhoneNumber() {
    // Unesi Phone Number  
    element(by.name('billing[telephone]')).clear().sendKeys('355-468-0755');
    browser.sleep(2000);
}

function enterStreet() {
    // Unesi Street  
    element(by.name('billing[street][]')).clear().sendKeys('4200 N Lamar Blvd Suite 250');
    browser.sleep(2000);
 }

function enterCity() {
    // Unesi City 
    element(by.name('billing[city]')).clear().sendKeys('Austin');
}

function clickToSelectProvince() {
    //  Select Texas from drop
    element(by.name('billing[region_id]')).all(by.tagName('option')).get(57).click(); 
    // element(by.css('select#authnetcim-card-id.select')).click();
}

function enterZip() {
    // Unesi Zip 
    element(by.name('billing[postcode]')).clear().sendKeys('78756');
}

function enterCcNumber() {
    // Unesi CC Number 
    element(by.name('payment[cc_number]')).clear().sendKeys('4111111111111111');
}

function clickToSelectMonth() {
    //  Select December from drop
    element(by.name('payment[cc_exp_month]')).all(by.tagName('option')).get(12).click(); 
    // element(by.css('select#authnetcim-card-id.select')).click();
}

function clickToSelectYear() {
    //  Select 2022. from drop
    element(by.name('payment[cc_exp_year]')).all(by.tagName('option')).get(3).click(); 
    // element(by.css('select#authnetcim-card-id.select')).click();
}

function enterCcvNumber() {
    // Unesi CCV Number 
    element(by.name('payment[cc_cid]')).clear().sendKeys('123');
}

function clickOnSaveButton(){
    // Klik on SAVE button
    element(by.className('action save primary')).click();
}

function checkSuccessMessageSave(){ 
    // Provera da li se pojavila success message posle saveovanja 
 var EC = protractor.ExpectedConditions;
 browser.wait(EC.textToBePresentInElement($('.messages .message'), 'Payment data saved successfully.'), 5000);
}

function clickOnDeleteButton(){
    // Klik on DELETE button
    element.all(by.className('action delete')).last().click();
}

function clickOnOkButton(){
    // Klik on OK button da potvrdis brisanje
    element(by.className('action-primary action-accept action primary')).click();
}

function checkSuccessMessageDelete(){ 
    // Provera da li se pojavila success message posle brisanja kartice 
 var EC = protractor.ExpectedConditions;
 browser.wait(EC.textToBePresentInElement($('.messages .message'), 'Payment record deleted.'), 5000);
}

module.exports = {
    landOnMyPaymentDataPage,
    enterFirstName,
    enterLastName,
    enterPhoneNumber,
    enterStreet,
    enterCity,
    clickToSelectProvince,
    enterZip,
    enterCcNumber,
    clickToSelectMonth,
    clickToSelectYear,
    enterCcvNumber,
    clickOnSaveButton,
    checkSuccessMessageSave,
    clickOnDeleteButton,
    clickOnOkButton,
    checkSuccessMessageDelete,
}