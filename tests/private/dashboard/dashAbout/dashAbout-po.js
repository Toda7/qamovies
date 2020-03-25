function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnAbout() {
    //  Klik na About link iz footera
    element(by.linkText('About')).click(); 
    browser.sleep(2000);
}

function checkTextOnPage()  {
    // Proverava da li se ucitao Start Discussion button   
     var EC = protractor.ExpectedConditions;
     browser.wait(EC.textToBePresentInElement($('.hero_content'),'The professional network for bank and credit union professionals'), 7000);
 }

function checkAboutUrl() {
    // Provera About URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/about'), 7000);
}

module.exports = {
    landOnHomePage,
    clickOnAbout,
    checkAboutUrl,
    checkTextOnPage,
 }