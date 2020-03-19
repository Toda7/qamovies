var forYouSubUnsubOnVendor = require('../forYouSubUnsubOnVendor/forYouSubUnsubOnVendor-po.js');
var forYouSubUnsubOnDisc = require('../forYouSubUnsubOnDisc/forYouSubUnsubOnDisc-po.js');
var forYouSubUnsubOnTopic = require('../forYouSubUnsubOnTopic/forYouSubUnsubOnTopic-po.js');
var forYouDirectMessage = require('./forYouDirectMessage-po.js');

describe('Provera Direct Message linka iz Diskusije i Riplaja', function(){

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

it('Dolazak na Vendor stranu', function(){
    forYouSubUnsubOnVendor.landOnVendorPage();
    browser.sleep(5000);
});

it('Klik na Follow dugme', function () {
    forYouSubUnsubOnVendor.clickOnFollow();
});

it('Dolazak na For You stranu', function(){
    forYouSubUnsubOnTopic.landOnForYouPageLatest();
    browser.sleep(5000);
});

it('Provera da li se Diskusija pojavila', function () {
    forYouSubUnsubOnVendor.isDiscThere();
});

it('Klik na Diskusiju', function () {
    forYouDirectMessage.clickOnDiscussion();
    browser.sleep(1000);
});

it('Klik na DM link u diskusiji', function(){
    forYouDirectMessage.clickOnDiscDMlink();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.sleep(2000);
});
});

it('Provera da li se ucitao DM URL', function(){
    forYouDirectMessage.checkDirectMessageURL();
    browser.getAllWindowHandles().then(function (handles) {
    browser.driver.switchTo().window(handles[1]);
    browser.driver.close();
    browser.driver.switchTo().window(handles[0]);
});
});

it('Klik na DM link u riplaju', function(){
    forYouDirectMessage.clickOnReplyDMlink();
    browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.sleep(2000);
});
});

it('Provera da li se ucitao DM URL 2', function(){
    forYouDirectMessage.checkDirectMessageURL2();
    browser.getAllWindowHandles().then(function (handles) {
    browser.driver.switchTo().window(handles[1]);
    browser.driver.close();
    browser.driver.switchTo().window(handles[0]);
});
});

it('Dolazak na Vendor stranu', function(){
    forYouSubUnsubOnVendor.landOnVendorPage();
    browser.sleep(3000);
});

it('Klik na Unfollow dugme', function(){
    forYouSubUnsubOnVendor.clickOnUnfollow();
});

it('Dolazak na For You stranu', function(){
    forYouSubUnsubOnTopic.landOnForYouPageLatest();
    browser.sleep(3000);
});

it('Provera da nema diskusija na Latest tabu', function(){
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
    browser.sleep(2000);
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