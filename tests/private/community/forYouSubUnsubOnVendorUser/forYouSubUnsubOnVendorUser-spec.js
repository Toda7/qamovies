var forYouSubUnsubOnDisc = require('../forYouSubUnsubOnDisc/forYouSubUnsubOnDisc-po.js');
var forYouSubUnsubOnVendor = require('../forYouSubUnsubOnVendor/forYouSubUnsubOnVendor-po.js');
var forYouSubUnsubOnTopic = require('../forYouSubUnsubOnTopic/forYouSubUnsubOnTopic-po.js');
var forYouSubUnsubOnVendorUser = require('./forYouSubUnsubOnVendorUser-po.js');

describe('Provera da li se pojavljuje diskusija posle Subscribe-a na Vendora', function(){

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

it('Dolazak na Vendor User page', function(){
    forYouSubUnsubOnVendorUser.landOnVendorUserPage();
    browser.sleep(5000);
});

it('Klik na Follow dugme', function () {
    forYouSubUnsubOnVendorUser.clickOnFollowButton();
});

it('Dolazak na For You stranu', function(){
    forYouSubUnsubOnTopic.landOnForYouPageLatest();
    browser.sleep(5000);
});

it('Provera da li se Diskusija pojavila', function () {
    forYouSubUnsubOnVendor.isDiscThere();
});

it('Dolazak na Vendor User page', function(){
    forYouSubUnsubOnVendorUser.landOnVendorUserPage();
    browser.sleep(5000);
});

it('Klik na Unfollow dugme', function () {
    forYouSubUnsubOnVendorUser.clickOnUnfollowButton();
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