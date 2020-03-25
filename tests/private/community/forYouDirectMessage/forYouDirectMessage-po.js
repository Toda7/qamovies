function clickOnDiscussion() {
    // Klik na Diskusiju
    element(by.className('card_href')).click();
}

function clickOnDiscDMlink() {
    // Klik na DM link u diskusiji
    element.all(by.className('direct_message_link')).get(0).click();
}

function checkDirectMessageURL() {
    // Provera da li se ucitao DM URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/dm/compose?person_key=0f61aa13-6704-430b-a48b-1779fdf95810'), 3000);
}

function clickOnReplyDMlink() {
    //  Klik na DM link u riplaju
    element.all(by.className('direct_message_link')).get(1).click();
}

function checkDirectMessageURL2() {
    // Provera da li se ucitao DM URL 2
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/dm/compose?person_key=24d9b326-b130-43e0-82e5-f0fe33e365d7'), 3000);
}

module.exports = {
    clickOnDiscussion,
    clickOnDiscDMlink,
    checkDirectMessageURL,
    clickOnReplyDMlink,
    checkDirectMessageURL2,
}