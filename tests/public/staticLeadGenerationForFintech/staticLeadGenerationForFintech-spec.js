var staticLeadGenerationForFintech = require('./staticLeadGenerationForFintech-po.js');
var staticAdvertiseGetStarted = require('../staticAdvertiseGetStarted/staticAdvertiseGetStarted-po.js');
var login = require('../login/login-po.js');
var staticLendwell = require('../staticLendwell/staticLendwell-po');
var staticHome = require('../staticHome/staticHome-po');


describe('Lead Generation for Fintech strana', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Certified Cannabis Banking Professional stranu', function () {
        staticLeadGenerationForFintech.landOnLeadGenerationForFintech();
        browser.sleep(2000);
    });

    it('Otvori intercome', function () {
        staticLendwell.openIntercom();
        browser.sleep(5000);
    });

    it('Zatvori intercome', function () {
        staticLendwell.closeIntercom();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao page title', function () {
        staticLeadGenerationForFintech.checkLeadGenerationForFintechTitleOfPage();
        browser.sleep(1000);
    });

    it('Provera glavnog texta na strani', function () {
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala image na dnu stranice', function () {
        staticLeadGenerationForFintech.checkImageAtBottom();
        browser.sleep(500);
    });

    it('Provera texta na dnu stranice', function () {
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(500);
    });

    it('Provera da li se ucitala forma na strani', function () {
        staticLeadGenerationForFintech.checkForm();
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

    it('Unosenje numbers u phone field', function () {
        staticAdvertiseGetStarted.enterPhone();
        browser.sleep(500);
    });

    it('Unosenje texta u company field', function () {
        staticAdvertiseGetStarted.enterCompany();
        browser.sleep(500);
    });

    it('Klik na Download button', function () {
        staticLeadGenerationForFintech.clickOnDownloadButton();
    });

    it('Provera da li se ucitao PDF dokument, provera URLa', function () {
        staticLeadGenerationForFintech.checkDocumentURL();
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    // cekeri za public 
    it('Provera da li se ucitao Cbanc Logo u headeru', function () {
        staticHome.checkCBlogoInHeader();
    });

    it('Provera da li su se ucitali Community, Education, More, Vendors linkovi i JOIN i SIGN IN buttni u headeru', function () {
        staticHome.checkLinksInHeader();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Community link', function () {
        staticHome.checkCommunityLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Education link', function () {
        staticHome.checkEducationLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za More link', function () {
        staticHome.checkMoreLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Vendor link u headeru', function () {
        staticHome.checkVendorLink();
        browser.sleep(500);
    });

    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });

    it('Provera texta sekcije u Comunity drop downu', function () {
        staticHome.checkSubmenuSectionFromCommunityDrop();
    });

    it('Provera da li se ucitao href za Documents link u Community dropu', function () {
        staticHome.checkDocumentsLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Topics link u Community dropu', function () {
        staticHome.checkTopicsLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Get Answers link u Community dropu', function () {
        staticHome.checkQuestionsLink();
        browser.sleep(500);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Provera texta sekcije u Education drop downu', function () {
        staticHome.checkSubmenuSectionFromEducationyDrop();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Trainging link u Education dropu', function () {
        staticHome.checkTraingingLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Upcoming webinars link u Education dropu', function () {
        staticHome.checkUpcomingLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Bundles link u Education dropu', function () {
        staticHome.checkBundlesLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za On demand link u Education dropu', function () {
        staticHome.checkOnDemandLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za All Access link u Education dropu', function () {
        staticHome.checkAllAccessLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Orders link u Education dropu', function () {
        staticHome.checkMyOrdersLink();
        browser.sleep(500);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Provera texta sekcije u More drop downu', function () {
        staticHome.checkSubmenuSectionFromMoreyDrop();
    });

    it('Provera da li se ucitao href za Vendor Management link u More dropu', function () {
        staticHome.checkVendorManagementLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Risk Assessment link u More dropu', function () {
        staticHome.checkRiskAssessmentLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Peer Analysis link u More dropu', function () {
        staticHome.checkPeerAnalysisLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Lendwell link u More dropu', function () {
        staticHome.checkLendwellLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Join button', function () {
        staticHome.checkJoinButton();
        browser.sleep(500);
    });

    // href za vendors

    it('Klik na Sign In button', function () {
        staticHome.clickOnSignInButton();
        browser.sleep(3000);
    });

    it('Unosenje 1@chigago.com u email polje u Sign in formi da bi potvrdili da smo dosli na sign in formu', function () {
        staticHome.enterEmailforSignIn();
        browser.sleep(500);
        browser.navigate().back();
        browser.sleep(3000);
    });

    // Cekeri za footer (href)
    it('Provera da li su se ucitali svi linkovu u footeru', function () {
        staticHome.checkFooter();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao href za About link in footer', function () {
        staticHome.checkAboutLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za FAQ link in footer', function () {
        staticHome.checkFAQLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Contact link in footer', function () {
        staticHome.checkContactLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Vendors link in footer', function () {
        staticHome.checkVendorsLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Careers link in footer', function () {
        staticHome.checkCareersLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Blog link in footer', function () {
        staticHome.checkBlogLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Privacy Policy link in footer', function () {
        staticHome.checkPrivacyPolicyLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Terms of Service link in footer', function () {
        staticHome.checkTermsofServiceLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Code Of Conduct link in footer', function () {
        staticHome.checkCodeOfConductLink();
        browser.sleep(500);
    });

    // kraj cekera

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
        staticLeadGenerationForFintech.landOnLeadGenerationForFintech();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao page title', function () {
        staticLeadGenerationForFintech.checkLeadGenerationForFintechTitleOfPage();
        browser.sleep(1000);
    });

    it('Provera glavnog texta na strani', function () {
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(1000);
    });

    it('Provera da li se ucitala image na dnu stranice', function () {
        staticLeadGenerationForFintech.checkImageAtBottom();
        browser.sleep(500);
    });

    it('Provera texta na dnu stranice', function () {
        staticLeadGenerationForFintech.checkHeroTextOnPage();
        browser.sleep(500);
    });

    it('Provera da li se ucitala forma na strani', function () {
        staticLeadGenerationForFintech.checkForm();
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

    it('Klik na Download button', function () {
        staticLeadGenerationForFintech.clickOnDownloadButton();
    });

    it('Provera da li se ucitao PDF dokument, provera URLa', function () {
        staticLeadGenerationForFintech.checkDocumentURL();
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(4000);
    });

    // cekeri za private 
    it('Provera da li se ucitao Cbanc Logo u headeru', function () {
        staticHome.checkCBlogoInHeader();
    });

    it('Provera da li su se ucitali Community, Education, More linkovi i Chicago Alberto', function () {
        staticHome.checkLinksInHeaderForPrivate();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Community link', function () {
        staticHome.checkCommunityLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Education link', function () {
        staticHome.checkEducationLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za More link', function () {
        staticHome.checkMoreLink();
        browser.sleep(500);
    });

    it('Hover to open Community drop menu', function () {
        staticHome.HoverToOpenCommunityDrop();
        browser.sleep(2000);
    });

    it('Provera texta sekcije u Comunity drop downu', function () {
        staticHome.checkSubmenuSectionFromCommunityDropForPrivate();
    });

    it('Provera da li se ucitao href za MY Cbanc link u Community dropu', function () {
        staticHome.checkPrivateCommunityLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Documents link u Community dropu', function () {
        staticHome.checkPrivateDocumentsLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Topics link u Community dropu', function () {
        staticHome.checkPrivateTopicsLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Vendor directory link u Community dropu', function () {
        staticHome.checkPrivateVendorsLink();
        browser.sleep(500);
    });

    it('Hover to open Education drop menu', function () {
        staticHome.HoverToOpenEducationDrop();
        browser.sleep(2000);
    });

    it('Provera texta sekcije u Education drop downu', function () {
        staticHome.checkSubmenuSectionFromEducationyDrop();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Trainging link u Education dropu', function () {
        staticHome.checkTraingingLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Upcoming webinars link u Education dropu', function () {
        staticHome.checkUpcomingLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Bundles link u Education dropu', function () {
        staticHome.checkBundlesLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za On demand link u Education dropu', function () {
        staticHome.checkOnDemandLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za All Access link u Education dropu', function () {
        staticHome.checkAllAccessLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Orders link u Education dropu', function () {
        staticHome.checkMyOrdersLink();
        browser.sleep(500);
    });

    it('Hover to open More drop menu', function () {
        staticHome.HoverToOpenMoreDrop();
        browser.sleep(2000);
    });

    it('Provera texta sekcije u More drop downu', function () {
        staticHome.checkSubmenuSectionFromMoreyDrop();
    });

    it('Provera da li se ucitao href za Vendor Management link u More dropu', function () {
        staticHome.checkVendorManagementLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Risk Assessment link u More dropu', function () {
        staticHome.checkRiskAssessmentLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Peer Analysis link u More dropu', function () {
        staticHome.checkPeerAnalysisLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Lendwell link u More dropu', function () {
        staticHome.checkLendwellLink();
        browser.sleep(500);
    });

    // cekeri za user drop menu 
    it('Provera da li se ucitao href za Inbox icon u headeru', function () {
        staticHome.checkInboxIconLink();
        browser.sleep(1000);
    });

    it('Hover to open user drop menu da bi proverili hrefove za sve linkove u dropu', function () {
        staticHome.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao href za My Profile link u user drop down menu', function () {
        staticHome.checkMyProfileLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao href za My Company link u user drop down menu', function () {
        staticHome.checkMyCompanyLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao href za Reputation u user drop down menu', function () {
        staticHome.checkPeputationLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao href za Account settings u user drop down menu', function () {
        staticHome.checkSettingsLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao href za Sign Out u user drop down menu', function () {
        staticHome.checkSignOutLink();
        browser.sleep(1000);
    });


    // Cekeri za footer (href)
    it('Provera da li su se ucitali svi linkovu u footeru', function () {
        staticHome.checkFooter();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao href za About link in footer', function () {
        staticHome.checkAboutLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za FAQ link in footer', function () {
        staticHome.checkFAQLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Contact link in footer', function () {
        staticHome.checkContactLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Vendors link in footer', function () {
        staticHome.checkVendorsLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Careers link in footer', function () {
        staticHome.checkCareersLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Blog link in footer', function () {
        staticHome.checkBlogLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Privacy Policy link in footer', function () {
        staticHome.checkPrivacyPolicyLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Terms of Service link in footer', function () {
        staticHome.checkTermsofServiceLink();
        browser.sleep(500);
    });

    it('Provera da li se ucitao href za Code Of Conduct link in footer', function () {
        staticHome.checkCodeOfConductLink();
        browser.sleep(500);
    });

    // kraj cekera 

    it('Hover to open user drop menu', function () {
        staticAdvertiseGetStarted.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Click on Sign out link', function () {
        staticAdvertiseGetStarted.clickOnSignOutLink();
        browser.sleep(2000);
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true); //stavlja se na kraj fajla
    });
});

