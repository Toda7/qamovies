var staticAdvertiseGetStarted = require('./staticAdvertiseGetStarted-po.js');
var staticLendwell = require('../staticLendwell/staticLendwell-po');
var login = require('../login/login-po');



describe('Advertise get-started strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Certified Cannabis Banking Professional stranu', function(){
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(1000);
    });

    it('Otvori intercome', function(){
        staticLendwell.openIntercom();
        browser.sleep(5000);
    });

    it('Zatvori intercome', function(){
        staticLendwell.closeIntercom();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao page title', function(){
        staticAdvertiseGetStarted.checkAdvertiseGetStartedTitle();
    });

    it('Provera glavnog titla na strani', function(){
        staticAdvertiseGetStarted.checkTitlesOnPage();
        browser.sleep(500);
    });

    it('Provera First Name labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForFirstNameField();
        browser.sleep(500);
    });

    it('Provera Last Name labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForLastNameField();
        browser.sleep(500);
    });

    it('Provera Email labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForEmailField();
        browser.sleep(500);
    });

    it('Provera Comapny labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForCompanyField();
        browser.sleep(500);
    });

    it('Provera Phone labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForPhoneField();
        browser.sleep(500);
    });

    it("Provera How'd you find out about us? labele iznad polja", function(){
        staticAdvertiseGetStarted.checkLabelForLastFieldInForm();
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

    it('Unosenje texta u company field', function(){
        staticAdvertiseGetStarted.enterCompany();
        browser.sleep(500);
    });

    it('Unosenje numbers u phone field', function(){
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    it('Provera da li se ucitao Majkov avatar', function(){
        staticAdvertiseGetStarted.checkMikeAvatar();
        browser.sleep(500);
    });

    it('Provera texta pored majkovog avatara', function(){
        staticAdvertiseGetStarted.checkTextNextToAvatar();
        browser.sleep(500);
    });

    it('Klik na CONTACT ME button', function(){
        staticAdvertiseGetStarted.clickOnContactMeButton();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao Success url u produkciji', function(){
        staticAdvertiseGetStarted.checkSuccessURLFromProduction();
        browser.sleep(1000);
    });

    it('Provera success poruke', function(){
        staticAdvertiseGetStarted.checkSuccessMessage();
    });

    it('Dolazak na Success stranu na beti', function(){
        staticAdvertiseGetStarted.landOnSuccess();
        browser.sleep(4000);
    });

    it('Provera success poruke', function(){
        staticAdvertiseGetStarted.checkSuccessMessage();
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
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao page title', function(){
        staticAdvertiseGetStarted.checkAdvertiseGetStartedTitle();
    });

    it('Provera glavnog titla na strani', function(){
        staticAdvertiseGetStarted.checkTitlesOnPage();
        browser.sleep(500);
    });

    it('Provera First Name labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForFirstNameField();
        browser.sleep(500);
    });

    it('Provera Last Name labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForLastNameField();
        browser.sleep(500);
    });

    it('Provera Email labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForEmailField();
        browser.sleep(500);
    });

    it('Provera Comapny labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForCompanyField();
        browser.sleep(500);
    });

    it('Provera Phone labele iznad polja', function(){
        staticAdvertiseGetStarted.checkLabelForPhoneField();
        browser.sleep(500);
    });

    it("Provera How'd you find out about us? labele iznad polja", function(){
        staticAdvertiseGetStarted.checkLabelForLastFieldInForm();
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

    it('Provera da li se ucitao Majkov avatar', function(){
        staticAdvertiseGetStarted.checkMikeAvatar();
        browser.sleep(500);
    });

    it('Provera texta pored majkovog avatara', function(){
        staticAdvertiseGetStarted.checkTextNextToAvatar();
        browser.sleep(500);
    });

    it('Klik na CONTACT ME button', function(){
        staticAdvertiseGetStarted.clickOnContactMeButton();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao Success url u produkciji', function(){
        staticAdvertiseGetStarted.checkSuccessURLFromProduction();
        browser.sleep(1000);
    });

    it('Dolazak na Success stranu na beti', function(){
        staticAdvertiseGetStarted.landOnSuccess();
        browser.sleep(4000);
    });

    it('Provera success poruke', function(){
        staticAdvertiseGetStarted.checkSuccessMessage();
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