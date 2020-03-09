function landOnMemberProfilePage() {
   // Dolazak na Profile stranu membera
   browser.get('https://qa.cbancnetwork.com/community/users/view/aeaeb491-6e60-4827-84b0-19212d48f189');    
}

function checkNameInProfileBox() {
   // Provera imena membera u Profile boxu 
   var xxx = element(by.className('card-title'));
   expect(xxx.getText()).toEqual('Admin User Mandrill');
}

function checkAvatarInProfileBox() {
   // Provera avatara membera u Profile boxu 
   var xxx = element(by.className('card member')).element(by.tagName('img'));
   expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/membership/public/avatar/aeaeb491-6e60-4827-84b0-19212d48f189');
}

function clickVendorNameInProfileBox() {
   // Klik na ime vendora u Profile boxu 
   element(by.partialLinkText('Vendor Mandrill')).click();    
}

function checkVendorMandrillUrl() {
   // Provera da li se ucitao URL za Vendor Mandrill
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/vendors/view/d12dd16a-08e7-48e7-9df2-7f4f5e5976d9'), 5000);
}

function clickVendorsGroup() {
   //  Klikni na Vendors Group link
   element.all(by.className('collection-item avatar')).get(0).element(by.className('title')).click();
}

function checkVendorsGroupUrl() {
   // Provera da li se ucitao URL za Vendors grupu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/groups/view/5e95225e-bfa4-45d2-9956-0bb6b0f18174'), 5000);
}

function checkRestrictionMessage() {
   // Provera da li se pojavila poruka da nemamo pristup Vendros grupi
   var xxx = element(by.className('card-content'));
   expect(xxx.getText()).toEqual('Group does not exist or you do not have permission to access this group.');
}

function clickHomeLink() {
   // Klik na Home link
   element(by.className('btn-flat')).click();
}

function checkHomeUrl() {
   // Provera da li se ucitao URL za Home stranu
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/home?filter=home&tab=latest'), 5000);
}

module.exports = {
   landOnMemberProfilePage,
   checkNameInProfileBox,
   checkAvatarInProfileBox,
   clickVendorNameInProfileBox,
   checkVendorMandrillUrl,
   clickVendorsGroup,
   checkVendorsGroupUrl,
   checkRestrictionMessage,
   clickHomeLink,
   checkHomeUrl,
}