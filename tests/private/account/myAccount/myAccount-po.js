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

function clickOnNotification() {
    element(by.className('notifications')).click();
    // klik na Show email switch
    browser.sleep(2000);
}

function clickOnEmailMarketing() {
    element(by.className('field checkbox_field email_marketing')).click();
    // klik na Email marketing switch
    browser.sleep(2000);
}

function clickOnWeeklyActivity() {
    element(by.className('field checkbox_field email_activity_summary')).click();
    // klik na Activity Summary switch
    browser.sleep(2000);
}

function clickOnVendorWeeklyDigest() {
    element(by.className('field checkbox_field email_vendors_you_follow_digest')).click();
    // klik na Vendor Weekly Digest
    browser.sleep(2000);
}

function clickOnNewDiscussionCXO() {
    element(by.className('field checkbox_field email_discussions')).click();
    // klik na New Discussion in CXO Group
    browser.sleep(2000);
}

function selectGroupDigestCXO(){
    // Izaberi Group Digest in CXO Group
    element.all(by.className('field select_field digest')).get(0).all(by.tagName('option')).get(1).click();
    browser.sleep(2000);
}

function clickOnSaveNtf() {
    element(by.className('cta', 'Save Changes')).click();
    // klik na Save Ntf
    browser.sleep(2000);
}

function selectNeverInGroupDigestCXO(){
    // Izaberi NEVER u Group Digest in CXO Group
    element.all(by.className('field select_field digest')).get(0).all(by.tagName('option')).get(0).click();
    browser.sleep(2000);
}

function clickOnAvatarTab() {
    element(by.partialLinkText('AVATAR')).click();
    // klik na Avatar tab
    browser.sleep(2000);
}

function addProfilePhoto() {
    // Upload myphoto to profile picture
    var path = require('path');
    var fileToUpload = './QA.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    browser.sleep(3000);
 }

 function checkSuccessMessageForPhoto(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je save-ovano
    browser.wait(EC.textToBePresentInElement($('.message.success'), 'Avatar successfully updated.'), 5000);
}

// function clickOnEmailTab() {
//     element(by.partialLinkText('EMAIL')).click();
//     // Klik na Email tab
//     browser.sleep(2000);
// }

// function insertNewEmail() {
//     // Unosenje novog email-a 
//     element.all(by.css('input[type="text"]')).get(0).sendKeys('xxx@chicago.com');
//     browser.sleep(5000);
// }

// function insertNewEmail2() {
//     // Unosenje novog email-a 
//     element.all(by.css('input[type="text"]')).get(1).sendKeys('xxx@chicago.com');
//     browser.sleep(5000);
// }

// function insertPreviousEmail() {
//     // Unosenje prethodnog email-a 
//     element.all(by.css('input[type="text"]')).get(0).sendKeys(' 1@chicago.com');
//     browser.sleep(5000);
// }

// function insertPreviousEmail2() {
//     // Unosenje prethodnog email-a 
//     element.all(by.css('input[type="text"]')).get(1).sendKeys(' 1@chicago.com');
//     browser.sleep(5000);
// }

function clickOnPasswordTab() {
    element(by.partialLinkText('PASSWORD')).click();
    // Klik na Password tab
    browser.sleep(2000);
}

function clickOnPassResetBtn() {
    element(by.className('pass_reset', 'Reset Password')).click();
    // klik na Pass Reset btn
    browser.sleep(2000);
}

function checkSuccessMessageForPassreset(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je poslat email za reset pass
    browser.wait(EC.textToBePresentInElement($('.message.success'), 'just sent you an email to reset your password. (1@chicago.com)'), 5000);
}

function clickOnAlertsTab() {
    element(by.partialLinkText('ALERTS')).click();
    // Klik na Alerts tab
    browser.sleep(2000);
}

function insertMyAlert() {
    // Unosenje My Alerta
    element(by.name('keyword')).sendKeys('Pr');
    browser.sleep(2000);
    element(by.name('keyword')).sendKeys('ot');
    browser.sleep(2000);
    element(by.name('keyword')).sendKeys('ra');
    browser.sleep(2000);
    element(by.name('keyword')).sendKeys('ct');
    browser.sleep(2000);
    element(by.name('keyword')).sendKeys('or');
    browser.sleep(2000);
}

function clickOnCreateAlertBtn() {
    element(by.className('submit_btn', 'Create Alert')).click();
    // klik na Create Alert btn
    browser.sleep(2000);
}

function checkIsAlertHere(){
    element(by.className('page_body')).all(by.tagName('span','Protractor')).get(1);
}

function clickOnDeleteAlert() {
    element(by.partialLinkText('Delete')).click();
    // Klik na Delete Alerts 
    browser.sleep(2000);
}

function clickOnDeleteAlertConfirm() {
    element(by.className('actions', 'Delete')).click();
    // klik na Delete Alert confirm
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
    clickOnNotification,
    clickOnEmailMarketing,
    clickOnWeeklyActivity,
    clickOnVendorWeeklyDigest,
    clickOnNewDiscussionCXO,
    selectGroupDigestCXO,
    clickOnSaveNtf,
    selectNeverInGroupDigestCXO,
    clickOnAvatarTab,
    addProfilePhoto,
    checkSuccessMessageForPhoto,
    // clickOnEmailTab,
    // insertNewEmail,
    // insertNewEmail2,
    // clickOnChangeEmailBtn,
    clickOnPasswordTab,
    clickOnPassResetBtn,
    checkSuccessMessageForPassreset,
    clickOnAlertsTab,
    insertMyAlert,
    clickOnCreateAlertBtn,
    // insertPreviousEmail,
    // insertPreviousEmail2,
    checkIsAlertHere,
    clickOnDeleteAlert,
    clickOnDeleteAlertConfirm,


}