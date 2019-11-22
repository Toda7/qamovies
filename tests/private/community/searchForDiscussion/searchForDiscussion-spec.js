var searchForDiscussion = require('./searchForDiscussion-po.js');

describe('Discusion (global) sesarch', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Klikni na search polje', function(){
        searchForDiscussion.clickOnSearchField();
    });

    it('Unesi text u search polje', function(){
        searchForDiscussion.enterSearchWord();
    });

    it('Klikni na tacan rezultat pretrage', function(){
        searchForDiscussion.clickOnSearchSuggestion();
    });


        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});