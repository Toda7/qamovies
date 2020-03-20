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

function clickOnSubscribe() {
    //  Klik na Subscribe dugme
    element(by.className('btn subscribe_btn')).click();
}

function checkUnsubscribe(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je sada UNSUBSCRIBE
    browser.wait(EC.textToBePresentInElement($('.topic .card.topic_summary .card-content .subscribe_btn'), 'UNSUBSCRIBE'), 5000);
}

function clickOnUnsubscribe() {
    //  Klik na Unsubscribe dugme
    element(by.className('btn subscribe_btn')).click();
}

function checkSubscribe(){
    var EC = protractor.ExpectedConditions;
    // Provera da li je sada SUBSCRIBE
    browser.wait(EC.textToBePresentInElement($('.topic .card.topic_summary .card-content .subscribe_btn'), 'SUBSCRIBE'), 5000);
}

module.exports = {
    landOnDiscoverPagePopular,
    clickOnSearchTopicsField,
    enterSearchWord,
    checkTopicSearchSuccess,
    clickOnTopicCard,
    clickOnSubscribe,
    checkUnsubscribe,
    clickOnUnsubscribe,
    checkSubscribe,
    
}