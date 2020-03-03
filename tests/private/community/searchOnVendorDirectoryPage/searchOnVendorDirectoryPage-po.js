function checkNoVendorsMessage(){
    // Provera da li se ucitala poruka za no vendors 
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.row .col'), "Could not find vendors that match 'klasndlkasndlkasndklanskdlnasdnaskldnklasndlanskldnkla'"), 5000);
}

function checkURLwithSearchWord() {
    // Provera da li smo dobili search URL
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/vendors?q=klasndlkasndlkasndklanskdlnasdnaskldnklasndlanskldnkla'), 5000);
}

function enterearchWord() {
    // Unosenje texta u search polje
    element(by.css('input[type=text')).clear().sendKeys('Mandrill');
}

function countOneVendor() {
    // Provera da li se na strani nalazi 1 vendor
    let list = element.all(by.className('vendor card horizontal'));
    expect(list.count()).toBe(1);
}

function checkVendorName(){
    // Provera da li se ucitao vendor name u kartici
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.card .card-content .card-title'), 'Vendor Mandrill'), 5000);
}

function checkVendorAvatar() {
    // Provera da li je dobar vendor avatar
    var xxx = element.all(by.tagName('img')).get(1);
    expect(xxx.getAttribute('src')).toEqual('https://s3.amazonaws.com/cbanc/Public/education_assets/qa/ORG+AVATARS/Vendor+Mandrill.jpg');
    browser.sleep(500);
}

function checkFollowButton(){
    // Provera da li se ucitao FOLLOW button
    var xxx = element(by.className('follow btn btn-flat'));
    expect(xxx.getText()).toEqual('FOLLOW');
}

 module.exports = {
    checkNoVendorsMessage,
    checkURLwithSearchWord,
    enterearchWord,
    countOneVendor,
    checkVendorName,
    checkVendorAvatar,
    checkFollowButton,

}