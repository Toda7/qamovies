function enterDocName() {
    // Unosenje texta u search polje
    element(by.css('input[type=text')).clear().sendKeys('gotgotgot');
}

function clickOnDownloadDiscussion() {
    // Klik na Download button
    element(by.className('download_cta')).click();
}

function checkTitleInMessage() {
    // Provera da li se ucitao naslov u poruci
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.documents .background_overlay .modal .modal_content'), 'Thanks for downloading!'), 7000);
}

function checkQuestionInMessage() {
    // Provera da li se ucitalo pitanje u poruci
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.documents .background_overlay .modal .modal_content .question span'), 'Are you interested in occasionally receiving content directly from'), 7000);
}

function checkThankSectionInMessage() {
    // Provera da li se ucitala Thank recenica u poruci
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.documents .background_overlay .modal .modal_content'), 'Thanks for helping keep CBANC free by supporting our vendor partners.'), 7000);
}

 module.exports = {
    enterDocName,
    clickOnDownloadDiscussion,
    checkTitleInMessage,
    checkQuestionInMessage,
    checkThankSectionInMessage,
}