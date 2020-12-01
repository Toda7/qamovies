var createHostedWebinar = require('../createHostedWebinar/createHostedWebinar-po.js');
var allAccess = require('./allAccess-po.js');


describe('Set all access for fifa;', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
    browser.sleep(5000);
});

it('Klik on All Access', function(){
    allAccess.clickOnAllAccessLink();
    browser.sleep(5000);
});

it('Unosenje texa u search field', function(){
    allAccess.enterTextInSearchField();
    browser.sleep(1000);
});

it('Klik on option for search', function(){
    allAccess.clickToOptionForSearch();
    browser.sleep(3000);
});

it('Klik on edit button', function(){
    allAccess.clickOnEditButton();
    browser.sleep(3000);
});

it('Check No Status', function(){
    allAccess.checkNoStatus();
    browser.sleep(3000);
});

it('Klik on grant button', function(){
    allAccess.clickOnGrant();
    browser.sleep(3000);
});

it('Check Yes Status', function(){
    allAccess.checkYeStatus();
    browser.sleep(3000);
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});