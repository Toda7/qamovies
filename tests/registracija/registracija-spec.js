var register = require('./registracija-po');

describe('Registracija korisnika', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});

    it('Dolazak na stranu', function(){
        register.landOnHomePage();
    });

    it('Sign Up', function(){
        register.clickSignUp();
    });

    it('Provera urla', function(){
        register.checkJoinUrl();
    });

    it('Unosenje emaila', function(){
        register.enterNewEmail();
    });

    it('Unosenje lozinke', function(){
        register.enterPass();
    });

    it('Potvrda lozinke', function(){
        register.confirmPass();
        browser.sleep(5000);
    });

    it('Registrovanje korisnika', function(){
        register.submit();
        browser.sleep(2000);
    });
    it('Provera da li je join uspesno prosao', function(){
        register.checkJoinSuccess();
        browser.sleep(2000);
    });
    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});