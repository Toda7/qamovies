function clickDiscussionsTab() {
   // Idi na Discussions tab
   element(by.className('row card-tabs')).all(by.className('tab ')).get(1).click();
}

function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('Halfhand');
   browser.sleep(2000);
}

function checkSearchResultsNumber() {
   // Provera broja rezultata pretrage
   var xxx = element(by.className('infoblurb'));
   expect(xxx.getText()).toEqual('There are 1 results for "Halfhand"');
}

function checkDiscussionIcon() {
   // Provera ikone za diskusiju u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(0);
   expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/thread.png');
}

function checkDiscussionTitle() {
   // Provera naslova za diskusiju u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_title')).get(0);
   expect(xxx.getText()).toEqual('Discussion Title');
}

function checkDiscussionText() {
   // Provera description teksta za diskusiju u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_text')).get(0);
   expect(xxx.getText()).toEqual('Halfhand');
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
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/discussions/view/7b0ebda7-f659-4e28-8103-23807aa878a2?filter=home'), 5000);
}

 module.exports = {
   clickDiscussionsTab,
   enterSearchWord,
   checkSearchResultsNumber,
   checkDiscussionIcon,
   checkDiscussionTitle,
   checkDiscussionText,
   checkDiscussionCreateDate,
   clickDiscussion,
   checkDiscussionUrl,
 }