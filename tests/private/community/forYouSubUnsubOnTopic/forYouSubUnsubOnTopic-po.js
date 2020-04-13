function landOnForYouPageLatest() {
    // Dolazak na For You
    browser.get('https://qa.cbancnetwork.com/community/home?filter=home&tab=latest'); 
}

function landOnTopicDetailPage() {
    // Dolazak na Topic Detail stranu
    browser.get('https://qa.cbancnetwork.com/community/topics/view/1ed4b722-6200-4a8c-ade9-0fade9a74ec4'); 
}

function thereIsNoDisc(){
    var EC = protractor.ExpectedConditions;
    // Provera da nema diskusija na Latest tabu
    browser.wait(EC.textToBePresentInElement($('.card-content'), 'Excellent work. You are all caught up!'), 7000);
    browser.sleep(2000);
}

function clickOnSubscribe() {
    //  Klik na Subscribe dugme
    element(by.className('btn subscribe_btn')).click();
}

function checkDiscShows(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je uspesno objavljena diskusija
    browser.wait(EC.textToBePresentInElement($('.title'), 'Voyage 30'), 7000);
    browser.sleep(2000);
}

function clickOnUnsubscribe() {
    //  Klik na Unsubscribe dugme
    element(by.className('btn subscribe_btn')).click();
}

module.exports = {
    landOnForYouPageLatest,
    landOnTopicDetailPage,
    clickOnSubscribe,
    thereIsNoDisc,
    checkDiscShows,
    clickOnUnsubscribe,
}