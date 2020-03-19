function clickDocsTab() {
   // Idi na Docs tab
   element(by.className('row card-tabs')).all(by.className('tab ')).get(2).click();
}

function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('Stonedoor');
   browser.sleep(2000);
}

function checkSearchResultsNumber() {
   // Provera broja rezultata pretrage
   var xxx = element(by.className('infoblurb'));
   expect(xxx.getText()).toEqual('There are 1 results for "Stonedoor"');
}

function checkDocIcon() {
   // Provera ikone za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(0);
   expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/doc.png');
}

function checkDocTitle() {
   // Provera naslova dokumenta u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_title')).get(0);
   expect(xxx.getText()).toEqual('Stonedoor');
}

function checkDocCreateDate() {
   // Provera datuma za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('created_date')).get(0);
   expect(xxx.getText()).toEqual('Mar 14, 2020');
}

function clickDoc() {
   // Klik na doc u rezultatima pretrage
   element(by.className('page_content search_results')).all(by.className('content_title')).get(0).click();
}

function checkDocUrl() {
   // Provera da li se ucitao URL za dokument
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/documents/view/38e2bb2c-82f5-4305-a705-901f432a7d91'), 5000);
}

 module.exports = {
   clickDocsTab,
   enterSearchWord,
   checkSearchResultsNumber,
   checkDocIcon,
   checkDocTitle,
   checkDocCreateDate,
   clickDoc,
   checkDocUrl,
 }