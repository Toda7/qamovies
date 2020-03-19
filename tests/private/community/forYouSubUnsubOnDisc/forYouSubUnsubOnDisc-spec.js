var forYouSubUnsubOnDisc = require('./forYouSubUnsubOnDisc-po.js');

describe('Provera da li se pojavljuje diskusija posle Subscribea na nju', function(){

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

it('Unos emaila', function () {
    forYouSubUnsubOnDisc.enterEmail();
});

it('Unos passworda', function () {
    forYouSubUnsubOnDisc.enterPass();
});

it('Submit', function () {
    forYouSubUnsubOnDisc.submit();
});

it('Dolazak na For You', function(){
    forYouSubUnsubOnDisc.landOnForYouPage();
    browser.sleep(5000);
});

it('Provera da nema diskusija na Subscribed tabu', function () {
    forYouSubUnsubOnDisc.checkNoDisc();
});

it('Dolazak na Diskusiju objavljenu u Fi grupi', function(){
    forYouSubUnsubOnDisc.landOnFiDisc();
    browser.sleep(3000);
});

it('Klik na Notifications link', function () {
    forYouSubUnsubOnDisc.clickOnNotifications();
    browser.sleep(1000);
});

it('Dolazak na For You', function(){
    forYouSubUnsubOnDisc.landOnForYouPage();
    browser.sleep(3000);
});

it('Provera da ima diskusija na Subscribed tabu', function () {
    forYouSubUnsubOnDisc.checkThereIsDisc();
});

it('Dolazak na Diskusiju objavljenu u Fi grupi', function(){
    forYouSubUnsubOnDisc.landOnFiDisc();
    browser.sleep(3000);
});

it('Klik na Notifications link', function () {
    forYouSubUnsubOnDisc.clickOnNotifications();
    browser.sleep(1000);
});

it('Dolazak na For You', function(){
    forYouSubUnsubOnDisc.landOnForYouPage();
    browser.sleep(5000);
});

it('Provera da nema diskusija na Subscribed tabu', function () {
    forYouSubUnsubOnDisc.checkNoDisc();
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