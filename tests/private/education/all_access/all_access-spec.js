var create_hosted_webinar = require('../create_hosted_webinar/create_hosted_webinar-po.js');
var all_access = require('./all_access-po.js');


describe('Set all access for fifa;', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    create_hosted_webinar.landOnEducationAdminPage();
});

it('Klik on All Access', function(){
    all_access.clickOnAllAccessLink();
});

it('Unosenje texa u search field', function(){
    all_access.enterTextInSearchField();
});

it('Klik on option for search', function(){
    all_access.clickToOptionForSearch();
});

it('Klik on edit button', function(){
    all_access.clickOnEditButton();
});

it('Check No Status', function(){
    all_access.checkNoStatus();
});

it('Klik on grant button', function(){
    all_access.clickOnGrant();
});

it('Check Yes Status', function(){
    all_access.checkYeStatus();
});


afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});