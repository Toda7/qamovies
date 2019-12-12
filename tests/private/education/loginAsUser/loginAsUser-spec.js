var login_as_user = require('./login_as_user-po');

describe('Login korisnika', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

    it('Dolazak na stranu', function(){
        login_as_user.landOnHomePage();
    });

    it('Sign in', function(){
        login_as_user.clickOnSignIn();
    });

    it('Provera da li smo landovali na sign in stranu', function(){
        login_as_user.checkSignInUrl();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function(){
        login_as_user.enterEmail();
    });

    it('Unosenje lozinke', function(){
        login_as_user.enterPass();
    });

    it('Logovanje', function(){
        login_as_user.submit();
    });

    it('Provera da li smo se logovali', function(){
        login_as_user.checkLogInUrl();
        browser.sleep(2000);
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});