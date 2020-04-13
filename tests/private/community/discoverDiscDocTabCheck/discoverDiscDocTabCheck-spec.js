var discoverDiscDocTabCheck = require('./discoverDiscDocTabCheck-po.js');

describe('Provera Discussion i Document taba na Detail strani Topic-a', function(){

it('Dolazak na Detail stranu topica', function(){
    discoverDiscDocTabCheck.landOnTopicDetail();
    browser.sleep(5000);
});

it('Klik na Docs Tab', function(){
    discoverDiscDocTabCheck.clickOnDocsTab();
    browser.sleep(3000);
});

it('Klik na prvi Doc', function(){
    discoverDiscDocTabCheck.clickOnFirstDoc();
    browser.sleep(3000);
});

it('Provera da li se ucitao Doc URL', function(){
    discoverDiscDocTabCheck.checkDocURL();
});

it('Provera Doc Title-a', function(){
    discoverDiscDocTabCheck.checkDocTitle();
});

it('Dolazak na Detail stranu topica', function(){
    discoverDiscDocTabCheck.landOnTopicDetail();
    browser.sleep(5000);
});

it('Klik na Docs Tab', function(){
    discoverDiscDocTabCheck.clickOnDocsTab();
    browser.sleep(3000);
});

it('Klik na Discussion Tab', function(){
    discoverDiscDocTabCheck.clickOnDiscTab();
    browser.sleep(3000);
});

it('Klik na prvu diskusiju', function(){
    discoverDiscDocTabCheck.clickOnFirstDisc();
    browser.sleep(3000);
});

it('Provera Disc Title-a', function(){
    discoverDiscDocTabCheck.checkDiscTitle();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});