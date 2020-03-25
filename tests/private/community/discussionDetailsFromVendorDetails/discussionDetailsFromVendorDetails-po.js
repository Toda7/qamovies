function clickOnFirstDiscussion() {
    // Klik on prvu diskusiju na strani 
    element(by.className('card_href')).click();
}

function checkGroupOfDiscussion() {
    // Provera grupe u kojoj je diskusija postovana
    var xxx = element(by.className('shared_with'));
    expect(xxx.getText()).toEqual('in FI Professionals');
}

function checkNotificationSwitchOfDiscussion() {
    // Provera Notification linka
    var xxx = element(by.className('notifications'));
    expect(xxx.getText()).toEqual('notifications_none\nNOTIFICATIONS OFF');
}

function checkTitleOfDiscussion() {
    // Provera title of discussion 
    var xxx = element(by.tagName('h1'));
    expect(xxx.getText()).toEqual('Voyage 30');
 }

function checkTopicsOfDiscussion() {
    // Provera topics of discussion 
    var xxx = element(by.className('tags'));
    expect(xxx.getText()).toEqual('Topics: Symitar Episys');
 }

 function checkUserName(){
    // Provera da li se ucitao user name
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .person_name'), 'Admin User Mandrill'), 7000);
}

function checkReputationScore(){
    // Provera da li se ucitao reputation score
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .reputation_score'), '1'), 7000);
}

function checkDirectMessage(){
    // Provera da li se ucitao direct message link
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .direct_message_link'), 'Direct message'), 7000);
}

function checkFunctionLevel(){
    // Provera da li se ucitao user function level
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_function'), 'SVP - Credit and Lending'), 7000);
}

function checkOrgLink(){
    // Provera da li se ucitao org link
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_link'), 'Vendor Mandrill'), 7000);
}

function checkDescriptionOfDiscussion(){
    // Provera da li se ucitao description of discussion
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .html_content'), 'Load More 30'), 7000);
}

function checkReplyButton(){
    // Provera da li se ucitao Reply button
    var xxx = element(by.className('reply_cta'));
    expect(xxx.getText()).toEqual('Reply');
}

function checkThanksButton(){
    // Provera da li se ucitao Reply button
    var xxx = element.all(by.className('text_link')).get(1);
    expect(xxx.getText()).toEqual('Thanks');
}

function checkShareButton(){
    // Provera da li se ucitao Reply button
    var xxx = element(by.className('share_link'));
    expect(xxx.getText()).toEqual('Share');
}

module.exports = {
    clickOnFirstDiscussion,
    checkGroupOfDiscussion,
    checkNotificationSwitchOfDiscussion,
    checkTitleOfDiscussion,
    checkTopicsOfDiscussion,
    checkUserName,
    checkReputationScore,
    checkDirectMessage,
    checkFunctionLevel,
    checkOrgLink,
    checkDescriptionOfDiscussion,
    checkReplyButton,
    checkThanksButton,
    checkShareButton,
 }
 