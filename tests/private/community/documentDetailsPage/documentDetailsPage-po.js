function checkBreadcrumbs() {
    // Provera da li se ucitao breadcrumbs
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.nav_title'), 'laqasadipapel'), 5000);
}

function checkDocIcon(){
    // Provera da li se ucitao doc icon(pdf)
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .document_detail .document_title .file_extension'), 'PDF'), 5000);
}

function checkDocTitle(){
    // Provera da li se ucitao doc title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .document_detail .document_title .constrain h1'), 'laqasadipapel'), 5000);
}

function checkTopics(){
    // Provera da li su se ucitali topici u kartici
    var xxx = element(by.className('tags'));
    expect(xxx.getText()).toEqual('Topics: Stress Testing, Testing');
}

function checkUserAvatar() {
    // Provera da li je dobar user avatar na document details page
    var xxx = element.all(by.tagName('img')).get(1);
    expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/membership/public/avatar/18c37233-abbf-428a-b586-2cb97014bafc');
    browser.sleep(500);
}

function checkUserName(){
    // Provera da li se ucitao user name
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .person_name'), 'Memphis 92 FI Foreva'), 5000);
}

function checkReputationScore(){
    // Provera da li se ucitao reputation score
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .reputation_score'), '1'), 5000);
}

function checkDirectMessage(){
    // Provera da li se ucitao direct message link
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .direct_message_link'), 'Direct message'), 5000);
}

function checkFunctionLevel(){
    // Provera da li se ucitao user function level
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_function'), 'President - Payments and Electronic Banking'), 5000);
}

function checkOrgLink(){
    // Provera da li se ucitao org link
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_link'), 'Bank of Memphis'), 5000);
}

function checkOrgSize(){
    // Provera da li se ucitao org size
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_size'), '($790M | TN)'), 5000);
}

function checkDiscussionLinkWhereDocIsPosted(){
    // Provera da li se ucitala discussion gde smo objavili document
    var xxx = element(by.className('reference'));
    expect(xxx.getText()).toEqual('This document was attached to: testing 1 2 3');
}

function checkDownloadButton(){
    // Provera da li se ucitao Download button
    var xxx = element(by.className('download_cta'));
    expect(xxx.getText()).toEqual('Download0');
}

function checkThanksButton(){
    // Provera da li se ucitao Thanks button
    var xxx = element(by.className('text_link'));
    expect(xxx.getText()).toEqual('Thanks');
}

function checkShareButton(){
    // Provera da li se ucitao Share button
    var xxx = element(by.className('share_link'));
    expect(xxx.getText()).toEqual('Share');
}

function clickOnTopicLink(){
    // Klik on Testing topic
    element(by.partialLinkText('Testing')).click();
}

function checkTopicURL() {
    // Provera da li se ucitao Topic URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/topics/view/907e0d79-2e57-449e-9864-8e75eb1a59f3'), 5000);
}

 function landOnDocDetailsPage() {
    // Dolazak na Documents details page
    browser.get('https://qa.cbancnetwork.com/community/documents/view/06aaf193-f96c-48b6-8a5f-ae09e1ae0bb4?q=laqasadipapel'); 
}

function clickOnDirectMessageLink(){
    // Klik on Direct message link
    element(by.partialLinkText('Direct message')).click();
}

function checkDirectMessageURL() {
    // Provera da li se ucitao direct message URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/dm/compose?person_key=18c37233-abbf-428a-b586-2cb97014bafc'), 5000);
}

function clickOnBankink(){
    // Klik on org link
    element(by.partialLinkText('Bank of Memphis')).click();
}

function checkBankURL() {
    // Provera da li se ucitao org URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/fis/view/b5d7eb00-76bd-41c3-92ec-0a8f5b7048e9'), 5000);
}

function clickOnDiscussionLink(){
    // Klik on discussion link
    element(by.partialLinkText('testing 1 2 3')).click();
}

function checkDiscussionURL() {
    // Provera da li se ucitao discussion URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/discussions/view/67d84c00-9730-494e-993c-a835b9ea5d31'), 5000);
}

 module.exports = {
    checkBreadcrumbs,
    checkDocIcon,
    checkDocTitle,
    checkTopics,
    checkUserAvatar,
    checkUserName,
    checkReputationScore,
    checkDirectMessage,
    checkFunctionLevel,
    checkOrgLink,
    checkOrgSize,
    checkDiscussionLinkWhereDocIsPosted,
    checkDownloadButton,
    checkThanksButton,
    checkShareButton,
    clickOnTopicLink,
    checkTopicURL,
    landOnDocDetailsPage,
    clickOnDirectMessageLink,
    checkDirectMessageURL,
    clickOnBankink,
    checkBankURL,
    clickOnDiscussionLink,
    checkDiscussionURL,
}