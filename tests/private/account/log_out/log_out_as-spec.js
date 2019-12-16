var logOut = require('./logOut-po.js');


describe('Log out as admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Hover to open user drop menu', function(){
    logOut.HoverToOpenUserDrop();
}); 

it('Click on Sign out link', function(){
    logOut.clickOnSignOutLink();
}); 

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});