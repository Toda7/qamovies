function clickOnLink() {
    //  Klik na Blog link iz footera
    element(by.linkText('Blog')).click(); 
    browser.sleep(2000);
}

function checkBlogURL() {
    // Provera Blog URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/blog'), 7000);
}

module.exports = {
    clickOnLink,
    checkBlogURL,
 }