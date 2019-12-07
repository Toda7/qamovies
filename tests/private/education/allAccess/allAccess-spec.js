var createHostedWebinar = require('../createHostedWebinar/createHostedWebinar-po.js');
var allAccess = require('./allAccess-po.js');


describe('Set all access for fifa;', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
});

it('Klik on All Access', function(){
    allAccess.clickOnAllAccessLink();
});

it('Unosenje texa u search field', function(){
    allAccess.enterTextInSearchField();
});

it('Klik on option for search', function(){
    allAccess.clickToOptionForSearch();
});

it('Klik on edit button', function(){
    allAccess.clickOnEditButton();
});

it('Check No Status', function(){
    allAccess.checkNoStatus();
});

it('Klik on grant button', function(){
    allAccess.clickOnGrant();
});

it('Check Yes Status', function(){
    allAccess.checkYeStatus();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});