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

        it('Provera da li se ucitao title on page', function(){
            home.checkTitleOnPage();
        });

        it('Provera da li se ucitao join button', function(){
            home.checkButton();
        });

        it('Provera da li su se ucitali brojevi za downloads', function(){
            home.checkNumbersOfDownloads();
        });

        it('Provera da li su se ucitali brojevi za answers', function(){
            home.checkNumberOfAnswers();
        });

        it('Provera da li su se ucitali brojevi za financial institutions', function(){
            home.checkNumbersOfFinancialInstitutions();
            browser.sleep(2000);
        });

        it('Provera da li se ucitao document icon', function(){
            home.checkDocImage();
        });

        it('Provera document section', function(){
            home.checkDocumentSection();
        });

        it('Provera da li se ucitao peers icon ', function(){
            home.checkPeersImage();
        });

        it('Provera peers section', function(){
            home.checkPeersSection();
        });

        it('Provera da li se ucitao vendor icon ', function(){
            home.checkVendorImage();
        });

        it('Provera vendor section', function(){
            home.checkVendorSection();
        });

        it('Provera da li se ucitao bottom section', function(){
            home.checkBottomSection();
        });
        
        it('Provera da li se ucitao intercom', function(){
            home.checkIntercom();
        });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});