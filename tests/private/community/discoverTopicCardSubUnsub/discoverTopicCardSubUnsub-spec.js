var discoverTopicCardSubUnsub = require('./discoverTopicCardSubUnsub-po.js');
var discoverCreateDiscussion = require('../discoverCreateDiscussion/discoverCreateDiscussion-po.js');

describe('Subscribe i Unsubscribe sa Topic kartice', function(){

it('Dolazak na Discover stranu', function(){
    discoverCreateDiscussion.landOnDiscoverPagePopular();
});
    
it('Klikni na Search Topics polje', function(){
    discoverCreateDiscussion.clickOnSearchTopicsField();
});
    
it('Unesi text u search polje', function(){
    discoverCreateDiscussion.enterSearchWord();
});
    
it('Provera da li je search uspesan', function(){
    discoverCreateDiscussion.checkTopicSearchSuccess();
});

it('Klikni na Subscribe', function(){
    discoverTopicCardSubUnsub.clickOnSubscribe();
    browser.sleep(2000);
});

it('Provera da li se Subscribovao', function(){
    discoverTopicCardSubUnsub.checkSub();
});

it('Klikni na Unsubscribe', function(){
    discoverTopicCardSubUnsub.clickOnUnsubscribe();
    browser.sleep(2000);
});

it('Provera da li se Unsubscribovao', function(){
    discoverTopicCardSubUnsub.checkUnsub();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});