var createHostedWebinar = require('../createHostedWebinar/createHostedWebinar-po.js');
var setAllAccessToFalse = require('./setAllAccessToFalse-po.js');


describe('Set all access for fifa;', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na admin stranu', function(){
    createHostedWebinar.landOnEducationAdminPage();
    browser.sleep(5000);
});

it('Klik on All Access', function(){
    setAllAccessToFalse.clickOnAllAccessLink();
    browser.sleep(5000);
});

it('Unosenje texa u search field', function(){
    setAllAccessToFalse.enterTextInSearchField();
    browser.sleep(1000);
});

it('Klik on option for search', function(){
    setAllAccessToFalse.clickToOptionForSearch();
    browser.sleep(3000);
});

it('Klik on edit button', function(){
    setAllAccessToFalse.clickOnEditButton();
    browser.sleep(3000);
});

it('Check Yes Status', function(){
    setAllAccessToFalse.checkYeStatus();
    browser.sleep(3000);
});

it('Klik on grant button', function(){
    setAllAccessToFalse.clickOnGrant();
    browser.sleep(5000);
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