var staticLeadGenerationForFintech = require('./staticLeadGenerationForFintech-po.js');
var staticAdvertiseGetStarted = require('../staticAdvertiseGetStarted/staticAdvertiseGetStarted-po.js');
var login = require('../login/login-po.js');

describe('Lead Generation for Fintech strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Certified Cannabis Banking Professional stranu', function(){
        staticLeadGenerationForFintech.landOnLeadGenerationForFintech();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao page title', function(){
        staticLeadGenerationForFintech.checkLeadGenerationForFintechTitleOfPage();
        browser.sleep(1000);
    });

    it('Provera glavnog texta na strani', function(){
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala image na dnu stranice', function(){
        staticLeadGenerationForFintech.checkImageAtBottom();
        browser.sleep(500);
    });

    it('Provera texta na dnu stranice', function(){
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(500);
    });

    it('Provera da li se ucitala forma na strani', function(){
        staticLeadGenerationForFintech.checkForm();
        browser.sleep(500);
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

    it('Unosenje texta u company field', function(){
        staticAdvertiseGetStarted.enterCompany();
        browser.sleep(500);
    });

    it('Klik na Download button', function(){
        staticLeadGenerationForFintech.clickOnDownloadButton();
    });

    it('Provera da li se ucitao PDF dokument, provera URLa', function(){
        staticLeadGenerationForFintech.checkDocumentURL();
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Klik na Sign in button', function(){
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
        browser.sleep(4000)
    });

    it('Dolazak na Certified Cannabis Banking Professional stranu', function(){
        staticLeadGenerationForFintech.landOnLeadGenerationForFintech();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao page title', function(){
        staticLeadGenerationForFintech.checkLeadGenerationForFintechTitleOfPage();
        browser.sleep(1000);
    });

    it('Provera glavnog texta na strani', function(){
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala image na dnu stranice', function(){
        staticLeadGenerationForFintech.checkImageAtBottom();
        browser.sleep(500);
    });

    it('Provera texta na dnu stranice', function(){
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(500);
    });

    it('Provera da li se ucitala forma na strani', function(){
        staticLeadGenerationForFintech.checkForm();
        browser.sleep(500);
    });

    it(' Provera da li se u First name polju nalazi ime od logovanog usera', function(){
        staticAdvertiseGetStarted.checkIsFristNameInTheField();
        browser.sleep(500);
    });

    it('Provera da li se u Last name polju nalazi ime od logovanog usera', function(){
        staticAdvertiseGetStarted.checkIsLastNameInTheField();
        browser.sleep(500);
    });

    it('Provera da li se u Email polju nalazi email od logovanog usera', function(){
        staticAdvertiseGetStarted.checkIsEmailInTheField();
        browser.sleep(500);
    });

    it('Provera da li se u company polju nalazi company od logovanog usera', function(){
        staticAdvertiseGetStarted.checkICompanyInTheField();
        browser.sleep(500);
    });


    it('Unosenje numbers u phone field', function(){
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    it('Klik na Download button', function(){
        staticLeadGenerationForFintech.clickOnDownloadButton();
    });

    it('Provera da li se ucitao PDF dokument, provera URLa', function(){
        staticLeadGenerationForFintech.checkDocumentURL();
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function(){
        staticAdvertiseGetStarted.HoverToOpenUserDrop();
        browser.sleep(1000);
    }); 

    it('Click on Sign out link', function(){
        staticAdvertiseGetStarted.clickOnSignOutLink();
        browser.sleep(2000);
    }); 

    
    afterAll(function(){
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
    });

