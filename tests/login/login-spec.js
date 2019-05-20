var login = require('./login-po');
var register = require('../registracija/registracija-po');// ovaj objekat se ostavlja jer mozemo da ga iskorsitmo sa funkcijama koje su vec napravljene pri registraciji

describe('Login korisnika', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

    it('Dolazak na stranu', function(){
        register.landOnPage();
    });

    it('Sign in', function(){
        login.clickOnSignIn();
    });

    it('Provera da li smo landovali na sign in stranu', function(){
        login.checkSignInUrl();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function(){
        login.enterEmail();
    });

    it('Unosenje lozinke', function(){
        login.enterPass();
    });

    it('Logovanje', function(){
        login.submit();
    });

    it('Provera da li smo se logovali', function(){
        login.checkLogInUrl();
        browser.sleep(2000);
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});