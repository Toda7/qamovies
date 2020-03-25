function landOnHomePage() {
    // dolazak na dashboard
    browser.get('https://qa.cbancnetwork.com');
}

function clickOnUserMenu() {
    //  Klik na User meni
    element(by.className('user_name')).click();
}

function clickOnSignOut() {
    //  Klik na Sign Out
    element(by.className('sign_out')).click();
}

function clickOnSignIn() {
    element(by.className('sign_in')).click();
}

function enterEmail() {
    element(by.name('email')).sendKeys('mihotesta@boston.com');
}

function enterPass() {
    element(by.name('password')).clear().sendKeys('test1234');
}

function submit() {
    element(by.className('auth0-label-submit')).click();
}

function startDiscusionPage() {
    // dolazak na start discussion stranu
    browser.get('https://qa.cbancnetwork.com/community/discussions/create');
}

function discussionTitle() {
    // Unos texta za Discussion Title
    element(by.id('input-field title')).sendKeys('Timeline Title Miho');
}

function discussionDesc() {
    // Unos texta za Discussion Desription
    element(by.className('rte')).sendKeys('Timeline testing description');
    browser.sleep(1000);
}

function attachDoc() {
    // dodavanje documenta u diskusiju
    var path = require('path');
    var fileToUpload = './TextTXT.rtf',
        absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
}

function selectTopic() {
    // Dodavanje topika
    element(by.cssContainingText('span', 'Testing')).click();
}

function postDiscussion() {
    // klik na Post Discussion dugme
    element(by.buttonText('Post Discussion')).click();
    browser.sleep(2000);
}

function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46');
    browser.sleep(2000);
}

function clickSearch() {
    //  Klikni na Search polje
    element(by.className('search_button')).click();
    browser.sleep(1000);
}
function enterSearchWord() {
    //  Unesi rec za pretragu u Search polje
    element(by.id('navbar_search_id')).clear().sendKeys('Timeline Title Miho');
    browser.sleep(2000);
}
function clickFirstResult() {
    //  Klikni na prvi search rezultat
    element(by.className('content_title')).click();
    browser.sleep(1000);
}

function clickReply() {
    //  Klikni na Reply dugme
    element(by.cssContainingText('span.text_link', 'Reply')).click();
    browser.sleep(1000);
}

function replyText() {
    // Unos texta za Reply
    element(by.className('rte')).sendKeys('Timeline Reply');
    browser.sleep(1000);
}

function postReply() {
    // klik na Post Reply dugme
    element(by.buttonText('Reply')).click();
    browser.sleep(2000);
}

function landOnFIProfessionalsHome() {
    // dolazak na FI Professionals page
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46');
    browser.sleep(2000);
}

function findDiscussion() {
    // Pronadji napravljenu diskusiju i klikni
    element(by.className('title', 'Timeline')).click();
    browser.sleep(1000);
}

function clickComment() {
    //  Klikni na Comment dugme
    element(by.cssContainingText('span.text_link', 'Comment')).click();
    browser.sleep(1000);
}

function commentText() {
    // Unos texta za Comment
    element(by.className('rte')).sendKeys('Timeline Comment');
    browser.sleep(1000);
}

function postComment() {
    // klik na post Comment dugme
    element(by.buttonText('Comment')).click();
    browser.sleep(2000);
}

function clickOnUserMenu2() {
    //  Klik na User meni
    element(by.className('nav_user_auth')).click();
}

function clickOnSignOut2() {
    // klik na sign out
    element(by.partialLinkText('Sign out')).click();
}

function enterEmail2() {
    // unos emaila
    element(by.name('email')).sendKeys('1@chicago.com');
}

function enterPass2() {
    // unos passworda
    element(by.name('password')).clear().sendKeys('test1234');
}

function landOnReputationPage() {
    // dolazak na Reputation stranu
    browser.get('https://qa.cbancnetwork.com/community/reputation');
    browser.sleep(3000);
}

function checkLogReply() {
    // Provera loga za thankovani reply
    var xxx = element.all(by.className('collection-item avatar')).get(0);
    expect(xxx.getText()).toEqual('Chicago Alberto Diaz FI\nthanked your reply on:\nTimeline Title Miho');
}

function checkLogDiscussion() {
    // Provera loga za tahankovanu diskusiju
    var xxx = element.all(by.className('collection-item avatar')).get(1);
    expect(xxx.getText()).toEqual('Chicago Alberto Diaz FI\nthanked your discussion\nTimeline Title Miho');
}

function clickOnViewDiscussion() {
    // klik na View discussion
    element(by.className('btn btn-flat')).click();
}

function clickOnViewDocument() {
    // klik na document 
    element(by.className('file_extension')).click();
}

function clickOnThank() {
    //  Klikni na Thank comment
    element.all(by.className('text_link')).get(4).click();
}

function checkLogDocument() {
    // Provera log za thankovani document
    var xxx = element.all(by.className('collection-item avatar')).get(0);
    expect(xxx.getText()).toEqual('Chicago Alberto Diaz FI\nthanked your document\nTextTXT');
}

function checkLogComment() {
    // Provera loga za thankovani comment
    var xxx = element.all(by.className('collection-item avatar')).get(1);
    expect(xxx.getText()).toEqual('Chicago Alberto Diaz FI\nthanked your comment on:\nTimeline Title Miho');
}

function clickOnLog() {
    // klik na log od obrisane doskusije
    element.all(by.className('truncate')).get(3).click();
}

function checkMessage() {
    // cekiranje poruke za obrisanu diskusiju
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Thread deleted by the author.'), 5000)
}

function clickOnThank() {
    //  Klikni na Thank dugme
    element.all(by.cssContainingText('span.text_link', 'Thanks')).get(0).click();
    browser.sleep(1000);
}



module.exports = {
    startDiscusionPage,
    landOnHomePage,
    clickOnUserMenu,
    clickOnSignOut,
    clickOnSignIn,
    enterEmail,
    enterPass,
    submit,
    discussionTitle,
    discussionDesc,
    attachDoc,
    selectTopic,
    postDiscussion,
    landOnFIProfessionalsHome,
    findDiscussion,
    clickComment,
    commentText,
    postComment,
    findDiscussion,
    clickReply,
    replyText,
    postReply,
    clickOnUserMenu2,
    clickOnSignOut2,
    enterEmail2,
    enterPass2,
    landOnReputationPage,
    checkLogReply,
    clickSearch,
    enterSearchWord,
    clickFirstResult,
    clickOnViewDiscussion,
    checkLogDiscussion,
    clickOnViewDocument,
    clickOnThank,
    checkLogDocument,
    checkLogComment,
    clickOnLog,
    checkMessage,
    // clickOnThankC,
}