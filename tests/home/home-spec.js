var register = require('../registracija/registracija-po');
var home = require('./home-po');

describe('Public home page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
        it('Dolazak na home stranu', function(){
            register.landOnHomePage();
        });
        it('Provera da li se ucitao page title', function(){
            home.checkTitle();
        });
        it('Provera da li su se ucitali button for join', function(){
            home.checkButton();
        });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});