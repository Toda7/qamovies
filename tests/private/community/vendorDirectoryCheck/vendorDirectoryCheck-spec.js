var vendorDirectoryCheck = require('./vendorDirectoryCheck-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Provera vendor directory page', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na vendor directory page', function(){
        vendorDirectoryCheck.landOnVendorDirectoryPage();
        browser.sleep(3000);
    });

    it('Provera page title', function(){
        vendorDirectoryCheck.checkPageTitle();
    });

    it('Provera da li se ucitao breadcrumbs', function(){
        vendorDirectoryCheck.checkBreadcrumbs();
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
        vendorDirectoryCheck.checkPlaceholderInSearch();
    });

    it('Provera da li se START DISCUSSION button ucitao na strani', function(){
        docLibraryCheck.checkStartDiscussionButton();
    });

    it('Provera da li se Featured title ucitao', function(){
        vendorDirectoryCheck.checkFeaturedTitleOnPage();
    });

    it('Provera prvog vendora u featured sekciji', function(){
        vendorDirectoryCheck.checkFirstVendorInFeaturedSection();
    });

    it('Provera drugog vendora u featured sekciji', function(){
        vendorDirectoryCheck.checkSecondVendorInFeaturedSection();
    });

    it('Provera treceg vendora u featured sekciji', function(){
        vendorDirectoryCheck.checkThirdVendorInFeaturedSection();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
