var milosLogOut = require('./milosLogOut-po.js');


describe('Log out as admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

it('Dolazak na webinras stranu', function(){
    milosLogOut.landOnEducationPage();
}); 

it('Hover to open user drop menu', function(){
    milosLogOut.HoverToOpenUserDrop();
}); 

it('Click on Sign out link', function(){
    milosLogOut.clickOnSignOutLink();
}); 

afterAll(function(){
    browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
});
});