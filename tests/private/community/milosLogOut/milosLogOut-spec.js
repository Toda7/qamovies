var buyingHostedWebinar = require('../buyingHostedWebinar/buyingHostedWebinar-po.js');
var logOutAsAdmin = require('./logOutAsAdmin-po.js');


describe('Log out as admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buyingHostedWebinar.landOnEducationPage();
}); 

it('Hover to open user drop menu', function(){
    logOutAsAdmin.HoverToOpenUserDrop();
}); 

it('Click on Sign out link', function(){
    logOutAsAdmin.clickOnSignOutLink();
}); 

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});