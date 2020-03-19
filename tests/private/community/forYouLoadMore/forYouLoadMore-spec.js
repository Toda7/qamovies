var forYouSubUnsubOnDisc = require('../forYouSubUnsubOnDisc/forYouSubUnsubOnDisc-po.js');
var forYouSubUnsubOnTopic = require('../forYouSubUnsubOnTopic/forYouSubUnsubOnTopic-po.js');
var forYouLoadMore = require('./forYouLoadMore-po.js');

describe('Provera Load More na For You strani', function(){

it('Dolazak na Home stranu', function(){
    forYouSubUnsubOnDisc.landOnHomePage();
    browser.sleep(5000);
});

it('Klik na user menu', function(){
    forYouSubUnsubOnDisc.clickOnUserMenu();
});

it('Klik na Sign out', function(){
    forYouSubUnsubOnDisc.clickOnSignOut();
    browser.sleep(3000);
});

it('Klik na Sign in', function () {
    forYouSubUnsubOnDisc.clickOnSignIn();
    browser.sleep(3000);
});

it('Unos emaila', function () {
    forYouSubUnsubOnDisc.enterEmail();
});

it('Unos passworda', function () {
    forYouSubUnsubOnDisc.enterPass();
});

it('Submit', function () {
    forYouSubUnsubOnDisc.submit();
});

it('Dolazak na Topic Detail stranu', function(){
    forYouSubUnsubOnTopic.landOnTopicDetailPage();
    browser.sleep(5000);
});

it('Klik na Subscribe dugme', function () {
    forYouSubUnsubOnTopic.clickOnSubscribe();
    browser.sleep(1000);
});

it('Dolazak na For You stranu', function(){
    forYouSubUnsubOnTopic.landOnForYouPageLatest();
    browser.sleep(5000);
});

it('Provera da li se na strani nalazi 15 diskusija', function () {
    forYouLoadMore.count15Disc();
});

it('Klik 14 puta na SPACE da bismo dobili jos 15 diskusija', function(){
    var step;
    for (step = 0; step < 14; step++) {
        forYouLoadMore.scrollDown();
        browser.sleep(1000);
    }
});

it('Provera da li se na strani nalazi 30 diskusija', function () {
    forYouLoadMore.count30Disc();
});

it('Provera da li se pojavi poruka na dnu strane', function () {
    forYouLoadMore.messageAtTheBottom();
});

it('Dolazak na Topic Detail stranu', function(){
    forYouSubUnsubOnTopic.landOnTopicDetailPage();
    browser.sleep(5000);
});

it('Klik na Unsubscribe dugme', function () {
    forYouSubUnsubOnTopic.clickOnUnsubscribe();
    browser.sleep(1000);
});

it('Dolazak na Home stranu', function(){
    forYouSubUnsubOnDisc.landOnHomePage();
    browser.sleep(5000);
});

it('Klik na user menu', function(){
    forYouSubUnsubOnDisc.clickOnUserMenu();
});

it('Klik na Sign out', function(){
    forYouSubUnsubOnDisc.clickOnSignOut();
    browser.sleep(3000);
});

it('Klik na Sign in', function () {
    forYouSubUnsubOnDisc.clickOnSignIn();
    browser.sleep(4000);
});

it('Unos Chicago emaila', function () {
    forYouSubUnsubOnDisc.enterChicagoEmail();
});

it('Unos passworda', function () {
    forYouSubUnsubOnDisc.enterPass();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});