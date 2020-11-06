var staticAdvertiseGetStarted = require('./staticAdvertiseGetStarted-po.js');
var staticLendwell = require('../staticLendwell/staticLendwell-po');
var login = require('../login/login-po');
var staticHome = require('../staticHome/staticHome-po.js');
var register = require('../registracija/registracija-po');


describe('Advertise get-started strana', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Certified Cannabis Banking Professional stranu', function () {
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(3000);
    });

    it('Otvori intercome', function () {
        staticLendwell.openIntercom();
        browser.sleep(5000);
    });

    it('Zatvori intercome', function () {
        staticLendwell.closeIntercom();
        browser.sleep(2000);
    });

    // cekeri za header sa klikom na linkove za public stranu 
    it('Provera da li se ucitao Cbanc Logo u headeru', function () {
        staticHome.checkCBlogoInHeader();
    });

    it('Klik na Logo u headeru', function () {
        staticHome.clickOnLogo();
        browser.sleep(2000);
    });

    it('Provera home URL-a nakon klika na logo', function () {
        staticHome.checkHomeURL();
    });

    it('Provera da li su se ucitali Community, Education, More, Vendors linkovi i JOIN i SIGN IN buttni u headeru', function () {
        staticHome.checkLinksInHeader();
        browser.sleep(1000);
    });

    it('Klik na Community u headeru', function () {
        staticHome.clickOnCommunity();
        browser.sleep(3000);
    });

    it('Unosenje emaila u Email polje da bi potvrdili da se ucitala sign in forma', function () {
        login.enterEmail();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });

    it('Provera texta u Comunity drop downu', function () {
        staticHome.checkSubmenuSectionFromCommunityDrop();
    });

    it('Klik na Document link iz Community drop down menu', function () {
        staticHome.clickOnDocumentLink();
        browser.sleep(2000);
    });

    it('Provera document URL-a nakon klika na Documents link ', function () {
        staticHome.checkDocumentsURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });


    it('Klik na Topics link iz Community drop down menu', function () {
        staticHome.clickOnTopicsLink();
        browser.sleep(2000);
    });

    it('Provera Topics URL-a nakon klika na topics link ', function () {
        staticHome.checkTopicssURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });

    it('Klik na Questions link iz Community drop down menu', function () {
        staticHome.clickOnQuestionsLink();
        browser.sleep(2000);
    });

    it('Provera Questions URL-a nakon klika na questions link ', function () {
        staticHome.checkQuestionsURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Education link u headeru', function () {
        staticHome.clickOnEducationLink();
        browser.sleep(2000);
    });

    it('Provera Education URL-a nakon klika na Education link ', function () {
        staticHome.checkEducationURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Provera texta u Education drop downu', function () {
        staticHome.checkSubmenuSectionFromEducationyDrop();
        browser.sleep(2000);
    });

    it('Klik na Training link iz Education drop down menu', function () {
        staticHome.clickOnTrainingLink();
        browser.sleep(10000);
    });

    it('Provera Titla na Sign in strani', function () {
        staticHome.checkTitleInSignInForm();
    });

    it('Unosenje email u Email polje da bi potvrdili da smo dobili Sign in formu nakon klika na Training link', function () {
        login.enterEmail();
        browser.sleep(1000);
    });

    it('Dolazak na Advertise stranu jer ne radi dobro BACK sa Training strane', function () {
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(4000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na Upcoming Webinars link iz Education drop down menu', function () {
        staticHome.clickOnUpcomingLink();
        browser.sleep(2000);
    });

    it('Provera Upcoming URL-a nakon klika na Upcoming Webinars link ', function () {
        staticHome.checkUpcomingURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na Bundles link iz Education drop down menu', function () {
        staticHome.clickOnBundlesLink();
        browser.sleep(2000);
    });

    it('Provera Bundles URL-a nakon klika na Bundles link', function () {
        staticHome.checkBundlesURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na OnDemand link iz Education drop down menu', function () {
        staticHome.clickOnOnDemandLink();
        browser.sleep(2000);
    });

    it('Provera OnDemand URL-a nakon klika na On Demand link', function () {
        staticHome.checkOnDemandURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na All Access link iz Education drop down menu', function () {
        staticHome.clickOnAllAccessLink();
        browser.sleep(2000);
    });

    it('Provera All Access URL-a nakon klika na All Access link', function () {
        staticHome.checkAllAccessURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na Orders link iz Education drop down menu', function () {
        staticHome.clickOnOrdersLink();
        browser.sleep(2000);
    });

    it('Provera Orders URL-a nakon klika na Orders link ', function () {
        staticHome.checkOrdersURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na More link u headeru', function () {
        staticHome.clickOnMoreLink();
        browser.sleep(2000);
    });

    it('Provera More URL-a nakon klika na More link u headeru', function () {
        staticHome.checkMoreURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(3000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Provera texta u More drop downu', function () {
        staticHome.checkSubmenuSectionFromMoreyDrop();
    });

    it('Klik na vendor management link iz Education drop down menu', function () {
        staticHome.clickOnVendorManagementLink();
        browser.sleep(2000);
    });

    it('Provera vendor management URL-a nakon klika na vendor management link', function () {
        staticHome.checkVendorManagementURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Klik na Risk Assessment link iz Education drop down menu', function () {
        staticHome.clickOnRiskAssessmentLink();
        browser.sleep(2000);
    });

    it('Provera Risk Assessment URL-a nakon klika na Risk Assessment link', function () {
        staticHome.checkRiskAssessmentURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Klik na Peer Analysis link iz Education drop down menu', function () {
        staticHome.clickOnPeerAnalysisLink();
        browser.sleep(2000);
    });

    it('Provera Peer Analysis URL-a nakon klika na Peer Analysis link', function () {
        staticHome.checkPeerAnalysisURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(5000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Klik na Lendwell link iz Education drop down menu', function () {
        staticHome.clickOnLendwellLink();
        browser.sleep(2000);
    });

    it('Provera Lendwell URL-a nakon klika na Lendwell link', function () {
        staticHome.checkLendwellURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Vendor link u headeru', function () {
        staticHome.clickOnVendorLink();
        browser.sleep(2000);
    });

    it('Provera Vendor URL-a nakon klika na Vendor link', function () {
        staticHome.checkVendorURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Join button u headeru', function () {
        staticHome.clickOnJoinButton();
        browser.sleep(2000);
    });

    it('Provera Join URL-a nakon klika na Join button', function () {
        staticHome.checkJoinURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Join button u headeru', function () {
        staticHome.clickOnSignInButton();
        browser.sleep(2000);
    });

    it('Provera Join URL-a nakon klika na Join button', function () {
        login.enterEmail();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    // Cekeri za footer sa klikom na linkove 

    it('Provera footer sekcije', function () {
        staticHome.checkFooter();
        browser.sleep(2000);
    });

    it('Klik na About link u footeru', function () {
        staticHome.clickOnAboutLink();
        browser.sleep(2000);
    });

    it('Provera About URL-a nakon klika na About link', function () {
        staticHome.checkAboutURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na FAQ link u footeru', function () {
        staticHome.clickOnFAQLink();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    });

    it('Provera FAQ URL-a nakon klika na FAQ link ', function () {
        staticHome.checkFAQURL();
        browser.sleep(1000);
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.switchTo().window(handles[1]);
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Klik na Contact link u footeru', function () {
        staticHome.clickOnContactLink();
        browser.sleep(2000);
    });

    it('Provera Contact URL-a nakon klika na Contact link', function () {
        staticHome.checkContactURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Vendors link u footeru', function () {
        staticHome.clickOnVendorstLink();
        browser.sleep(2000);
    });

    it('Provera Vendors URL-a nakon klika na Vendors link ', function () {
        staticHome.checkVendorstURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Careers link u footeru', function () {
        staticHome.clickOnCareersLink();
        browser.sleep(2000);
    });

    it('Provera Careers URL-a nakon klika na Careers link ', function () {
        staticHome.checkCareersURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Blog link u footeru', function () {
        staticHome.clickOnBlogLink();
        browser.sleep(2000);
    });

    it('Provera Blog URL-a nakon klika na Blog link ', function () {
        staticHome.checkBlogURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Privacy Policy link u footeru', function () {
        staticHome.clickOnPrivacyPolicyLink();
        browser.sleep(2000);
    });

    it('Provera Privacy Policy URL-a nakon klika na Privacy Policy link ', function () {
        staticHome.checkPrivacyPolicyURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Terms of Service link u footeru', function () {
        staticHome.clickOnTermsofServiceLink();
        browser.sleep(2000);
    });

    it('Provera Terms of Service URL-a nakon klika na Terms of Service link ', function () {
        staticHome.checkTermsofServiceURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it(' Klik na Code of Conduct link u footeru', function () {
        staticHome.clickOnCodeOfConductLink();
        browser.sleep(2000);
    });

    it('Provera Code of Conduct URL-a nakon klika na Code of Conduct link', function () {
        staticHome.checkCodeOfConductURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao page title', function () {
        staticAdvertiseGetStarted.checkAdvertiseGetStartedTitle();
    });

    it('Provera glavnog titla na strani', function () {
        staticAdvertiseGetStarted.checkTitlesOnPage();
        browser.sleep(500);
    });

    it('Provera First Name labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForFirstNameField();
        browser.sleep(500);
    });

    it('Provera Last Name labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForLastNameField();
        browser.sleep(500);
    });

    it('Provera Email labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForEmailField();
        browser.sleep(500);
    });

    it('Provera Comapny labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForCompanyField();
        browser.sleep(500);
    });

    it('Provera Phone labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForPhoneField();
        browser.sleep(500);
    });

    it("Provera How'd you find out about us? labele iznad polja", function () {
        staticAdvertiseGetStarted.checkLabelForLastFieldInForm();
        browser.sleep(500);
    });

    it('Unosenje texta u first name field', function () {
        staticAdvertiseGetStarted.enterFirstName();
        browser.sleep(500);
    });

    it('Unosenje texta u last name field', function () {
        staticAdvertiseGetStarted.enterLastName();
        browser.sleep(500);
    });

    it('Unosenje texta u email field', function () {
        staticAdvertiseGetStarted.enterGmail();
        browser.sleep(500);
    });

    it('Unosenje texta u company field', function () {
        staticAdvertiseGetStarted.enterCompany();
        browser.sleep(500);
    });

    it('Unosenje numbers u phone field', function () {
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    it('Provera da li se ucitao Majkov avatar', function () {
        staticAdvertiseGetStarted.checkMikeAvatar();
        browser.sleep(500);
    });

    it('Provera texta pored majkovog avatara', function () {
        staticAdvertiseGetStarted.checkTextNextToAvatar();
        browser.sleep(500);
    });

    it('Klik na CONTACT ME button', function () {
        staticAdvertiseGetStarted.clickOnContactMeButton();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao Success url u produkciji', function () {
        staticAdvertiseGetStarted.checkSuccessURLFromProduction();
        browser.sleep(1000);
    });

    it('Provera success poruke', function () {
        staticAdvertiseGetStarted.checkSuccessMessage();
    });

    it('Dolazak na Success stranu na beti', function () {
        staticAdvertiseGetStarted.landOnSuccess();
        browser.sleep(4000);
    });

    it('Provera success poruke', function () {
        staticAdvertiseGetStarted.checkSuccessMessage();
    });

    it('Klik na Sign in button', function () {
        login.clickOnSignIn();
    });

    it('Provera da li smo landovali na sign in stranu', function () {
        login.checkSignInUrl();
        browser.sleep(2000);
    });

    it('Unosenje emaila', function () {
        login.enterEmail();
    });

    it('Unosenje lozinke', function () {
        login.enterPass();
    });

    it('Logovanje', function () {
        login.submit();
        browser.sleep(4000)
    });

    it('Dolazak na Certified Cannabis Banking Professional stranu', function () {
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao page title', function () {
        staticAdvertiseGetStarted.checkAdvertiseGetStartedTitle();
    });

    it('Provera glavnog titla na strani', function () {
        staticAdvertiseGetStarted.checkTitlesOnPage();
        browser.sleep(500);
    });

    it('Provera First Name labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForFirstNameField();
        browser.sleep(500);
    });

    it('Provera Last Name labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForLastNameField();
        browser.sleep(500);
    });

    it('Provera Email labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForEmailField();
        browser.sleep(500);
    });

    it('Provera Comapny labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForCompanyField();
        browser.sleep(500);
    });

    it('Provera Phone labele iznad polja', function () {
        staticAdvertiseGetStarted.checkLabelForPhoneField();
        browser.sleep(500);
    });

    it("Provera How'd you find out about us? labele iznad polja", function () {
        staticAdvertiseGetStarted.checkLabelForLastFieldInForm();
        browser.sleep(500);
    });

    it(' Provera da li se u First name polju nalazi ime od logovanog usera', function () {
        staticAdvertiseGetStarted.checkIsFristNameInTheField();
        browser.sleep(500);
    });

    it('Provera da li se u Last name polju nalazi ime od logovanog usera', function () {
        staticAdvertiseGetStarted.checkIsLastNameInTheField();
        browser.sleep(500);
    });

    it('Provera da li se u Email polju nalazi email od logovanog usera', function () {
        staticAdvertiseGetStarted.checkIsEmailInTheField();
        browser.sleep(500);
    });

    it('Provera da li se u company polju nalazi company od logovanog usera', function () {
        staticAdvertiseGetStarted.checkICompanyInTheField();
        browser.sleep(500);
    });

    it('Unosenje numbers u phone field', function () {
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    it('Provera da li se ucitao Majkov avatar', function () {
        staticAdvertiseGetStarted.checkMikeAvatar();
        browser.sleep(500);
    });

    it('Provera texta pored majkovog avatara', function () {
        staticAdvertiseGetStarted.checkTextNextToAvatar();
        browser.sleep(500);
    });

    it('Klik na CONTACT ME button', function () {
        staticAdvertiseGetStarted.clickOnContactMeButton();
        browser.sleep(4000);
    });

    it('Provera da li se ucitao Success url u produkciji', function () {
        staticAdvertiseGetStarted.checkSuccessURLFromProduction();
        browser.sleep(1000);
    });

    it('Dolazak na Success stranu na beti', function () {
        staticAdvertiseGetStarted.landOnSuccess();
        browser.sleep(4000);
    });

    it('Provera success poruke', function () {
        staticAdvertiseGetStarted.checkSuccessMessage();
        browser.sleep(4000);
    });

    // cekeri za header sa klikom na linkove za private stranu 
    it('Provera da li se ucitao Cbanc Logo u headeru', function () {
        staticHome.checkCBlogoInHeader();
    });

    it('Klik na Logo u headeru', function () {
        staticHome.clickOnLogo();
        browser.sleep(2000);
    });
    
    it('Provera dashabord URL-a nakon klika na img link ', function () {
        staticHome.checkDashabordURL();
        browser.sleep(1000);
    });

    it('Dolazak na Advertise Get Started stranu jer ne radi dobro BACK sa dashboarda strane', function () {
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(4000);
    });

    it('Provera da li su se ucitali Community, Education, More linkovi i Chicago Alberto', function () {
        staticHome.checkLinksInHeaderForPrivate();
        browser.sleep(1000);
    });

    it('Klik na Community u headeru', function () {
        staticHome.clickOnCommunity();
        browser.sleep(3000);
    });

    it('Provera community URL-a nakon klika na community link ', function () {
        staticHome.checkMyCbancsURL();
        browser.sleep(3000);
        browser.navigate().back();
        browser.sleep(2000);
    });
  
    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(4000); 
    });

    it('Provera texta u Comunity drop downu for private', function () {
        staticHome.checkSubmenuSectionFromCommunityDropForPrivate();
    });

    it('Klik na MY CBANC link iz Community drop down menu', function () {
        staticHome.clickOnMyCbancFromCommunity();
        browser.sleep(2000);
    });

    it('Provera MyCbanc URL-a nakon klika na MyCbancs link', function () {
        staticHome.checkMyCbancsURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

      
    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });

    it('Klik na Document link iz Community drop down menu', function () {
        staticHome.clickOnDocumentLink();
        browser.sleep(2000);
    });

    it('Provera document URL-a nakon klika na Documents link ', function () {
        staticHome.checkPrivateDocumentsURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });

    it('Klik na Topics link iz Community drop down menu', function () {
        staticHome.clickOnTopicsLink();
        browser.sleep(2000);
    });

    it('Provera Topics URL-a nakon klika na topics link', function () {
        staticHome.checkPrivateTopicsURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });

    it('Klik na Vendor Directory link iz Community drop down menu', function () {
        staticHome.clickOnVendorDirectoryFromCommunity();
        browser.sleep(2000);
    });

    it('Provera Vendor Directory URL-a nakon klika na Vendor direcoty link ', function () {
        staticHome.checkVendorDirectorysURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Education link u headeru', function () {
        staticHome.clickOnEducationLink();
        browser.sleep(2000);
    });

    it('Provera Education URL-a nakon klika na Education link ', function () {
        staticHome.checkEducationURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Provera texta u Education drop downu', function () {
        staticHome.checkSubmenuSectionFromEducationyDrop();
        browser.sleep(4000);
    });

    it('Klik na Training link iz Education drop down menu', function () {
        staticHome.clickOnTrainingLink();
        browser.sleep(10000);
    });

    it('Provera Titla na Sign in strani', function () {
        staticHome.checkTitleInSignInForm();
    });

    it('Dolazak na Advertise Get Started stranu jer ne radi dobro BACK sa Training strane', function () {
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(4000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na Upcoming Webinars link iz Education drop down menu', function () {
        staticHome.clickOnUpcomingLink();
        browser.sleep(2000);
    });

    it('Provera Upcoming URL-a nakon klika na Upcoming Webinars link ', function () {
        staticHome.checkUpcomingURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na Bundles link iz Education drop down menu', function () {
        staticHome.clickOnBundlesLink();
        browser.sleep(2000);
    });

    it('Provera Bundles URL-a nakon klika na Bundles link', function () {
        staticHome.checkBundlesURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na OnDemand link iz Education drop down menu', function () {
        staticHome.clickOnOnDemandLink();
        browser.sleep(2000);
    });

    it('Provera OnDemand URL-a nakon klika na On Demand link', function () {
        staticHome.checkOnDemandURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na All Access link iz Education drop down menu', function () {
        staticHome.clickOnAllAccessLink();
        browser.sleep(2000);
    });

    it('Provera All Access URL-a nakon klika na All Access link', function () {
        staticHome.checkAllAccessURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Klik na Orders link iz Education drop down menu', function () {
        staticHome.clickOnOrdersLink();
        browser.sleep(2000);
    });

    it('Provera Orders URL-a nakon klika na Orders link ', function () {
        staticHome.checkOrdersURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na More link u headeru', function () {
        staticHome.clickOnMoreLink();
        browser.sleep(2000);
    });

    it('Provera More URL-a nakon klika na More link u headeru', function () {
        staticHome.checkMoreURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(3000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Provera texta u More drop downu', function () {
        staticHome.checkSubmenuSectionFromMoreyDrop();
    });

    it('Klik na vendor management link iz Education drop down menu', function () {
        staticHome.clickOnVendorManagementLink();
        browser.sleep(2000);
    });

    it('Provera vendor management URL-a nakon klika na vendor management link', function () {
        staticHome.checkVendorManagementURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Klik na Risk Assessment link iz Education drop down menu', function () {
        staticHome.clickOnRiskAssessmentLink();
        browser.sleep(2000);
    });

    it('Provera Risk Assessment URL-a nakon klika na Risk Assessment link', function () {
        staticHome.checkRiskAssessmentURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Dolazak na Advertise stranu jer ne radi dobro BACK sa Risk Assessment strane', function () {
        staticAdvertiseGetStarted.landOnAdvertiseGetStarted();
        browser.sleep(4000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Klik na Peer Analysis link iz Education drop down menu', function () {
        staticHome.clickOnPeerAnalysisLink();
        browser.sleep(2000);
    });

    it('Provera Peer Analysis URL-a nakon klika na Peer Analysis link', function () {
        staticHome.checkPeerAnalysisURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(5000);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Klik na Lendwell link iz Education drop down menu', function () {
        staticHome.clickOnLendwellLink();
        browser.sleep(2000);
    });

    it('Provera Lendwell URL-a nakon klika na Lendwell link', function () {
        staticHome.checkLendwellURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    // cekeri za user drop menu sa klikom na linkove 
    it('Klik na inbox icon u headeru', function () {
        staticHome.clickOnInboxIcon();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Inbox URL', function () {
        staticHome.checkInboxURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function () {
        staticHome.HoverToOpenUserDrop();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao user drop menu, ime usera, my profilem, my company, reputation timeline, account settings i sign out ', function () {
        staticHome.checkUserMenu();
        browser.sleep(1000);
    });

    it('Klik na My Profile link', function () {
        staticHome.clickOnMyProfileLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao My Profile URL', function () {
        staticHome.checkMyProfileURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function () {
        staticHome.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Klik na My ORg link', function () {
        staticHome.clickOnMyOrgLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao My Org URL', function () {
        staticHome.checkMyOrgURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function () {
        staticHome.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Klik na Reputation Timeline link', function () {
        staticHome.clickOnReputationTimelineLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Reputation Timeline URL', function () {
        staticHome.checkReputationTimelineURL();
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function () {
        staticHome.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Klik na Account Settings link', function () {
        staticHome.clickOnAccountSettingsLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Account Settings URL', function () {
        staticHome.checkAccountSettingsURL();
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    // Cekeri za footer sa klikom na linkove 

    it('Provera footer sekcije', function () {
        staticHome.checkFooter();
        browser.sleep(2000);
    });

    it('Klik na About link u footeru', function () {
        staticHome.clickOnAboutLink();
        browser.sleep(2000);
    });

    it('Provera About URL-a nakon klika na About link', function () {
        staticHome.checkAboutURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na FAQ link u footeru', function () {
        staticHome.clickOnFAQLink();
        browser.sleep(2000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    });

    it('Provera FAQ URL-a nakon klika na FAQ link ', function () {
        staticHome.checkFAQURL();
        browser.sleep(1000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
    });

    it('Klik na Contact link u footeru', function () {
        staticHome.clickOnContactLink();
        browser.sleep(2000);
    });

    it('Provera Contact URL-a nakon klika na Contact link', function () {
        staticHome.checkContactURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Vendors link u footeru', function () {
        staticHome.clickOnVendorstLink();
        browser.sleep(2000);
    });

    it('Provera Vendors URL-a nakon klika na Vendors link ', function () {
        staticHome.checkVendorstURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Careers link u footeru', function () {
        staticHome.clickOnCareersLink();
        browser.sleep(2000);
    });

    it('Provera Careers URL-a nakon klika na Careers link ', function () {
        staticHome.checkCareersURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Blog link u footeru', function () {
        staticHome.clickOnBlogLink();
        browser.sleep(2000);
    });

    it('Provera Blog URL-a nakon klika na Blog link ', function () {
        staticHome.checkBlogURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Privacy Policy link u footeru', function () {
        staticHome.clickOnPrivacyPolicyLink();
        browser.sleep(2000);
    });

    it('Provera Privacy Policy URL-a nakon klika na Privacy Policy link ', function () {
        staticHome.checkPrivacyPolicyURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('Klik na Terms of Service link u footeru', function () {
        staticHome.clickOnTermsofServiceLink();
        browser.sleep(2000);
    });

    it('Provera Terms of Service URL-a nakon klika na Terms of Service link ', function () {
        staticHome.checkTermsofServiceURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it(' Klik na Code of Conduct link u footeru', function () {
        staticHome.clickOnCodeOfConductLink();
        browser.sleep(2000);
    });

    it('Provera Code of Conduct URL-a nakon klika na Code of Conduct link', function () {
        staticHome.checkCodeOfConductURL();
        browser.sleep(1000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    // log out 

    it('Hover to open user drop menu', function () {
        staticHome.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Click on Sign out link', function () {
        staticHome.clickOnSignOutLink();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});



    ///////////



