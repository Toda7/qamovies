var log_out = require('./log_out-po.js');


describe('Log out as admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Hover to open user drop menu', function(){
    log_out.HoverToOpenUserDrop();
}); 

it('Click on Sign out link', function(){
    log_out.clickOnSignOutLink();
}); 

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});