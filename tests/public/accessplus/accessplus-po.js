function clickOnLink() {
    //  Klik na ondemand link iz drop menu
    element(by.className('submenu_item link_all_access_plus')).click();
}

 function checkAccessPlus() {
    // Provera accessplus URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/cbanc-education'), 7000);
    browser.sleep(2000);
}

function checkAccessPlusPageTitle(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.titleIs('WEBINARS | CBANC'), 7000);
}

function checkTitleOnPage(){
    var EC = protractor.ExpectedConditions;
    //  Provera da li se ucitao page title
    browser.wait(EC.textToBePresentInElement($('.hero_text_wrapper'), 'Training for your Entire Financial Institution'), 7000);
}


module.exports = {
    clickOnLink,
    checkAccessPlus,
    checkAccessPlusPageTitle,
    checkTitleOnPage,
}