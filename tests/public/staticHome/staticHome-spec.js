var register = require('../registracija/registracija-po');
var staticHome = require('./staticHome-po');
var staticLendwell = require('../staticLendwell/staticLendwell-po');
var login = require('../login/login-po');


describe('Home page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });
        it('Dolazak na home stranu', function(){
            register.landOnHomePage();
            browser.sleep(5000);
        });

        it('Otvori', function(){
            staticLendwell.openIntercom();
            browser.sleep(5000);
        });

        it('Zatvori', function(){
            staticLendwell.closeIntercom();
            browser.sleep(2000);
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
            browser.sleep(5000);
        });
        
  
        // Chekeri za Header linkove
        it('Provera da li se ucitao Cbanc Logo u headeru', function(){
            staticHome.checkCBlogoInHeader();
        });

        it('Klik na Logo u headeru', function(){
            staticHome.clickOnLogo();
            browser.sleep(2000);
        });

        it('Provera home URL-a nakon klika na logo', function(){
            staticHome.checkHomeURL();
        });

        it('Provera da li su se ucitali Community, Education, More, Vendors linkovi i JOIN i SIGN IN buttni u headeru', function(){
            staticHome.checkLinksInHeader();
            browser.sleep(1000);
        });

        it('Klik na Community u headeru', function(){
            staticHome.clickOnCommunity();
            browser.sleep(3000);
        });

        it('Unosenje emaila u Email polje da bi potvrdili da se ucitala sign in forma', function(){
            login.enterEmail();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Community drop menu', function(){
            staticHome.HoverToOpenCommunityDrop();
            browser.sleep(2000);
        });

        it('Provera submenu sekcije u Comunity drop downu', function(){
            staticHome.checkSubmenuSectionFromCommunityDrop();
        });

        it('Klik na Document link iz Community drop down menu', function(){
            staticHome.clickOnDocumentLink();
            browser.sleep(2000);
        });

        it('Provera document URL-a nakon klika na Documents link ', function(){
            staticHome.checkDocumentsURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Community drop menu', function(){
            staticHome.HoverToOpenCommunityDrop();
            browser.sleep(2000);
        });


        it('Klik na Topics link iz Community drop down menu', function(){
            staticHome.clickOnTopicsLink();
            browser.sleep(2000);
        });

        it('Provera Topics URL-a nakon klika na topics link ', function(){
            staticHome.checkTopicssURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Community drop menu', function(){
            staticHome.HoverToOpenCommunityDrop();
            browser.sleep(2000);
        });

        it('Klik na Questions link iz Community drop down menu', function(){
            staticHome.clickOnQuestionsLink();
            browser.sleep(2000);
        });

        it('Provera Questions URL-a nakon klika na questions link ', function(){
            staticHome.checkQuestionsURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na Education link u headeru', function(){
            staticHome.clickOnEducationLink();
            browser.sleep(2000);
        });

        it('Provera Education URL-a nakon klika na Education link ', function(){
            staticHome.checkEducationURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Education drop menu', function(){
            staticHome.HoverToOpenEducationDrop();
            browser.sleep(2000);
        });

        it('Provera submenu sekcije u Education drop downu', function(){
            staticHome.checkSubmenuSectionFromEducationyDrop();
            browser.sleep(2000);
        });

        it('Klik na Training link iz Education drop down menu', function(){
            staticHome.clickOnTrainingLink();
            browser.sleep(10000);
        });

        it('Provera Titla na Sign in strani', function(){
            staticHome.checkTitleInSignInForm();
        });

        it('Unosenje email u Email polje da bi potvrdili da smo dobili Sign in formu nakon klika na Training link', function(){
            login.enterEmail();
            browser.sleep(1000);
        });

        it('Dolazak na home stranu jer ne radi dobro BACK sa Training strane', function(){
            register.landOnHomePage();
            browser.sleep(4000);
        });

        it('Hover to open Education drop menu', function(){
            staticHome.HoverToOpenEducationDrop();
            browser.sleep(2000);
        });

        it('Klik na Upcoming Webinars link iz Education drop down menu', function(){
            staticHome.clickOnUpcomingLink();
            browser.sleep(2000);
        });

        it('Provera Upcoming URL-a nakon klika na Upcoming Webinars link ', function(){
            staticHome.checkUpcomingURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Education drop menu', function(){
            staticHome.HoverToOpenEducationDrop();
            browser.sleep(2000);
        });

        it('Klik na Bundles link iz Education drop down menu', function(){
            staticHome.clickOnBundlesLink();
            browser.sleep(2000);
        });

        it('Provera Bundles URL-a nakon klika na Bundles link', function(){
            staticHome.checkBundlesURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Education drop menu', function(){
            staticHome.HoverToOpenEducationDrop();
            browser.sleep(2000);
        });

        it('Klik na OnDemand link iz Education drop down menu', function(){
            staticHome.clickOnOnDemandLink();
            browser.sleep(2000);
        });

        it('Provera OnDemand URL-a nakon klika na On Demand link', function(){
            staticHome.checkOnDemandURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Education drop menu', function(){
            staticHome.HoverToOpenEducationDrop();
            browser.sleep(2000);
        });

        it('Klik na All Access link iz Education drop down menu', function(){
            staticHome.clickOnAllAccessLink();
            browser.sleep(2000);
        });

        it('Provera All Access URL-a nakon klika na All Access link', function(){
            staticHome.checkAllAccessURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open Education drop menu', function(){
            staticHome.HoverToOpenEducationDrop();
            browser.sleep(2000);
        });

        it('Klik na Orders link iz Education drop down menu', function(){
            staticHome.clickOnOrdersLink();
            browser.sleep(2000);
        });

        it('Provera Orders URL-a nakon klika na Orders link ', function(){
            staticHome.checkOrdersURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na More link u headeru', function(){
            staticHome.clickOnMoreLink();
            browser.sleep(2000);
        });

        it('Provera More URL-a nakon klika na More link u headeru', function(){
            staticHome.checkMoreURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(3000);
        });

        it('Hover to open More drop menu', function(){
            staticHome.HoverToOpenMoreDrop();
            browser.sleep(2000);
        });

       it('Provera submenu sekcije u More drop downu', function(){
            staticHome.checkSubmenuSectionFromMoreyDrop();
        });

        it('Klik na vendor management link iz Education drop down menu', function(){
            staticHome.clickOnVendorManagementLink();
            browser.sleep(2000);
        });

        it('Provera vendor management URL-a nakon klika na vendor management link', function(){
            staticHome.checkVendorManagementURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open More drop menu', function(){
            staticHome.HoverToOpenMoreDrop();
            browser.sleep(2000);
        });

        it('Klik na Risk Assessment link iz Education drop down menu', function(){
            staticHome.clickOnRiskAssessmentLink();
            browser.sleep(2000);
        });

        it('Provera Risk Assessment URL-a nakon klika na Risk Assessment link', function(){
            staticHome.checkRiskAssessmentURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open More drop menu', function(){
            staticHome.HoverToOpenMoreDrop();
            browser.sleep(2000);
        });

        it('Klik na Peer Analysis link iz Education drop down menu', function(){
            staticHome.clickOnPeerAnalysisLink();
            browser.sleep(2000);
        });

        it('Provera Peer Analysis URL-a nakon klika na Peer Analysis link', function(){
            staticHome.checkPeerAnalysisURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Hover to open More drop menu', function(){
            staticHome.HoverToOpenMoreDrop();
            browser.sleep(2000);
        });

        it('Klik na Lendwell link iz Education drop down menu', function(){
            staticHome.clickOnLendwellLink();
            browser.sleep(2000);
        });

        it('Provera Lendwell URL-a nakon klika na Lendwell link', function(){
            staticHome.checkLendwellURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na Vendor link u headeru', function(){
            staticHome.clickOnVendorLink();
            browser.sleep(2000);
        });

        it('Provera Vendor URL-a nakon klika na Vendor link', function(){
            staticHome.checkVendorURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na Sign In button u headeru', function(){
            staticHome.clickOnSignInButton();
            browser.sleep(2000);
        });

        it('Unosenje email u Email polje da bi potvrdili da smo dobili Sign in formu nakon klika na Sign in button', function(){
            login.enterEmail();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na Join button u headeru', function(){
            staticHome.clickOnJoinButton();
            browser.sleep(2000);
        });

        it('Provera Join URL-a nakon klika na Join button', function(){
            staticHome.checkJoinURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });
 
        // chekeri za footer 

        it('Provera footer sekcije', function(){
            staticHome.checkFooter();
            browser.sleep(2000);
        });

        it('Klik na About link u footeru', function(){
            staticHome.clickOnAboutLink();
            browser.sleep(2000);
        });

        it('Provera About URL-a nakon klika na About link', function(){
            staticHome.checkAboutURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na FAQ link u footeru', function(){
            staticHome.clickOnFAQLink();
            browser.sleep(2000);
            browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            });
        });

        it('Provera FAQ URL-a nakon klika na FAQ link ', function(){
            staticHome.checkFAQURL();
            browser.sleep(1000);
            browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
            });
        });

        it('Klik na Contact link u footeru', function(){
            staticHome.clickOnContactLink();
            browser.sleep(2000);
        });

        it('Provera Contact URL-a nakon klika na Contact link', function(){
            staticHome.checkContactURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });
        
        it('Klik na Vendors link u footeru', function(){
            staticHome.clickOnVendorstLink();
            browser.sleep(2000);
        });

        it('Provera Vendors URL-a nakon klika na Vendors link ', function(){
            staticHome.checkVendorstURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na Careers link u footeru', function(){
            staticHome.clickOnCareersLink();
            browser.sleep(2000);
        });

        it('Provera Careers URL-a nakon klika na Careers link ', function(){
            staticHome.checkCareersURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na Blog link u footeru', function(){
            staticHome.clickOnBlogLink();
            browser.sleep(2000);
        });

        it('Provera Blog URL-a nakon klika na Blog link ', function(){
            staticHome.checkBlogURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it('Klik na Privacy Policy link u footeru', function(){
            staticHome.clickOnPrivacyPolicyLink();
            browser.sleep(2000);
        });

        it('Provera Privacy Policy URL-a nakon klika na Privacy Policy link ', function(){
            staticHome.checkPrivacyPolicyURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });
        
        it('Klik na Terms of Service link u footeru', function(){
            staticHome.clickOnTermsofServiceLink();
            browser.sleep(2000);
        });

        it('Provera Terms of Service URL-a nakon klika na Terms of Service link ', function(){
            staticHome.checkTermsofServiceURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

        it(' Klik na Code of Conduct link u footeru', function(){
            staticHome.clickOnCodeOfConductLink();
            browser.sleep(2000);
        });

        it('Provera Code of Conduct URL-a nakon klika na Code of Conduct link', function(){
            staticHome.checkCodeOfConductURL();
            browser.sleep(1000);
            browser.navigate().back();
            browser.sleep(2000);
        });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});