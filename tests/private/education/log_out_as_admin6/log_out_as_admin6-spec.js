var buying_hosted_webinar = require('../buying_hosted_webinar/buying_hosted_webinar-po.js');
var log_out_as_admin6 = require('./log_out_as_admin6-po.js');


describe('Log out as admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    buying_hosted_webinar.landOnEducationPage();
}); 

it('Hover to open user drop menu', function(){
    log_out_as_admin6.HoverToOpenUserDrop();
}); 

it('Click on Sign out link', function(){
    log_out_as_admin6.clickOnSignOutLink();
}); 

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});