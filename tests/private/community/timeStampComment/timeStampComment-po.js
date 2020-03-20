function landOnDiscussionDetailsPage() {
    // Dolazak na Detail stranu diskusije
    browser.get('https://qa.cbancnetwork.com/community/discussions/view/f37cc7f5-3c6c-4d3d-bf0c-5fdf395c37d9?filter=home'); 
}

function clickOnComment() {
    //  Klik na Comment dugme
    element(by.cssContainingText('span.text_link', 'Comment')).click();
}

function insertCommentText() {
    // Unos texta za Comment
    element(by.className('rte')).sendKeys('Time Stamp Comment');
}

function postComment() {
    // klik na Comment dugme
    element(by.buttonText('Comment')).click();
}

function landOnForYouLatest() {
    // Dolazak na For You - Latest stranu
    browser.get('https://qa.cbancnetwork.com/community/home?filter=home&tab=latest'); 
}

function checkTimeStamp(){
    var EC = protractor.ExpectedConditions;
    // Provera Active now Time Stamp-a
    browser.wait(EC.textToBePresentInElement($('.community .card.item_card .item_sig .date_time.non_mobile'), 'Active: just now'), 5000);
}

function landOnFiProfessionals() {
    // Dolazak na Fi Professionals stranu
    browser.get('https://qa.cbancnetwork.com/community/groups/view/8182a044-d055-427f-ae7b-9dcf06e58e46'); 
}

function clickOnThreeDots() {
    // Klik na Tri tacke
    element(by.className('dropdown_menu')).click();
}

module.exports = {
    landOnDiscussionDetailsPage,
    clickOnComment,
    insertCommentText,
    postComment,
    landOnForYouLatest,
    checkTimeStamp,
    clickOnThreeDots,
    landOnFiProfessionals,
}