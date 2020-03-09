var discoverPageAlphabetical = require('./discoverPageAlphabetical-po.js');

describe('Dolazak na stranu, provera linkova i load more', function(){

it('Dolazak na Discover stranu', function(){
    discoverPageAlphabetical.landOnDiscoverPage();
});

it('Klik na Alphabetical Tab', function(){
    discoverPageAlphabetical.clickOnAlphabeticalTab();
});

it('Provera da li je tu prvih 15 topica na Popularity', function(){
    discoverPageAlphabetical.count15topics();
});

it('Klik na SPACE na tastaturi', function(){
    discoverPageAlphabetical.clickSpaceOnKeyboard();
});

it('Klik na SPACE na tastaturi', function(){
    discoverPageAlphabetical.clickSpaceOnKeyboard();
});

it('Provera da li je tu prvih 30 topica na Popularity', function(){
    discoverPageAlphabetical.count30topics();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});