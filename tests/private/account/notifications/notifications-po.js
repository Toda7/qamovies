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

module.exports = {
    clickOnNotification,
    clickOnEmailMarketing,
    clickOnWeeklyActivity,
    clickOnVendorWeeklyDigest,
    clickOnNewDiscussionCXO,
    selectGroupDigestCXO,
    clickOnSaveNtf,
    selectNeverInGroupDigestCXO,

}