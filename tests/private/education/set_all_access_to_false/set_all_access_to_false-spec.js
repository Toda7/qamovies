var create_hosted_webinar = require('../create_hosted_webinar/create_hosted_webinar-po.js');
var set_all_access_to_false = require('./set_all_access_to_false-po.js');


describe('Set all access for fifa;', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    create_hosted_webinar.landOnEducationAdminPage();
});

it('Klik on All Access', function(){
    set_all_access_to_false.clickOnAllAccessLink();
});

it('Unosenje texa u search field', function(){
    set_all_access_to_false.enterTextInSearchField();
});

it('Klik on option for search', function(){
    set_all_access_to_false.clickToOptionForSearch();
});

it('Klik on edit button', function(){
    set_all_access_to_false.clickOnEditButton();
});

it('Check Yes Status', function(){
    set_all_access_to_false.checkYeStatus();
});

it('Klik on grant button', function(){
    set_all_access_to_false.clickOnGrant();
});

it('Check No Status', function(){
    set_all_access_to_false.checkNoStatus();
});



afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});