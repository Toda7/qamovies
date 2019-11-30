function landOnMagentoPage() {
    // Dolazak user's magento profile
    browser.get('https://shop.outfitterextreme.com/admin_vomn3fspk1/customer/index/edit/id/14911/#'); 
    browser.sleep(2000);
}

function clickOnPaymentDate() {
    // Klik on Payment Date
       element(by.id('tab_block_tokenbase_cards')).click();
       browser.sleep(3000);
}

function enterFirstName() {
   // Enter first name
   element(by.id('authnetcim-firstname')).clear().sendKeys('Bradly');
}

function enterLastName() {
    // Enter first name
    element(by.id('authnetcim-lastname')).clear().sendKeys('Seale');
 }

function enterNumber() {
    // Enter phone number
    element(by.id('authnetcim-telephone')).clear().sendKeys('555444');
 }

function enterStreet() {
    // Enter street 
    element(by.id('authnetcim-street')).clear().sendKeys('12345 Street');
}

function enterCity() {
    // Enter city
    element(by.id('authnetcim-city')).clear().sendKeys('New York');
}

function enterZip() {
    // Enter zip
    element(by.id('authnetcim-zip')).clear().sendKeys('90001');
}

function clickOnProvince() {
    // Click province to get drop
    element(by.id('authnetcim-region-id')).click();
}

function enterProvince() {
    // Enter province
    element(by.className('admin__control-select validate-select required-entry')).all(by.tagName('option')).get(23).click();
    // element.all(by.css('authnetcim-region-id')).get(2).all(by.tagName('option')).get(20).click();
}

function clickOnCountry() {
    // Click county to get drop
    element(by.id('authnetcim-country')).click();
}

function enterCountry() {
    // Enter country
    element(by.css('select#authnetcim-country.admin__control-select')).all(by.tagName('option')).get(2).click();
}

function clickOnCCType(){
    // Enter country 
    element(by.id('authnetcim-cc-type')).click();
}

function selectCcType() {
    // Odaberi iz Free Shipping drop menija
    element(by.css('select#authnetcim-cc-type.admin__control-select')).all(by.tagName('option')).get(2).click();
    browser.sleep(2000);
}

function enterCCNumber() {
    // Enter country 
    element(by.id('authnetcim-cc-number')).clear().sendKeys('371449635398431');
}

function clickOnMonth() {
    // Enter country 
    element(by.id('authnetcim-cc-exp-month')).click();
}

function selectMonth() {
    //  Select month
    element(by.css('select#authnetcim-cc-exp-month.admin__control-select')).all(by.tagName('option')).get(2).click();
    browser.sleep(2000);
}

function clickOnYear() {
    //  select year
    element(by.id('authnetcim-cc-exp-year')).click();
    browser.sleep(2000);
}

function selectYear() {
    //  Select year
    element(by.css('select#authnetcim-cc-exp-year.admin__control-select')).all(by.tagName('option')).get(2).click();
    browser.sleep(2000);
}

function enterZip1() {
    // Enter country 
    element(by.id('authnetcim-cc-cid')).clear().sendKeys('1234');
}

function clickOnSave() {
    //  Click on SAVE button
    element(by.className('action-save primary')).click();
    browser.sleep(2000);
}

module.exports = {
    landOnMagentoPage,
    clickOnPaymentDate,
    enterFirstName,
    enterLastName,
    enterNumber,
    enterStreet,
    enterCity,
    enterZip,
    clickOnProvince,
    enterProvince,
    clickOnCountry,
    enterCountry,
    clickOnCCType,
    selectCcType,
    enterCCNumber,
    clickOnMonth,
    selectMonth,
    clickOnYear,
    selectYear,
    enterZip1,
    clickOnSave,
}