var password = require('./password-po.js');

describe('Password change', function(){

it('Klik na Password tab', function(){
    password.clickOnPasswordTab();
});

it('Klik na Password Reset btn', function(){
    password.clickOnPassResetBtn();
});

it('Provera da li je poslat email za reset pass', function(){
    password.checkSuccessMessageForPassreset();
});

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});
});