var register = require('../registracija/registracija-po');
var staticLendwell = require('../staticLendwell/staticLendwell-po');
var staticPeerAnalysis = require('./staticPeerAnalysis-po');
var staticAdvertiseGetStarted = require('../staticAdvertiseGetStarted/staticAdvertiseGetStarted-po');
var login = require('../login/login-po');
var staticHome = require('../staticHome/staticHome-po');


describe('Peer analysis strana', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });
    it('Dolazak na home stranu', function () {
        register.landOnHomePage();
        browser.sleep(4000);
    });

    it('Hover to open on drop menu', function () {
        staticLendwell.HoverToOpenDrop();
        browser.sleep(2000);
    });

    it('Klik na PA link iz drop menu', function () {
        staticPeerAnalysis.clickOnLink();
        browser.sleep(4000);
    });

    it('Provera PA URL-a', function () {
        staticPeerAnalysis.checkPaUrl();
        browser.sleep(1000);
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
        staticPeerAnalysis.checkRAPageTitle();
    });

    it("Provera title, description i LAUNCH PEER ANALYSIS TOOL buttna na strani", function () {
        staticPeerAnalysis.checkFirstSectionOnPage();
        browser.sleep(1000);
    });

    it("Provera Create custom reports in seconds sekcije na strani", function () {
        staticPeerAnalysis.CheckCreateCustomReportsInSeconds();
        browser.sleep(1000);
    });

    it("Provera da li se ucitala slika u Create custom reports in seconds sekciji", function () {
        staticPeerAnalysis.CheckCreateCustomReportsInSecondsImage();
    });

    it("Provera Choose your own peer groups sekcije na strani ", function () {
        staticPeerAnalysis.CheckChooseYourOwnPeerGroups();
        browser.sleep(1000);
    });

    it("Provera da li se ucitala slika u Choose your own peer groups sekciji", function () {
        staticPeerAnalysis.CheckChooseYourOwnPeerGroupsImage();
    });

    it("Provera View data trends over time sekcije na strani", function () {
        staticPeerAnalysis.CheckViewDataTrendsOverTimeGroups();
        browser.sleep(1000);
    });

    it("Provera da li se ucitala slika u View data trends over time sekciji", function () {
        staticPeerAnalysis.CheckViewDataTrendsOverTimeGroupsImage();
    });

    it("Provera Download and share with your team sekcije na strani ", function () {
        staticPeerAnalysis.CheckDownloadAndShareWithYourTeam();
        browser.sleep(1000);
    });

    it("Provera da li se ucitala slika u Download and share with your team sekciji", function () {
        staticPeerAnalysis.CheckDownloadAndShareWithYourTeamImage();
    });

    it("Provera sekcije iznad premium reklame", function () {
        staticPeerAnalysis.CheckBottomSection();
        browser.sleep(1000);
    });

    it("Provera sekcije Premium reklama", function () {
        staticPeerAnalysis.CheckPremiumAd();
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

    it('Klik na LAUNCH PEER ANALYSIS TOOL button', function () {
        staticPeerAnalysis.clickOnLaunchPeerAnalysisToolButton();
        browser.sleep(4000);
    });

    it('Unosenje emaila', function () {
        login.enterEmail();
        browser.sleep(500);
    });

    it('Unosenje lozinke', function () {
        login.enterPass();
        browser.sleep(500);
    });

    it('Logovanje', function () {
        login.submit();
        browser.sleep(4000)
    });

    it('Provera peer analysis URL-a nakon logovanja', function () {
        staticPeerAnalysis.checkURLAfterCLickOnTheLaunchButton();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function () {
        staticAdvertiseGetStarted.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Click on Sign out link', function () {
        staticAdvertiseGetStarted.clickOnSignOutLink();
        browser.sleep(2000);
    });

    it('Dolazak na peer analysis public stranu', function () {
        staticPeerAnalysis.landPublicPAPage();
        browser.sleep(4000);
    });

    it('Klik na GET STARTED button', function () {
        staticPeerAnalysis.clickOnGetStartedButton();
        browser.sleep(4000);
    });

    it('Unosenje emaila', function () {
        login.enterEmail();
        browser.sleep(500);
    });

    it('Unosenje lozinke', function () {
        login.enterPass();
        browser.sleep(500);
    });

    it('Logovanje', function () {
        login.submit();
        browser.sleep(4000)
    });

    it('Provera peer analysis URL-a nakon logovanja', function () {
        staticPeerAnalysis.checkURLAfterCLickOnTheLaunchButton();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function () {
        staticAdvertiseGetStarted.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Click on Sign out link', function () {
        staticAdvertiseGetStarted.clickOnSignOutLink();
        browser.sleep(3000);
    });

    it('Dolazak na peer analysis public stranu', function () {
        staticPeerAnalysis.landPublicPAPage();
        browser.sleep(4000);
    });

    it('Klik na Learn More About CBANC Premium button', function () {
        staticPeerAnalysis.clickLaunchButtonForAd();
        browser.sleep(4000);
    });

    it('Unosenje emaila', function () {
        login.enterEmail();
        browser.sleep(500);
    });

    it('Unosenje lozinke', function () {
        login.enterPass();
        browser.sleep(500);
    });

    it('Logovanje', function () {
        login.submit();
        browser.sleep(4000)
    });

    it('Provera Premium URL-a nakon logovanja', function () {
        staticPeerAnalysis.checkURLAfterCLickOnTheLaunchButtonForAd();
        browser.sleep(1000)
    });

    it('Hover to open user drop menu', function () {
        staticAdvertiseGetStarted.HoverToOpenUserDrop();
        browser.sleep(1000);
    });

    it('Click on Sign out link', function () {
        staticAdvertiseGetStarted.clickOnSignOutLink();
        browser.sleep(3000);
    });


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
