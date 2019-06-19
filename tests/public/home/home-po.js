function checkPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC | The professional network for the banking industry.'), 5000);
}
function checkButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao join button 
    browser.wait(EC.textToBePresentInElement($('#cta_join_1'), 'JOIN FOR FREE'), 5000);
    browser.sleep(2000);
}
function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitao title on page
    browser.wait(EC.textToBePresentInElement($('.hero_content'), 'Answers for every bank and credit union'), 5000);
}
function checkNumbersOfDownloads(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za downloads
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '2,178,744'), 5000);
}
function checkNumberOfAnswers(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za answers
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '69,298'), 5000);
}
function checkNumbersOfFinancialInstitutions(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali brojevi za financial institutions
    browser.wait(EC.textToBePresentInElement($('.numbers_section'), '8,261'), 5000);
    browser.sleep(2000);
}
function checkIntercom(){
    // Provera da li se ucitao intercom
    var interc = element(by.id('intercom-modal-container'));
    expect(interc.isDisplayed()).toBe(false);
}
module.exports = {
    checkPageTitle,
    checkButton,
    checkTitleOnPage,
    checkNumbersOfDownloads,
    checkNumberOfAnswers,
    checkNumbersOfFinancialInstitutions,
    checkIntercom,
}