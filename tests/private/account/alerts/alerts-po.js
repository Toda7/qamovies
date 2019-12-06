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
    clickOnAlertsTab,
    insertMyAlert,
    clickOnCreateAlertBtn,
    checkIsAlertHere,
    clickOnDeleteAlert,
    clickOnDeleteAlertConfirm,

}