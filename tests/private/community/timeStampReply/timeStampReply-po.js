function landOnDiscussionDetailsPage() {
    // Dolazak na Detail stranu diskusije
    browser.get('https://qa.cbancnetwork.com/community/discussions/view/e5aa9fc4-beb5-4921-9ecc-3162d921a279?filter=group%2B8182a044-d055-427f-ae7b-9dcf06e58e46'); 
}

function clickOnReply() {
    //  Klikni na Reply dugme
    element(by.cssContainingText('span.text_link', 'Reply')).click();
}

function insertReplyText() {
    // Unos texta u Reply polje
    element(by.className('rte')).sendKeys('Time Stamp Reply');
}

function postReply() {
    // Klik na Reply dugme
    element(by.buttonText('Reply')).click();
}

function checkIsReplyPosted(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je Reply uspesno objavljen
    browser.wait(EC.textToBePresentInElement($('.reply'), 'Time Stamp Reply'), 7000);
}

function landOnForYouLatest() {
    // Dolazak na For You - Latest stranu
    browser.get('https://qa.cbancnetwork.com/community/home?filter=home&tab=latest'); 
}

function checkTimeStamp(){
    var EC = protractor.ExpectedConditions;
    // Provera Active now Time Stamp-a
    browser.wait(EC.textToBePresentInElement($('.community .card.item_card .item_sig .date_time.non_mobile'), 'Active: just now'), 7000);
}

function landOnFiProfessionals() {
    // Dolazak na Fi Professionals stranu
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
}

function clickThreeDots() {
    // Klik na Tri tacke
    element(by.className('dropdown_menu')).click();
}

module.exports = {
    landOnDiscussionDetailsPage,
    clickOnReply,
    insertReplyText,
    postReply,
    checkIsReplyPosted,
    landOnForYouLatest,
    checkTimeStamp,
    clickThreeDots,
    landOnFiProfessionals,
}