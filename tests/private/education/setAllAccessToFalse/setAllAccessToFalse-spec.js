var createHostedWebinar = require('../createHostedWebinar/createHostedWebinar-po.js');
var setAllAccessToFalse = require('./setAllAccessToFalse-po.js');


describe('Set all access for fifa;', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
});

it('Klik on All Access', function(){
    setAllAccessToFalse.clickOnAllAccessLink();
});

it('Unosenje texa u search field', function(){
    setAllAccessToFalse.enterTextInSearchField();
});

it('Klik on option for search', function(){
    setAllAccessToFalse.clickToOptionForSearch();
});

it('Klik on edit button', function(){
    setAllAccessToFalse.clickOnEditButton();
});

it('Check Yes Status', function(){
    setAllAccessToFalse.checkYeStatus();
});

it('Klik on grant button', function(){
    setAllAccessToFalse.clickOnGrant();
});

it('Check No Status', function(){
    setAllAccessToFalse.checkNoStatus();
    browser.getAllWindowHandles().then(function (handles) {
    browser.driver.switchTo().window(handles[1]);
    browser.driver.close();
    browser.driver.switchTo().window(handles[0]);
    });
});



afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});