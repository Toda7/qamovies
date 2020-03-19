function clickPeopleTab() {
   // Idi na People tab
   element(by.className('row card-tabs')).all(by.className('tab ')).get(3).click();
}

function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('Rickardmon');
   browser.sleep(2000);
}

function checkSearchResultsNumber() {
   // Provera broja rezultata pretrage
   var xxx = element(by.className('infoblurb'));
   expect(xxx.getText()).toEqual('There are 1 results for "Rickardmon"');
}

function checkMemberIcon() {
   // Provera ikone za membera u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(0);
   expect(xxx.getAttribute('src')).toEqual('https://qa.cbancnetwork.com/membership/public/avatar/822c348d-535c-407d-b496-9251f844fdf8');
}

function checkMemberName() {
   // Provera imena membera u rezultatima pretrage
   var xxx = element(by.className('full_name'));
   expect(xxx.getText()).toEqual('Rickardmon Blackmyre');
}

function checkMemberFiOrg() {
   // Provera FI Orga za membera u rezultatima pretrage
   var xxx = element(by.className('org_link'));
   expect(xxx.getText()).toEqual('Bank of Phoenix');
}

function checkMemberFiOrgSizeAndState() {
   // Provera asseta i drzave FI Orga za membera u rezultatima pretrage
   var xxx = element(by.className('org_size'));
   expect(xxx.getText()).toEqual('($400M | AZ)');
}

function checkMemberJobTitle() {
   // Provera joba za membera u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('person_title')).get(1);
   expect(xxx.getText()).toEqual('Lord Commander');
}

function clickMember() {
   // Klik na membera u rezultatima pretrage
   element(by.className('full_name')).click();
}

function checkMemberUrl() {
   // Provera da li se ucitao URL za membera
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/users/view/822c348d-535c-407d-b496-9251f844fdf8'), 5000);
}

 module.exports = {
   clickPeopleTab,
   enterSearchWord,
   checkSearchResultsNumber,
   checkMemberIcon,
   checkMemberName,
   checkMemberFiOrg,
   checkMemberFiOrgSizeAndState,
   checkMemberJobTitle,
   clickMember,
   checkMemberUrl,
 }