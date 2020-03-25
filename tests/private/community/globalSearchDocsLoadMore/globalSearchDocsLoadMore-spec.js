var globalSearchDiscussionsLoadMore = require('../globalSearchDiscussionsLoadMore/globalSearchDiscussionsLoadMore-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var globalSearchDocument = require('../globalSearchDocument/globalSearchDocument-po.js');
var globalSearchAllLoadMore = require('../globalSearchAllLoadMore/globalSearchAllLoadMore-po.js');

describe('Load More na Global Search Docs tabu', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Home stranu', function(){
        createDiscussion.landOnHome();
        browser.sleep(1000);
    });

    it('Klik na search field da dobijemo search stranu', function () {
        docLibraryCheck.clickOnSearchField();
        browser.sleep(1000);
    });

    it('Idi na Docs tab', function () {
        globalSearchDocument.clickDocsTab();
        browser.sleep(1000);
    });

    it('Unesi text u search polje', function () {
        globalSearchAllLoadMore.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera da li su se na strani pojavilo 15 rezultata', function () {
        globalSearchDiscussionsLoadMore.checkIfFifteenResultsOnPage();
        browser.sleep(1000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        globalSearchDiscussionsLoadMore.scrollPage();
        browser.sleep(1000);
    });

    it('Provera da li se na strani pojavilo 30 rezultata', function () {
        globalSearchAllLoadMore.checkIfThirtyResultsOnPage();
        browser.sleep(1000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
