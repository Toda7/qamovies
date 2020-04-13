function checkPollHeader() {
    // Provera da li se poll header ucitao
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection.with-header.user_poll'), 'CBANC Poll'), 7000);
}

function checkPollTitle() {
    // Provera da li se poll title ucitao u iframe
    var xxx = element(by.className('title-text'));
    expect(xxx.getText()).toEqual('Testing_Jennifer');
}

function checkFirstQuestion() {
    // Provera da li se ucitalo prvo pitanje
    var xxx = element(by.className('question-title-container'));
    expect(xxx.getText()).toEqual('1. In 2018, will you be relying more or less on the online channel for relationship building and product sales compared to 2017?');
}

function checkFirstRadioButton() {
    // Provera da li se prvi radio button u prvom pitanju'
    var xxx = element(by.className('radio-button-label-text question-body-font-theme user-generated'));
    expect(xxx.getText()).toEqual('A great deal more');
}

function checkThirdQuestion() {
    // Provera da li se ucitalo trece pitanje
    var xxx = element.all(by.className('question-title-container')).get(2);
    expect(xxx.getText()).toEqual('3. How many specific, dedicated, online channel educational campaigns (i.e. bill pay, PFM, cash management) did you run in 2017?');
}

function checkRadioButtonInThirdQuestion() {
    // Provera da li se ucitalo sesti radio button u trecem pitanju
    var xxx = element.all(by.className('radio-button-label-text question-body-font-theme user-generated')).get(13);
    expect(xxx.getText()).toEqual('More than Twelve');
}

module.exports = {
    checkPollHeader,
    checkPollTitle,
    checkFirstQuestion,
    checkFirstRadioButton,
    checkThirdQuestion,
    checkRadioButtonInThirdQuestion,
}