var login_as_admin = require('./login_as_admin-po.js');

describe('Login education admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

    it('Dolazak na stranu', function(){
        login_as_admin.landOnHomePage();
    });

    it('Sign in', function(){
        login_as_admin.clickOnSignIn();
    });

    it('Unosenje emaila', function(){
        login_as_admin.enterEmail();
    });

    it('Unosenje lozinke', function(){
        login_as_admin.enterPass();
    });

    it('Logovanje', function(){
        login_as_admin.submit();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});