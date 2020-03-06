var docLibraryCheck = require('./docLibraryCheck-po.js');

describe('Provera document library page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na Documents Library page', function(){
        docLibraryCheck.landOnDocsLibraryPage();
    });
    
    it('Provera page title', function(){
        docLibraryCheck.checkPageTitle();
    });

    it('Provera da li se ucitao breadcrumbs', function(){
        docLibraryCheck.checkBreadcrumbs();
    });

    it('Provera da li se ucitao search u headeru', function(){
        docLibraryCheck.checkSearchInHeader();
    });

    it('Provera da li se ucitao FOR YOU link u side meniju', function(){
        docLibraryCheck.checkForYouInSideMenu();
    });

    it('Provera da li se ucitao Discover link u side meniju', function(){
        docLibraryCheck.checkDiscoverInSideMenu();
    });

    it('Provera da li se ucitao Document Library link u side meniju', function(){
        docLibraryCheck.checkDocumentLibraryInSideMenu();
    });

    it('Provera da li se ucitao Vendor Directory link u side meniju', function(){
        docLibraryCheck.checkVendorDirectoryInSideMenu();
    });

    it('Provera da li se ucitao Reputation Timeline link u side meniju', function(){
        docLibraryCheck.checkReputationTimelineInSideMenu();
    });

    it('Provera da li se ucitao Invite Colleagues link u side meniju', function(){
        docLibraryCheck.checkInviteColleaguesInSideMenu();
    });

    it('Provera da li se ucitao My Groups title', function(){
        docLibraryCheck.checkMyGroupsTitle();
    });

    it('Provera da li se ucitala FI grupa', function(){
        docLibraryCheck.checkFIProfessionalsGroup();
    });

    it('Provera da li se placeholder in search field', function(){
        docLibraryCheck.checkPlaceholderInSearch();
    });

    it('Provera da li se START DISCUSSION button ucitao na strani', function(){
        docLibraryCheck.checkStartDiscussionButton();
    });

    it('Provera da li se poll header ucitao', function(){
        docLibraryCheck.checkPollHeader();
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        browser.sleep(5000);
    });

    it('Provera da li se poll title ucitao', function(){
        docLibraryCheck.checkPollTitle();
    });

    it('Provera da li se ucitalo prvo pitanje', function(){
        docLibraryCheck.checkFirstQuestion();
    });

    it('Provera da li se prvi radio button u prvom pitanju', function(){
        docLibraryCheck.checkFirstRadioButton();
    });
    
    it('Provera da li se ucitalo trece pitanje', function(){
        docLibraryCheck.checkThirdQuestion();
    });

    it('Provera da li se ucitalo sesti radio button u trecem pitanju', function(){
        docLibraryCheck.checkRadioButtonInThirdQuestion();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
