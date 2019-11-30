function landOnHomePage() {
    browser.get('https://qa.cbancnetwork.com'); 
    browser.sleep(2000);
}

function clickOnBlog() {
    //  Klik na Blog link iz footera
    element(by.linkText('Blog')).click(); 
    browser.sleep(2000);
}

function checkMediaContact()  {
    // Proverava da li se ucitao Media contact section  
     var EC = protractor.ExpectedConditions;
     browser.wait(EC.textToBePresentInElement($('.cbanc_media'),'Media Contact:'), 5000);
 }

function checkBlogUrl() {
    // Provera Blog URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/blog'), 5000);
}

module.exports = {
    landOnHomePage,
    clickOnBlog,
    checkBlogUrl,
    checkMediaContact,
 }