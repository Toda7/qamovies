var login_as_admin5 = require('./login_as_admin5-po.js');

describe('Login education admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

    it('Dolazak na stranu', function(){
        login_as_admin5.landOnHomePage();
    });

    it('Sign in', function(){
        login_as_admin5.clickOnSignIn();
    });

    it('Unosenje emaila', function(){
        login_as_admin5.enterEmail();
    });

    it('Unosenje lozinke', function(){
        login_as_admin5.enterPass();
    });

    it('Logovanje', function(){
        login_as_admin5.submit();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]);
        });
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});