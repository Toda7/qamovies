function landOnDiscoverPagePopular() {
    // Dolazak na home stranu
    browser.get('https://qa.cbancnetwork.com/community/topics?s=popularity'); 
    browser.sleep(5000);
}

function clickOnSearchTopicsField() {
    //  Klikni na Search Topics polje
    element(by.className('input-field search_field')).click();
}

function enterSearchWord() {
    //  Unesi text u search polje
    element(by.css('.input-field input[type=text]')).clear().sendKeys('E-Sign');
    browser.sleep(2500);
}

function checkTopicSearchSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je search uspesan
    browser.wait(EC.textToBePresentInElement($('.card-title'), 'E-Sign'), 5000);
    browser.sleep(2000);
}

function clickOnTopicCard() {
    //  Klik na Topic Card
    element(by.partialLinkText('E-Sign')).click();
    browser.sleep(1000);
}

function clickOnStartDiscussion() {
    //  Klik na Start Discussion dugme
    element(by.className('start_discussion')).click(); 
    browser.sleep(1000);
}

function selectGroup() {
    //  Odaberi grupu
    element(by.cssContainingText('span.title', 'Professionals')).click();
    browser.sleep(1000); 
}
 
function discussionTitle() {
    // Unos texta za Discussion Title
    element(by.id('input-field title')).sendKeys('Discover Title');
    browser.sleep(1000);
}

function discussionDesc() {
    // Unos texta za Discussion Desription
    element(by.className('rte')).sendKeys('Discover Description text E-Sign');
    browser.sleep(1000);
}

function attachDoc() {
    // Dodavanje doc-a
    var path = require('path');
    var fileToUpload = './discover.pdf',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath); 
}

 function selectTopic() {
    // Dodavanje topika
    element(by.cssContainingText('span', 'E-Sign')).click();
}

 function postDiscussion() {
    // klik na Post Discussion dugme
    element(by.buttonText('Post Discussion')).click();
    browser.sleep(2000);
}

 function checkSuccess(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je uspesno objavljena diskusija
    browser.wait(EC.textToBePresentInElement($('.card-title'), 'Your discussion is successfully posted!'), 5000);
    browser.sleep(2000);
}

function checkDiscAndDocNumb() {
    // Provera broja diskusija i dokumenata
    var xxx = element(by.className('counters'));
    expect(xxx.getText()).toEqual('question_answer\n1\ndiscussions\nattachment\n3\ndocuments\nsupervisor_account\n0\nsubscribers');
}

function checkDiscAndDocNumb0() {
    // Provera broja diskusija i dokumenata
    var xxx = element(by.className('counters'));
    expect(xxx.getText()).toEqual('question_answer\n0\ndiscussions\nattachment\n0\ndocuments\nsupervisor_account\n0\nsubscribers');
}

function landOnTopicDetailPage() {
    // Dolazak na Topic Details stranu
    browser.get('https://qa.cbancnetwork.com/community/topics/view/b6a976eb-92f0-43a4-82af-204391606b91'); 
    
}

function clickOnSubscribe() {
    //  Klik na Subscribe dugme
    element(by.className('btn subscribe_btn')).click();
}

function clickOnUnsubscribe() {
    //  Klik na Subscribe dugme
    element(by.className('btn subscribe_btn')).click();
}

function clickOnDiscussion() {
    // Klik na Diskusiju
    element(by.className('constrain')).click();
}

function clickAction() {
    // Klik na Action menu
    element(by.className('dropdown_menu')).click();
}

function clickDelete() {
    //  Klikni na Delete dugme
    element(by.cssContainingText('li.collection-item', 'Delete')).click();
}

function checkSuccessDiscDelete(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je uspesno obrisana diskusija
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Excellent work. You are all caught up!'), 5000);
}

function checkUnsubscribe(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je sada UNSUBSCRIBE
    browser.wait(EC.textToBePresentInElement($('.topic .card.topic_summary .card-content .subscribe_btn'), 'UNSUBSCRIBE'), 5000);
}

function checkSubscribe(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je sada SUBSCRIBE
    browser.wait(EC.textToBePresentInElement($('.topic .card.topic_summary .card-content .subscribe_btn'), 'SUBSCRIBE'), 5000);
}

function clickOnViewDiscussion() {
    // Klik na View Discussion
    element.all(by.className('btn btn-flat')).get(0).click();
}

function clickReply() {
    //  Klikni na Reply dugme
    element(by.cssContainingText('span.text_link', 'Reply')).click();
}

function replyText() {
    // Unos texta za Reply
    element(by.className('rte')).sendKeys('Discover Reply');
}

function attachDocReply() {
    var path = require('path');
    var fileToUpload = './discover.pdf',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath); 
}

function postReply() {
    // klik na Reply dugme
    element(by.buttonText('Reply')).click();
}

function clickComment() {
    //  Klikni na Comment dugme
    element(by.cssContainingText('span.text_link', 'Comment')).click();
}

function commentText() {
    // Unos texta za Comment
    element(by.className('rte')).sendKeys('Discover Comment');
}

function attachDocComment() {
    var path = require('path');
    var fileToUpload = './discover.pdf',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath); 
}

function postComment() {
    // klik na Comment dugme
    element(by.buttonText('Comment')).click();
}

function checkThoughtLeaders(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Though Leaders section tu
    browser.wait(EC.textToBePresentInElement($('.collection.with-header .collection-header'), 'Thought Leaders'), 5000);
}

function checkTopVendors() {
    // Provera broja diskusija i dokumenata
    var xxx = element.all(by.className('collection-header')).get(1);
    expect(xxx.getText()).toEqual('Top Vendors');
}



module.exports = {
    landOnDiscoverPagePopular,
    clickOnStartDiscussion,
    selectGroup,
    discussionTitle,
    discussionDesc,
    attachDoc,
    selectTopic,
    postDiscussion,
    checkSuccess,
    clickOnSearchTopicsField,
    enterSearchWord,
    checkTopicSearchSuccess,
    clickOnTopicCard,
    checkDiscAndDocNumb,
    checkDiscAndDocNumb0,
    landOnTopicDetailPage,
    clickOnSubscribe,
    clickOnUnsubscribe,
    clickOnDiscussion,
    clickAction,
    clickDelete,
    checkSuccessDiscDelete,
    checkUnsubscribe,
    checkSubscribe,
    clickOnViewDiscussion,
    clickReply,
    replyText,
    attachDocReply,
    postReply,
    clickComment,
    commentText,
    attachDocComment,
    postComment,
    checkThoughtLeaders,
    checkTopVendors,
}