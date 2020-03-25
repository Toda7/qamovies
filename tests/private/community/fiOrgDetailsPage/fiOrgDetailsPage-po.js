function landOnFiOrgPage() {
    // Dolazak na Bank of Chicago stranu
    browser.get('https://qa.cbancnetwork.com/community/fis/view/83b7fdaf-7b6f-4934-bca4-a235a725c1af');
}

function checkFiOrgNameInProfileBox() {
    // Provera imena FI Orga u Profile boxu 
    var xxx = element(by.className('group_title'));
    expect(xxx.getText()).toEqual('Bank of Chicago');
}

function checkAvatarInProfileBox() {
    // Provera avatara FI Orga u Profile boxu 
    var xxx = element(by.className('card-content')).element(by.tagName('img'));
    expect(xxx.getAttribute('src')).toEqual('https://s3.amazonaws.com/cbanc/Public/education_assets/qa/ORG+AVATARS/Bank+of+Chicago.jpg');
}

function clickFiOrgLinkInProfileBox() {
    // Klik na link FI Orga u Profile boxu 
    element(by.partialLinkText('http://www.chicago.com')).click();    
 }

 function checkFiOrgUrl() {
    // Provera da li se ucitao URL za FI Org
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://chicago.com'), 7000);
 }

 function checkPhoneNumberInProfileBox() {
    // Provera telefona u Profile boxu FI Orga
    var xxx = element(by.className('info')).all(by.tagName('a')).get(1);
    expect(xxx.getAttribute('href')).toEqual('tel:2323456789');
}

module.exports = {
    landOnFiOrgPage,
    checkFiOrgNameInProfileBox,
    checkAvatarInProfileBox,
    clickFiOrgLinkInProfileBox,
    checkFiOrgUrl,
    checkPhoneNumberInProfileBox,
}