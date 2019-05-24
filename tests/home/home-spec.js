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
            home.checkPageTitle();
        });
        it('Provera da li se ucitao button for join', function(){
            home.checkButton();
        });
        it('Provera da li se ucitao title on page', function(){
            home.checkTitleOnPage();
        });
        it('Provera da li su se ucitali brojevi za downloads', function(){
            home.checkNumbersOfDownloads();
        });
        it('Provera da li su se ucitali brojevi za answers', function(){
            home.checkNumberOfAnswers();
        });
        it('Provera da li su se ucitali brojevi za financial institutions', function(){
            home.checkNumbersOfFinancialInstitutions();
        });
        it('Provera da li se ucitao intercom', function(){
            home.checkIntercom();
        });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});