function checkPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('CBANC | The professional network for the banking industry.'), 5000);
}
function checkButton(){
    var EC = protractor.ExpectedConditions;
    // Provera da li su se ucitali button for join
    browser.wait(EC.textToBePresentInElement($('#cta_join_1'), 'JOIN FOR FREE'), 5000);
    browser.sleep(2000);
}
function checkIntercom(){
    var interc = element(by.id('intercom-modal-container'));
    expect(interc.isDisplayed()).toBe(false);
}
module.exports = {
    checkPageTitle,
    checkButton,
    checkIntercom,
}