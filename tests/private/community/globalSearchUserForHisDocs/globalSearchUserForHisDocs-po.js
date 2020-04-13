function enterSearchWord() {
   //  Unesi text u search polje
   element(by.id('navbar_search_id')).clear().sendKeys('Cocolino');
   browser.sleep(2000);
}

function checkSearchResultsNumber() {
   // Provera broja rezultata pretrage
   var xxx = element(by.className('infoblurb'));
   expect(xxx.getText()).toEqual('There are 3 results for "Cocolino"');
}

function checkDocumentIcon() {
   // Provera ikone za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).element(by.className('collection')).all(by.tagName('img')).get(1);
   expect(xxx.getAttribute('src')).toEqual('https://static.cbancnetwork.com/Public/higgins/doc.png');
}

function checkDocumentTitle() {
   // Provera naslova za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('content_title')).get(1);
   expect(xxx.getText()).toEqual('TestDoc3Pages');
}

function checkDocumentCreateDate() {
   // Provera datuma za dokument u rezultatima pretrage
   var xxx = element(by.className('page_content search_results')).all(by.className('created_date')).get(1);
   expect(xxx.getText()).toEqual('Aug 15, 2019');
}

function clickDocument() {
   // Klik na dokument u rezultatima pretrage
   element(by.className('page_content search_results')).all(by.className('content_title')).get(1).click();
}

function checkDocumentUrl() {
   // Provera da li se ucitao URL za dokument
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://qa.cbancnetwork.com/community/documents/view/f2c59e2b-d3d6-43bd-a0af-6473b2ab8f33'), 7000);
}

 module.exports = {
   enterSearchWord,
   checkSearchResultsNumber,
   checkDocumentIcon,
   checkDocumentTitle,
   checkDocumentCreateDate,
   clickDocument,
   checkDocumentUrl,
 }