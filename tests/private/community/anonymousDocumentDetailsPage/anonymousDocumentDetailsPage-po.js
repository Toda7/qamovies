function enterSearchWord() {
    // Unosenje texta u search polje
    element(by.css('input[type=text')).sendKeys('papeldilaqasa');
}

function checkBreadcrumbs() {
    // Provera da li se ucitao breadcrumbs
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.nav_title'), 'papeldilaqasa'), 5000);
}

function checkDocTitle(){
    // Provera da li se ucitao doc title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .document_detail .document_title .constrain h1'), 'papeldilaqasa'), 5000);
}

function checkDefaultUserAvatar() {
    // Provera da li je dobar default user avatar na document details page
    var xxx = element.all(by.tagName('img')).get(1);
    expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/avatar_gray.png');
    browser.sleep(500);
}

function checkAnonymousUserName(){
    // Provera da li se ucitao user name
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .title .person_name'), 'President Payments and Electronic Banking'), 5000);
}

function checkOrg(){
    // Provera da li se ucitao org 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_info'), 'a Bank'), 5000);
}

function checkOrgSize(){
    // Provera da li se ucitao org size
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.community .signature .constrain .info .org_size'), '($500M-$1B | South)'), 5000);
}

function checkDiscussionLinkWhereDocIsPosted(){
    // Provera da li se ucitala discussion gde smo objavili document
    var xxx = element(by.className('reference'));
    expect(xxx.getText()).toEqual('This document was attached to: Vel elaboraret temporibus ex, veri summo repudiare no qui.');
}

function checkTopics(){
    // Provera da li su se ucitali topici u kartici
    var xxx = element(by.className('tags'));
    expect(xxx.getText()).toEqual('Topics: Stress Testing, Testing');
}

function landOnDocDetailsPage() {
    // Dolazak na Documents details page
    browser.get('https://qa.cbancnetwork.com/community/documents/view/1617b398-48dc-47a4-8f75-a6654f80cde4?q=papeldilaqasa'); 
}

function clickOnDiscussionLink(){
    // Klik on discussion link
    element(by.partialLinkText('Vel elaboraret temporibus ex, veri summo repudiare no qui.')).click();
}

function checkDiscussionURL() {
    // Provera da li se ucitao discussion URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/discussions/view/47d0d3b2-fed6-4bdb-9e26-33a98d37771b'), 5000);
}


 module.exports = {
    enterSearchWord,
    checkBreadcrumbs,
    checkDocTitle,
    checkDefaultUserAvatar,
    checkAnonymousUserName,
    checkOrg,
    checkOrgSize,
    checkDiscussionLinkWhereDocIsPosted,
    checkTopics,
    landOnDocDetailsPage,
    clickOnDiscussionLink,
    checkDiscussionURL,
}