var docLibraryCheck = require('./docLibraryCheck-po.js');
var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');


describe('Provera document library page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Documents Library page', function () {
        docLibraryCheck.landOnDocsLibraryPage();
    });

    it('Provera page title', function () {
        docLibraryCheck.checkPageTitle();
    });

    it('Provera da li se ucitao breadcrumbs', function () {
        docLibraryCheck.checkBreadcrumbs();
    });

    it('Provera da li se placeholder in search field u headeru', function () {
        docLibraryCheck.checkSearchInHeader();
    });

    it('Klik na search field da dobijemo search stranu', function () {
        docLibraryCheck.clickOnSearchField();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao search URL', function () {
        docLibraryCheck.checkSearchURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao FOR YOU link u side meniju', function () {
        docLibraryCheck.checkForYouInSideMenu();
    });

    it('Klik na For You link ', function () {
        docLibraryCheck.clickOnForYouLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao For You URL', function () {
        docLibraryCheck.checkForYouURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Discover link u side meniju', function () {
        docLibraryCheck.checkDiscoverInSideMenu();
    });

    it('Klik na Discover link', function () {
        docLibraryCheck.clickOnDiscoverLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Discover URL', function () {
        docLibraryCheck.checkDiscoverURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Document Library link u side meniju', function () {
        docLibraryCheck.checkDocumentLibraryInSideMenu();
    });

    //  Kada si na Doc Library page ne mozes da kliknes taj link iz side menija, zato je ovo komentarisano 
    // it('Klik na Document Library link', function(){
    //     docLibraryCheck.clickOnDocumentLibraryLink();
    //     browser.sleep(1000);
    // });

    // it('Provera da li se ucitao Document Library URL', function(){
    //     docLibraryCheck.checkDocumentLibraryURL();
    //     browser.navigate().back();
    //     browser.sleep(1000);
    // });

    it('Provera da li se ucitao Vendor Directory link u side meniju', function () {
        docLibraryCheck.checkVendorDirectoryInSideMenu();
    });

    it('Klik na Vendor Directory link', function () {
        docLibraryCheck.clickOnVendorDirectoryLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Vendor Directory URL', function () {
        docLibraryCheck.checkVendorDirectoryURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Reputation Timeline link u side meniju', function () {
        docLibraryCheck.checkReputationTimelineInSideMenu();
    });

    it('Klik na Reputation Timeline link', function () {
        docLibraryCheck.clickOnReputationTimelineLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Reputation Timeline URL', function () {
        docLibraryCheck.checkReputationTimelineURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klik na Invite Colleagues link', function () {
        docLibraryCheck.clickOnInviteColleagueseLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Invite Colleagues URL', function () {
        docLibraryCheck.checkInviteColleagueseURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Invite Colleagues link u side meniju', function () {
        docLibraryCheck.checkInviteColleaguesInSideMenu();
    });

    it('Provera da li se ucitao My Groups title', function () {
        docLibraryCheck.checkMyGroupsTitle();
    });

    it('Provera da li se ucitala FI grupa', function () {
        docLibraryCheck.checkFIProfessionalsGroup();
    });

    it('Klik na FI Professionals link', function () {
        docLibraryCheck.clickOnFIProfessionalsLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao FI Professionals URL', function () {
        docLibraryCheck.checkFIProfessionalsURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se placeholder in search field', function () {
        docLibraryCheck.checkPlaceholderInSearch();
        browser.sleep(1000);
    });


    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 3; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });
    
    it('Provera da li se START DISCUSSION button ucitao na strani', function () {
        docLibraryCheck.checkStartDiscussionButton();
    });

    it('Klik na START DISCUSSION button', function () {
        docLibraryCheck.clickStartDiscussionButton();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Create Discussion URL', function () {
        docLibraryCheck.checkCreateDiscussionURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se poll header ucitao', function () {
        docLibraryCheck.checkPollHeader();
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        browser.sleep(5000);
    });

    it('Provera da li se poll title ucitao', function () {
        docLibraryCheck.checkPollTitle();
    });

    it('Provera da li se ucitalo prvo pitanje', function () {
        docLibraryCheck.checkFirstQuestion();
    });

    it('Provera da li se prvi radio button u prvom pitanju', function () {
        docLibraryCheck.checkFirstRadioButton();
    });

    it('Provera da li se ucitalo trece pitanje', function () {
        docLibraryCheck.checkThirdQuestion();
    });

    it('Provera da li se ucitalo sesti radio button u trecem pitanju', function () {
        docLibraryCheck.checkRadioButtonInThirdQuestion();
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
