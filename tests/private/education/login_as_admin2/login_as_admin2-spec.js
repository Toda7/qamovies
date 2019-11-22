var login_as_admin2 = require('./login_as_admin2-po.js');

describe('Login education admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

    it('Dolazak na stranu', function(){
        login_as_admin2.landOnHomePage();
    });

    it('Sign in', function(){
        login_as_admin2.clickOnSignIn();
    });

    it('Unosenje emaila', function(){
        login_as_admin2.enterEmail();
    });

    it('Unosenje lozinke', function(){
        login_as_admin2.enterPass();
    });

    it('Logovanje', function(){
        login_as_admin2.submit();
        browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]);
        });
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});