function clickOrgsTab() {
   // Idi na Orgs tab
   element(by.className('row card-tabs')).all(by.className('tab ')).get(4).click();
}

function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('alaska');
   browser.sleep(2000);
}

function checkSearchResultsNumber() {
   // Provera broja rezultata pretrage
   var xxx = element(by.className('infoblurb'));
   expect(xxx.getText()).toEqual('There are 1 results for "alaska"');
}

function checkOrgIcon() {
   // Provera ikone za org u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(0);
   expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/wp/2017/07/07190638/company-placeholder.png');
}

function checkOrgName() {
   // Provera imena banke u rezultatima pretrage
   var xxx = element(by.className('content_title'));
   expect(xxx.getText()).toEqual('Bank of Alaska');
}

function checkOrgSizeAndState() {
   // Provera asseta i drzave FI Orga u rezultatima pretrage
   var xxx = element(by.className('org_info'));
   expect(xxx.getText()).toEqual('($600M | Alaska)');
}

function clickOrg() {
   // Klik na banku u rezultatima pretrage
   element(by.className('content_title')).click();
}

function checkOrgUrl() {
   // Provera da li se ucitao URL za banku
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/fis/view/b7aa8e7f-3c72-400c-b437-3d0d92cabff2'), 7000);
}

 module.exports = {
   clickOrgsTab,
   enterSearchWord,
   checkSearchResultsNumber,
   checkOrgIcon,
   checkOrgName,
   checkOrgSizeAndState,
   clickOrg,
   checkOrgUrl,
 }