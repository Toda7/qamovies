var discoverPagePopular = require('./discoverPagePopular-po.js');

describe('Dolazak na stranu, provera linkova i load more', function(){
    
it('Dolazak na Discover stranu', function(){
    discoverPagePopular.landOnDiscoverPagePopular();
});

it('Provera subtitle-a', function(){
    discoverPagePopular.checkSubTitleOnPage();
});

it('Provera da li je tu Popularity tab', function(){
    discoverPagePopular.checkPopularityTab();
});

it('Provera da li je tu Alphabetical tab', function(){
    discoverPagePopular.checkAlphabeticalTab();
});

it('Provera da li je tu prvih 15 topica na Popularity', function(){
    discoverPagePopular.count15topics();
});

it('Klik na SPACE na tastaturi', function(){
    discoverPagePopular.clickSpaceOnKeyboard();
});

it('Klik na SPACE na tastaturi', function(){
    discoverPagePopular.clickSpaceOnKeyboard();
});

it('Klik na SPACE na tastaturi', function(){
    discoverPagePopular.clickSpaceOnKeyboard();
});
    
beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});