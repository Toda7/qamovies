function clickOnContact() {
    //klik na Contact u footeru
    element(by.partialLinkText('Contact')).click();   
}

function checkPageTitle() {
    //provera page title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.top'), 'CBANC Support'), 5000);

}

function checkContactUsTitle() {
    //provera Contact us title
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.top'), 'Contact Us'), 5000);

}

function checkContactUsText() {
    //provera Contact us title
    //  var xxx = element.all(by.className('top'));
    // expect(xxx.getText()).toEqual('CBANC Support\nContact Us\nDo you have an issue or want to let us know\nwhat you think?\n512.583.4570 ext.403 or EMAIL SUPPORT\nFAQ\nYou can also find answers to common questions on our FAQ page.\nCBANC FAQ');

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.top'), 'CBANC SupportContact UsDo you have an issue or want to let us knowwhat you think?512.583.4570 ext.403 or EMAIL SUPPORTFAQYou can also find answers to common questions on our FAQ page.CBANC FAQ'), 5000);
}


function checkContactURL() {
    //Provera Contact URL-a
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('https://qa.cbancnetwork.com/support'), 7000);
}

function checkText() {
    // provera texta na strani 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.quote'), "We pride ourselves in offering amazing service to our members. If you have any questions, problems, or concerns please don't hesitate to reach out!"), 5000);
}

function checkAddress() {
    //provera Office location text 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('#location'), 'Office Location4200 N Lamar Blvd Suite 250 Austin, TX 78756'), 5000);
}

function checkCbancLogo() {
    // Provera da li se ucitoa CBANC logo u headeru 
    var xxx = element.all(by.tagName('img')).get(0);
    expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/0.0.1/img/cbanc-logo-transparent.svg');
    browser.sleep(500);
 }

module.exports = {
    clickOnContact,
    checkPageTitle,
    checkContactUsTitle,
    checkContactUsText,
    checkContactURL,
    checkText,
    checkAddress,
    checkCbancLogo,
}