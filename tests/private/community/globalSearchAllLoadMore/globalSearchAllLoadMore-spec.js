var globalSearchAllLoadMore = require('./globalSearchAllLoadMore-po.js');
var createDiscussion = require('../createDiscussion/createDiscussion-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var myProfilePageLoadMore = require('../myProfilePageLoadMore/myProfilePageLoadMore-po.js');

describe('Load More na Global Search All tabu', function(){

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

    it('Unesi text u search polje', function () {
        globalSearchAllLoadMore.enterSearchWord();
        browser.sleep(1000);
    });

    it('Provera da li su se na strani pojavilo 30 rezultata', function () {
        globalSearchAllLoadMore.checkIfThirtyResultsOnPage();
        browser.sleep(1000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 3; step++) {
            myProfilePageLoadMore.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Provera da li se na strani pojavilo 46 rezultata', function () {
        globalSearchAllLoadMore.checkIfFourtySixResultsOnPage();
        browser.sleep(1000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
