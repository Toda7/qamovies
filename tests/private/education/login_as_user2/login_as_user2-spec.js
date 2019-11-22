var login_as_user2 = require('./login_as_user2-po');

describe('Login korisnika', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

    it('Dolazak na stranu', function(){
        login_as_user2.landOnHomePage();
    });

    it('Sign in', function(){
        login_as_user2.clickOnSignIn();
    });

    it('Provera da li smo landovali na sign in stranu', function(){
        login_as_user2.checkSignInUrl();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function(){
        login_as_user2.enterEmail();
    });

    it('Unosenje lozinke', function(){
        login_as_user2.enterPass();
    });

    it('Logovanje', function(){
        login_as_user2.submit();
    });

    it('Provera da li smo se logovali', function(){
        login_as_user2.checkLogInUrl();
        browser.sleep(2000);
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});