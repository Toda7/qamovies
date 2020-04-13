var discoverTopicDetailLoadMore = require('./discoverTopicDetailLoadMore-po.js');

describe('Load More za Diskusije na Detail strani Topic-a', function(){

it('Dolazak na Detail stranu topica', function(){
    discoverTopicDetailLoadMore.landOnTopicDetail();
    browser.sleep(5000);
});

it('Provera da li se na strani nalazi 15 diskusija', function(){
    discoverTopicDetailLoadMore.count15Disc();
});

it('Klik 6 puta na SPACE da bismo dobili jos 15 diskusija', function(){
    var step;
    for (step = 0; step < 6; step++) {
        discoverTopicDetailLoadMore.scrollDown();
        browser.sleep(1000);
    }
});

it('Provera da li se na strani nalazi 30 diskusija', function(){
    discoverTopicDetailLoadMore.count30Disc();
    browser.sleep(2000);
});

it('Refresh page', function(){
    browser.refresh(); 
    browser.sleep(3000);
});

it('Klik na Docs Tab', function(){
    discoverTopicDetailLoadMore.clickOnDocsTab();
    browser.sleep(3000);
});

it('Provera da li se na strani nalazi 15 dokumenata', function(){
    discoverTopicDetailLoadMore.count15Docs();
});

it('Klik 6 puta na SPACE da bismo dobili jos 15 diskusija', function(){
    var step;
    for (step = 0; step < 6; step++) {
        discoverTopicDetailLoadMore.scrollDown();
        browser.sleep(1000);
    }
});

it('Provera da li se na strani nalazi 30 dokumenata', function(){
    discoverTopicDetailLoadMore.count30Docs();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});