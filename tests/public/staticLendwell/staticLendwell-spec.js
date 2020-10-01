var register = require('../registracija/registracija-po');
var staticLendwell = require('./staticLendwell-po');
var staticAdvertiseGetStarted = require('../staticAdvertiseGetStarted/staticAdvertiseGetStarted-po');
var login = require('../login/login-po');


describe('Public lendwell strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
});   

    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });  

    it('Hover to open drop menu', function(){
        staticLendwell.HoverToOpenDrop();
    });  

    it('Klik na lendwell link iz drop menu', function(){
        staticLendwell.clickOnLink();
    }); 

    it('Provera lendwell URL-a', function(){
        staticLendwell.checkLendwell();
        browser.sleep(3000);
    }); 

    it('Provera da li se ucitao page title', function(){
        staticLendwell.checkLendwellPageTitle();
    });
    
    it('Provera glavnog titla i descriptiona na strani', function(){
        staticLendwell.checkTitleAndDescription();
    });

    it('Provera Learn More buttna', function(){
        staticLendwell.checkLearnMoreButton();
    });

    it('Provera texta koji se nalazi na sredini strane', function(){
        staticLendwell.checkMiddleSectionOnPage();
    });

    it('Provera da li se image icon za Streamline Your Process', function(){
        staticLendwell.checkIconForStreamlineYourProcess();
    });

    it('Provera da li se image icon za Close with Confidence', function(){
        staticLendwell.checkIconForCloseWithConfidence();
    });

    it('Provera da li se image icon za Lower Your Costs', function(){
        staticLendwell.checkIconForLowerYourCosts();
    });

    it('Provera section na dnu stranice', function(){
        staticLendwell.checkMiddleSectionOnPage();
    });

    it('Provera da li se image icon za Flood Determinations ', function(){
        staticLendwell.checkFloodDeterminationsImageIcon();
    });

    it('Provera da li se image icon za Property Valuations ', function(){
        staticLendwell.checkPropertyValuationsImageIcon();
    });
    
    it('Provera da li se image icon za Portfolio Analysis', function(){
        staticLendwell.checkPortfolioAnalysisImageIcon();
    });
    
    it('Provera da li se image icon za Equity & Lien Protection', function(){
        staticLendwell.checkEquityLienProtectionImageIcon();
    });
    
    it('Provera da li se image icon za Verification Services', function(){
        staticLendwell.checkVerificationServicesImageIcon();
    });
    
    it('Provera da li se image icon za Title Services', function(){
        staticLendwell.checkTitleServicesImageIcon();
    });
    
    it('Provera da li se image icon za Document Preparation', function(){
        staticLendwell.checkDocumentPreparationImageIcon();
    });

    it('Provera da li se image icon za Closing Services', function(){
        staticLendwell.checkClosingServicesImageIcon();
    });
    
    it('Provera da li se ucitao footer', function(){
        staticLendwell.checkIconForStreamlineYourProcess();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao intercom', function(){
        staticLendwell.checkIntercom();
    });

    it('Klik na prvi Learn More button', function(){
        staticLendwell.clickOnLearnMoreButton();
        browser.sleep(2000);
    });

    it('Provera da li se otvorila forma', function(){
        staticLendwell.checkForm();
    });

    it('Unosenje texta u first name field', function(){
        staticAdvertiseGetStarted.enterFirstName();
        browser.sleep(500);
    });

    it('Unosenje texta u last name field', function(){
        staticAdvertiseGetStarted.enterLastName();
        browser.sleep(500);
    });

    it('Unosenje texta u email field', function(){
        staticAdvertiseGetStarted.enterGmail();
        browser.sleep(500);
    });

    it('Unosenje numbers u phone field', function(){
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    it('Unosenje numbers u Zip Code field', function(){
        staticLendwell.enterZipCode();
        browser.sleep(500);
    });

    it('Unosenje texta u Title field', function(){
        staticLendwell.enterJobTitle();
        browser.sleep(500);
    });

    it('Klik na SUBMIT button', function(){
        staticLendwell.clickOnSubmitButton();
        browser.sleep(5000);
    });

    it('Provera Success URL-a', function(){
        staticLendwell.checkSuccessURL();
        browser.sleep(2000);
    });

    it('Provera success poruke', function(){
        staticLendwell.checkSuccessMessages();
        browser.sleep(5000);
    });

    it('Dolazak na Success Page na QA', function(){
        staticLendwell.landOnQaSuccessPage();
        browser.sleep(5000);
    });

    it('Provera success poruke', function(){
        staticLendwell.checkSuccessMessages();
    });

    it('Klik na Sign in button', function(){
        login.clickOnSignIn();
        browser.sleep(5000);
    });

    it('Unosenje emaila', function(){
        login.enterEmail();
        browser.sleep(500);
    });

    it('Unosenje lozinke', function(){
        login.enterPass();
        browser.sleep(500);
    });

    it('Logovanje', function(){
        login.submit();
        browser.sleep(4000)
    });

    it('Dolazak na lendwell stranu', function(){
        staticLendwell.landOnLendwellPage();
    });  

    it('Provera da li se ucitao page title', function(){
        staticLendwell.checkLendwellPageTitle();
    });
    
    it('Provera glavnog titla i descriptiona na strani', function(){
        staticLendwell.checkTitleAndDescription();
    });

    it('Provera Learn More buttna', function(){
        staticLendwell.checkLearnMoreButton();
    });

    it('Provera texta koji se nalazi na sredini strane', function(){
        staticLendwell.checkMiddleSectionOnPage();
    });

    it('Provera da li se image icon za Streamline Your Process', function(){
        staticLendwell.checkIconForStreamlineYourProcess();
    });

    it('Provera da li se image icon za Close with Confidence', function(){
        staticLendwell.checkIconForCloseWithConfidence();
    });

    it('Provera da li se image icon za Lower Your Costs', function(){
        staticLendwell.checkIconForLowerYourCosts();
    });

    it('Provera section na dnu stranice', function(){
        staticLendwell.checkMiddleSectionOnPage();
    });

    it('Provera da li se image icon za Flood Determinations ', function(){
        staticLendwell.checkFloodDeterminationsImageIcon();
    });

    it('Provera da li se image icon za Property Valuations ', function(){
        staticLendwell.checkPropertyValuationsImageIcon();
    });
    
    it('Provera da li se image icon za Portfolio Analysis', function(){
        staticLendwell.checkPortfolioAnalysisImageIcon();
    });
    
    it('Provera da li se image icon za Equity & Lien Protection', function(){
        staticLendwell.checkEquityLienProtectionImageIcon();
    });
    
    it('Provera da li se image icon za Verification Services', function(){
        staticLendwell.checkVerificationServicesImageIcon();
    });
    
    it('Provera da li se image icon za Title Services', function(){
        staticLendwell.checkTitleServicesImageIcon();
    });
    
    it('Provera da li se image icon za Document Preparation', function(){
        staticLendwell.checkDocumentPreparationImageIcon();
    });

    it('Provera da li se image icon za Closing Services', function(){
        staticLendwell.checkClosingServicesImageIcon();
    });
    
    it('Provera da li se ucitao footer', function(){
        staticLendwell.checkIconForStreamlineYourProcess();
        browser.sleep(3000);
    });

    it('Provera da li se ucitao intercom', function(){
        staticLendwell.checkIntercom();
    });

    it('Klik na prvi Learn More button', function(){
        staticLendwell.clickOnLearnMoreButton();
        browser.sleep(2000);
    });

    it('Provera da li se otvorila forma', function(){
        staticLendwell.checkForm();
    });

    it('Unosenje numbers u phone field', function(){
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    it('Unosenje numbers u Zip Code field', function(){
        staticLendwell.enterZipCode();
        browser.sleep(500);
    });

    it('Klik na SUBMIT button', function(){
        staticLendwell.clickOnSubmitButton();
        browser.sleep(5000);
    });

    it('Provera Success URL-a', function(){
        staticLendwell.checkSuccessURL();
        browser.sleep(2000);
    });

    it('Provera success poruke', function(){
        staticLendwell.checkSuccessMessages();
        browser.sleep(5000);
    });

    it('Dolazak na Success Page na QA', function(){
        staticLendwell.landOnQaSuccessPage();
        browser.sleep(5000);
    });

    it('Provera success poruke', function(){
        staticLendwell.checkSuccessMessages();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});