function landOnMyAccountPage() {
    // Dolazak na My Account stranu
    browser.get('https://qa.cbancnetwork.com/membership/profile/'); 
    browser.sleep(2000);
}

function clearFirstName() {
    // Brisanje First Name-a 
    element(by.name('first_name')).clear();
    browser.sleep(2000);
}

function clearLasttName() {
    // Brisanje Last Name-a 
    element(by.name('last_name')).clear();
    browser.sleep(5000);
}

function clearJobTitle() {
    // Brisanje Job Title-a 
    element.all(by.name('title')).get(1).clear();
    browser.sleep(5000);
}

function clearWebsite() {
    // Brisanje Website-a 
    element(by.name('website')).clear();
    browser.sleep(5000);
}

function clearTagline() {
    // Unosenje Tagline-a 
    element(by.name('tagline')).clear('Protractor');
    browser.sleep(2000);
}

function cleartBio() {
    // Unosenje Bio-a 
    element(by.name('bio')).clear();
    browser.sleep(3000);
}

function clearPrimaryRole(){
    element.all(by.className('field select_field functional_area')).get(0).all(by.tagName('option')).get(0).click();
    browser.sleep(2000);
}

function clearRoleLevel(){
    element.all(by.className('field select_field functional_level')).get(0).all(by.tagName('option')).get(0).click();
    browser.sleep(2000);
}

function clickOnShowEmailSwitchNaOff() {
    element(by.className('checkbox on')).click();
    // klik na Show email switch
    browser.sleep(2000);
}

function clickOnShowEmailSwitchNaOn() {
    element(by.className('checkbox')).click();
    // klik na Show email switch
    browser.sleep(2000);
}

function clickOnSave() {
    element(by.className('cta', 'Save Changes')).click();
    // klik na Show email switch
    browser.sleep(2000);
}

function insertFirstName() {
    // Unosenje First Name-a 
    element(by.name('first_name')).sendKeys('Chicago Alberto');
    browser.sleep(2000);
}

function insertLasttName() {
    // Unosenje Last Name-a 
    element(by.name('last_name')).sendKeys('Diaz FI');
    browser.sleep(5000);
}

function insertJobTitle() {
    // Unosenje Job Title-a 
    element.all(by.name('title')).get(1).sendKeys('QA');
    browser.sleep(5000);
}

function insertWebsite() {
    // Unosenje Last Name-a 
    element(by.name('website')).sendKeys('https://www.qa.com');
    browser.sleep(5000);
}

function insertTagline() {
    // Unosenje Tagline-a 
    element(by.name('tagline')).sendKeys('Protractor');
    browser.sleep(2000);
}

function insertBio() {
    // Unosenje Bio-a 
    element(by.name('bio')).sendKeys('Rodjen Losh');
    browser.sleep(5000);
}

function checkSuccessMessage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je save-ovano
    browser.wait(EC.textToBePresentInElement($('.message.success'), 'Changes successfully saved.'), 5000);
}

function insertPrimaryRole(){
    //izaberi Primary Role
    element.all(by.className('field select_field functional_area')).get(0).all(by.tagName('option')).get(2).click();
    browser.sleep(2000);
}

function insertRoleLevel(){
    //izaberi Role Level
    element.all(by.className('field select_field functional_level')).get(0).all(by.tagName('option')).get(2).click();
    browser.sleep(2000);
}

module.exports = {
    landOnMyAccountPage,
    clearFirstName,
    clearLasttName,
    clearJobTitle,
    clearWebsite,
    clearTagline,
    cleartBio,
    clickOnShowEmailSwitchNaOff,
    clickOnShowEmailSwitchNaOn,
    clickOnSave,
    insertFirstName,
    insertLasttName,
    insertJobTitle,
    insertWebsite,
    insertTagline,
    insertBio,
    checkSuccessMessage,
    clearPrimaryRole,
    clearRoleLevel,
    insertPrimaryRole,
    insertRoleLevel,

}
