function clickOnLink() {
    //  Klik na CO link iz drop menu
    element(by.className('cielostar')).click();
 }
 function checkCoUrl() {
    // Provera cielostar URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/cielostar'), 7000);
}
function checkCoPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('Cielostar cost savings on medical benefits | CBANC'), 7000);
    browser.sleep(2000);
}
function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitao Introducing title on page
    browser.wait(EC.textToBePresentInElement($('.top_left'),'Introducing'), 7000);
}
function checkForm(){
    var EC = protractor.ExpectedConditions;
    // Provera da li se ucitala forma
    browser.wait(EC.textToBePresentInElement($('#request_form'),'REQUEST A QUOTE'), 7000);
}
 module.exports = {
    clickOnLink,
    checkCoUrl,
    checkCoPageTitle,
    checkTitleOnPage,
    checkForm,
 }
