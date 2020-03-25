var discoverTopicDetailSubUnsub = require('./discoverTopicDetailSubUnsub-po.js');

describe('Subscribe i Unsubscribe na Detail strani Topic-a', function(){

it('Dolazak na Discover stranu', function(){
    discoverTopicDetailSubUnsub.landOnDiscoverPagePopular();
});

it('Klikni na Search Topics polje', function(){
    discoverTopicDetailSubUnsub.clickOnSearchTopicsField();
});

it('Unesi text u search polje', function(){
    discoverTopicDetailSubUnsub.enterSearchWord();
});

it('Provera da li je search uspesan', function(){
    discoverTopicDetailSubUnsub.checkTopicSearchSuccess();
});

it('Klik na topic card', function(){
    discoverTopicDetailSubUnsub.clickOnTopicCard();
});

it('Klik na Subscribe dugme', function(){
    discoverTopicDetailSubUnsub.clickOnSubscribe();
    browser.sleep(2000);
});

it('Provera da li je sada UNSUBSCRIBE', function(){
    discoverTopicDetailSubUnsub.checkUnsubscribe();
    browser.sleep(3000);
});

it('Klik na Unsubscribe dugme', function(){
    discoverTopicDetailSubUnsub.clickOnUnsubscribe();
    browser.sleep(2000);
});

it('Provera da li je sada SUBSCRIBE', function(){
    discoverTopicDetailSubUnsub.checkSubscribe();
    browser.sleep(3000);
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});