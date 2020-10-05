var register = require('../registracija/registracija-po');
var staticHome = require('./staticHome-po');
var staticLendwell = require('../staticLendwell/staticLendwell-po');


describe('Home page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
        it('Dolazak na home stranu', function(){
            register.landOnHomePage();
            browser.sleep(5000);
        });

        it('Provera da li se ucitao page title', function(){
            staticHome.checkPageTitle();
        });

        it('Provera da li se ucitao title on page', function(){
            staticHome.checkTitleOnPage();
        });

        it('Provera da li se ucitao join button', function(){
            staticHome.checkButton();
        });

        it('Provera da li su se ucitali brojevi za downloads', function(){
            staticHome.checkNumbersOfDownloads();
        });

        it('Provera da li su se ucitali brojevi za answers', function(){
            staticHome.checkNumberOfAnswers();
        });

        it('Provera da li su se ucitali brojevi za financial institutions', function(){
            staticHome.checkNumbersOfFinancialInstitutions();
            browser.sleep(2000);
        });

        it('Provera da li se ucitao document icon', function(){
            staticHome.checkDocImage();
        });

        it('Provera document section', function(){
            staticHome.checkDocumentSection();
        });

        it('Provera da li se ucitao peers icon ', function(){
            staticHome.checkPeersImage();
        });

        it('Provera peers section', function(){
            staticHome.checkPeersSection();
        });

        it('Provera da li se ucitao vendor icon ', function(){
            staticHome.checkVendorImage();
        });

        it('Provera vendor section', function(){
            staticHome.checkVendorSection();
        });

        it('Provera da li se ucitao bottom section', function(){
            staticHome.checkBottomSection();
            browser.sleep(1000);
        });
        
        it('Provera da li se ucitao intercom', function(){
            staticLendwell.checkIntercom();
        });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});