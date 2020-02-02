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
    expect(xxx.getText()).toEqual('Topics: Testing, Stress Testing');
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
}