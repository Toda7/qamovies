var search = require('./search-po.js');

describe('Search', function(){

it('Klik na Search', function(){
    search.clickOnSearch();
});

it('Unosenje txt-a u search polje', function(){
    search.insertTxtInSearch();
});

it('Provera da li je search rezultat dobar', function(){
    search.checkSearchResult();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});