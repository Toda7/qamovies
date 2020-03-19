var forYouSubUnsubOnDisc = require('../forYouSubUnsubOnDisc/forYouSubUnsubOnDisc-po.js');
var forYouSubUnsubOnTopic = require('./forYouSubUnsubOnTopic-po.js');

describe('Provera da li se pojavljuje diskusija posle Subscribea na Topic', function(){

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

it('Dolazak na For You stranu', function(){
    forYouSubUnsubOnTopic.landOnForYouPageLatest();
    browser.sleep(5000);
});

it('Provera da nema diskusija na Latest tabu', function () {
    forYouSubUnsubOnTopic.thereIsNoDisc();
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

it('Provera da ima diskusija na Latest tabu', function () {
    forYouSubUnsubOnTopic.checkDiscShows();
});

it('Dolazak na Topic Detail stranu', function(){
    forYouSubUnsubOnTopic.landOnTopicDetailPage();
    browser.sleep(5000);
});

it('Klik na Unsubscribe dugme', function () {
    forYouSubUnsubOnTopic.clickOnUnsubscribe();
    browser.sleep(1000);
});

it('Dolazak na For You stranu', function(){
    forYouSubUnsubOnTopic.landOnForYouPageLatest();
    browser.sleep(5000);
});

it('Provera da nema diskusija na Latest tabu', function () {
    forYouSubUnsubOnTopic.thereIsNoDisc();
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