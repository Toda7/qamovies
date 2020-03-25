//function landOnDashboardPage() {
//browser.get('https://qa.cbancnetwork.com'); 
//browser.sleep(2000);
//}

function clickOnLendwell() {
    // Klik na Comunity link na dashboardu
    element(by.className('icon lendwell_icon')).click();
    browser.sleep(2000);
}

function checkContactForm() {
    // Da li se ucitalo Contact us forma
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.top_right'), 'Contact us to learn more'), 7000);
}

function checkLendwellUrl() {
    // Provera Url Risk assessmenta 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/lendwell'), 7000);
}

module.exports = {
    //landOnDashboardPage,
    clickOnLendwell,
    checkLendwellUrl,
    checkContactForm,
}