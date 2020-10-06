var register = require('../registracija/registracija-po');
var staticLendwell = require('../staticLendwell/staticLendwell-po');
var staticPeerAnalysis = require('./staticPeerAnalysis-po');
var staticAdvertiseGetStarted = require('../staticAdvertiseGetStarted/staticAdvertiseGetStarted-po');
var login = require('../login/login-po');


describe('Peer analysis strana', function(){

beforeAll(function(){
    browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
}); 
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
        browser.sleep(4000);
    });

    it('Hover to open on drop menu', function(){
        staticLendwell.HoverToOpenDrop();
        browser.sleep(2000);
    });  

    it('Klik na PA link iz drop menu', function(){
        staticPeerAnalysis.clickOnLink();
        browser.sleep(4000);
    });  

    it('Provera PA URL-a', function(){
        staticPeerAnalysis.checkPaUrl();
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
        staticPeerAnalysis.checkRAPageTitle();
    });  

    it("Provera title, description i LAUNCH PEER ANALYSIS TOOL buttna na strani", function(){
        staticPeerAnalysis.checkFirstSectionOnPage();
        browser.sleep(1000);
    });  

    it("Provera Create custom reports in seconds sekcije na strani", function(){
        staticPeerAnalysis.CheckCreateCustomReportsInSeconds();
        browser.sleep(1000);
    });  

    it("Provera da li se ucitala slika u Create custom reports in seconds sekciji", function(){
        staticPeerAnalysis.CheckCreateCustomReportsInSecondsImage();
    });  

    it("Provera Choose your own peer groups sekcije na strani ", function(){
        staticPeerAnalysis.CheckChooseYourOwnPeerGroups();
        browser.sleep(1000);
    });  

    it("Provera da li se ucitala slika u Choose your own peer groups sekciji", function(){
        staticPeerAnalysis.CheckChooseYourOwnPeerGroupsImage();
    });  

    it("Provera View data trends over time sekcije na strani", function(){
        staticPeerAnalysis.CheckViewDataTrendsOverTimeGroups();
        browser.sleep(1000);
    });  

    it("Provera da li se ucitala slika u View data trends over time sekciji", function(){
        staticPeerAnalysis.CheckViewDataTrendsOverTimeGroupsImage();
    });  

    it("Provera Download and share with your team sekcije na strani ", function(){
        staticPeerAnalysis.CheckDownloadAndShareWithYourTeam();
        browser.sleep(1000);
    });  

    it("Provera da li se ucitala slika u Download and share with your team sekciji", function(){
        staticPeerAnalysis.CheckDownloadAndShareWithYourTeamImage();
    });  

    it("Provera sekcije iznad premium reklame", function(){
        staticPeerAnalysis.CheckBottomSection();
        browser.sleep(1000);
    });  

    it("Provera sekcije Premium reklama", function(){
        staticPeerAnalysis.CheckPremiumAd();
    });  

    it('Klik na LAUNCH PEER ANALYSIS TOOL button', function(){
        staticPeerAnalysis.clickOnLaunchPeerAnalysisToolButton();
        browser.sleep(4000);
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

    it('Provera peer analysis URL-a nakon logovanja', function(){
        staticPeerAnalysis.checkURLAfterCLickOnTheLaunchButton();
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

    it('Dolazak na peer analysis public stranu', function(){
        staticPeerAnalysis.landPublicPAPage();
        browser.sleep(4000);
    });

    it('Klik na GET STARTED button', function(){
        staticPeerAnalysis.clickOnGetStartedButton();
        browser.sleep(4000);
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

    it('Provera peer analysis URL-a nakon logovanja', function(){
        staticPeerAnalysis.checkURLAfterCLickOnTheLaunchButton();
        browser.sleep(4000);
    });

    it('Hover to open user drop menu', function(){
        staticAdvertiseGetStarted.HoverToOpenUserDrop();
        browser.sleep(1000);
    }); 

    it('Click on Sign out link', function(){
        staticAdvertiseGetStarted.clickOnSignOutLink();
        browser.sleep(3000);
    }); 

    it('Dolazak na peer analysis public stranu', function(){
        staticPeerAnalysis.landPublicPAPage();
        browser.sleep(4000);
    });

    it('Klik na Learn More About CBANC Premium button', function(){
        staticPeerAnalysis.clickLaunchButtonForAd();
        browser.sleep(4000);
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
    
    it('Provera Premium URL-a nakon logovanja', function(){
        staticPeerAnalysis.checkURLAfterCLickOnTheLaunchButtonForAd();
        browser.sleep(1000)
    });

    it('Hover to open user drop menu', function(){
        staticAdvertiseGetStarted.HoverToOpenUserDrop();
        browser.sleep(1000);
    }); 

    it('Click on Sign out link', function(){
        staticAdvertiseGetStarted.clickOnSignOutLink();
        browser.sleep(3000);
    }); 
    
    
    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
