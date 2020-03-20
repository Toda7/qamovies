var discoverCreateDiscussion = require('./discoverCreateDiscussion-po.js');

describe('Pravljenje diskusije sa odredjenim topicom', function(){

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

it('Provera broja diskusija i dokumenata sa nulom', function(){
    discoverCreateDiscussion.checkDiscAndDocNumb0();
});

it('Klik na topic card', function(){
    discoverCreateDiscussion.clickOnTopicCard();
});

it('Klik na Start Discussion dugme', function(){
    discoverCreateDiscussion.clickOnStartDiscussion();
});

it('Odaberi grupu', function(){
    discoverCreateDiscussion.selectGroup();
});

it('Unos texta za Discussion Title', function(){
    discoverCreateDiscussion.discussionTitle();
});

it('Unos texta za Discussion Description', function(){
    discoverCreateDiscussion.discussionDesc();
});

it('Dodavanje doc-a', function(){
    discoverCreateDiscussion.attachDoc();
});

it('Dodavanje topic-a', function(){
    discoverCreateDiscussion.selectTopic();
});

it('Klik na Post Discussion dugme', function(){
    discoverCreateDiscussion.postDiscussion();
});

it('Provera da li je uspesno objavljena diskusija', function(){
    discoverCreateDiscussion.checkSuccess();
});

it('Klikni na View Discussion', function(){
    discoverCreateDiscussion.clickOnViewDiscussion();
    browser.sleep(1000);
});

it('Klikni na Reply dugme', function(){
    discoverCreateDiscussion.clickReply();
    browser.sleep(1000);
});

it('Unos texta za Reply', function(){
    discoverCreateDiscussion.replyText();
    browser.sleep(1000);
});

it('Attach Doc-a na Reply', function(){
    discoverCreateDiscussion.attachDocReply();
    browser.sleep(1000);
});

it('Post Reply-a', function(){
    discoverCreateDiscussion.postReply();
    browser.sleep(2000);
});

it('Klikni na Comment dugme', function(){
    discoverCreateDiscussion.clickComment();
    browser.sleep(2000);
});

it('Unos texta za Comment', function(){
    discoverCreateDiscussion.commentText();
    browser.sleep(3000);
});

it('Attach Doc-a na Comment', function(){
    discoverCreateDiscussion.attachDocComment();
    browser.sleep(1000);
});

it('Post Comment-a', function(){
    discoverCreateDiscussion.postComment();
    browser.sleep(3000);
});

it('Dolazak na Discover stranu', function(){
    discoverCreateDiscussion.landOnDiscoverPagePopular();
});

it('Klikni na Search Topics polje', function(){
    discoverCreateDiscussion.clickOnSearchTopicsField();
});

it('Unesi text u search polje', function(){
    discoverCreateDiscussion.enterSearchWord();
    browser.sleep(5000);
});

it('Provera broja diskusija i dokumenata', function(){
    discoverCreateDiscussion.checkDiscAndDocNumb();
});

it('Dolazak na Topic Details stranu', function(){
    discoverCreateDiscussion.landOnTopicDetailPage();
    browser.sleep(3000);
});

it('Provera da li je Though Leaders section tu', function(){
    discoverCreateDiscussion.checkThoughtLeaders();
    browser.sleep(2000);
});

it('Provera da li je Top Vendors section tu', function(){
    discoverCreateDiscussion.checkTopVendors();
    browser.sleep(2000);
});

it('Klik na Diskusiju', function(){
    discoverCreateDiscussion.clickOnDiscussion();
    browser.sleep(2000);
});

it('Klik na Action menu', function(){
    discoverCreateDiscussion.clickAction();
    browser.sleep(1000);
});

it('Klikni na Delete dugme', function(){
    discoverCreateDiscussion.clickDelete();
    browser.sleep(1000);
});

it('Provera da li je uspesno obrisana diskusija', function(){
    discoverCreateDiscussion.checkSuccessDiscDelete();
    browser.sleep(2000);
});

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

it('Provera broja diskusija i dokumenata sa nulom', function(){
    discoverCreateDiscussion.checkDiscAndDocNumb0();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});