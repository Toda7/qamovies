var loginAsAdmin = require('./loginAsAdmin-po.js');

describe('Login education admin', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);
});

    it('Dolazak na stranu', function(){
        loginAsAdmin.landOnHomePage();
    });

    it('Sign in', function(){
        loginAsAdmin.clickOnSignIn();
    });

    it('Unosenje emaila', function(){
        loginAsAdmin.enterEmail();
    });

    it('Unosenje lozinke', function(){
        loginAsAdmin.enterPass();
    });

    it('Logovanje', function(){
        loginAsAdmin.submit();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});