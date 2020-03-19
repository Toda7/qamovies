function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('Sixskins');
   browser.sleep(2000);
}

function checkSearchResultsNumber() {
   // Provera broja rezultata pretrage
   var xxx = element(by.className('infoblurb'));
   expect(xxx.getText()).toEqual('There are 4 results for "Sixskins"');
}

function checkDiscussionIcon() {
   // Provera ikone za diskusiju u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(0);
   expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/thread.png');
}

function checkDiscussionTitle() {
   // Provera naslova za diskusiju u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_title')).get(0);
   expect(xxx.getText()).toEqual('Sixskins');
}

function checkDiscussionText() {
   // Provera description teksta za diskusiju u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_text')).get(0);
   expect(xxx.getText()).toEqual('Sixskins');
}

function checkDiscussionCreateDate() {
   // Provera datuma za diskusiju u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('created_date')).get(0);
   expect(xxx.getText()).toEqual('Mar 14, 2020');
}

function clickDiscussion() {
   // Klik na diskusiju u rezultatima pretrage
   element(by.className('page_content search_results')).all(by.className('content_text')).get(0).click();
}

function checkDiscussionUrl() {
   // Provera da li se ucitao URL za diskusiju
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/discussions/view/d279020b-5668-44a5-8f1c-3a79d3e9f608?filter=home'), 5000);
}

function checkDocumentIcon() {
   // Provera ikone za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(1);
   expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/doc.png');
}

function checkDocumentTitle() {
   // Provera naslova za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_title')).get(1);
   expect(xxx.getText()).toEqual('Sixskins');
}

function checkDocumentCreateDate() {
   // Provera datuma za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('created_date')).get(1);
   expect(xxx.getText()).toEqual('Mar 14, 2020');
}

function clickDocument() {
   // Klik na dokument u rezultatima pretrage
   element(by.className('page_content search_results')).all(by.className('content_title')).get(1).click();
}

function checkDocumentUrl() {
   // Provera da li se ucitao URL za dokument
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/documents/view/a88f47e6-e6b5-4ec7-99e0-51837737b4c7'), 5000);
}

function checkMemberIcon() {
   // Provera ikone za membera u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(2);
   expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/membership/public/avatar/e8e18bfc-82a5-40e1-85e6-f5d24bd9fdb9');
}

function checkMemberName() {
   // Provera imena za membera u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('full_name')).get(2);
   expect(xxx.getText()).toEqual('Sixskins 1');
}

function checkMemberFiOrg() {
   // Provera FI Orga za membera u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('org_link'));
   expect(xxx.getText()).toEqual('Bank of Austin');
}

function checkMemberFiOrgSizeAndState() {
   // Provera asseta i drzave FI Orga za membera u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('org_size'));
   expect(xxx.getText()).toEqual('($40B | TX)');
}

function checkMemberJobTitle() {
   // Provera joba za membera u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('person_title')).get(5);
   expect(xxx.getText()).toEqual('QA');
}

function clickMember() {
   // Klik na membera u rezultatima pretrage
   element(by.className('page_content search_results')).all(by.className('full_name')).get(2).click();
}

function checkMemberUrl() {
   // Provera da li se ucitao URL za membera
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/users/view/e8e18bfc-82a5-40e1-85e6-f5d24bd9fdb9'), 5000);
}

function checkFiOrgIcon() {
   // Provera ikone za FI Org u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(3);
   expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/wp/2017/07/07190638/company-placeholder.png');
}

function checkFiOrgTitle() {
   // Provera imena FI Orga u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_title')).get(3);
   expect(xxx.getText()).toEqual('Sixskins');
}

function clickFiOrg() {
   // Klik na FI Org u rezultatima pretrage
   element(by.className('page_content search_results')).all(by.className('content_title')).get(3).click();
}

function checkFiOrgUrl() {
   // Provera da li se ucitao URL za FI Org
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/fis/view/3121c08e-a8ae-4732-98fb-4ab19b12271b'), 5000);
}

 module.exports = {
   enterSearchWord,
   checkSearchResultsNumber,
   checkDiscussionIcon,
   checkDiscussionTitle,
   checkDiscussionText,
   checkDiscussionCreateDate,
   clickDiscussion,
   checkDiscussionUrl,
   checkDocumentIcon,
   checkDocumentTitle,
   checkDocumentCreateDate,
   clickDocument,
   checkDocumentUrl,
   checkMemberIcon,
   checkMemberName,
   checkMemberFiOrg,
   checkMemberFiOrgSizeAndState,
   checkMemberJobTitle,
   clickMember,
   checkMemberUrl,
   checkFiOrgIcon,
   checkFiOrgTitle,
   clickFiOrg,
   checkFiOrgUrl,
 }