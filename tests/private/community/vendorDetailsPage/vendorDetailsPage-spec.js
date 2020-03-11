var vendorDetailsPage = require('./vendorDetailsPage-po.js');
var vendorDirectoryCheck = require('../vendorDirectoryCheck/vendorDirectoryCheck-po.js');
var searchOnVendorDirectoryPage = require('../searchOnVendorDirectoryPage/searchOnVendorDirectoryPage-po.js');
var followUnfollowVendor = require('../followUnfollowVendor/followUnfollowVendor-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');

describe('Vendor details page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na vendor directory page', function () {
        vendorDirectoryCheck.landOnVendorDirectoryPage();
    });

    it('Unosenje texta u search polje', function () {
        searchOnVendorDirectoryPage.enterearchWord();
        browser.sleep(5000);
    });

    it('Klik na vendor name', function () {
        followUnfollowVendor.clickOnVendorName();
        browser.sleep(5000);
    });

    it('Provera da li je dobar vendor avatar', function () {
        vendorDetailsPage.checkVendorAvatarImage();
        browser.sleep(2000);
    });

    it('Provera Vendor name, Urla, follow and Contact buttona na details page', function () {
        vendorDetailsPage.checkDetailsPage();
        browser.sleep(2000);
    });

    it('Klik na link ispod vendorovog imena', function () {
        vendorDetailsPage.clickOnVendorURLLink();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao vendor link URL', function () {
        vendorDetailsPage.checkVendorLinkURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li je dobar AFT logo na vendor details page', function () {
        vendorDetailsPage.checkAFTLogo();
        browser.sleep(1000);
    });

    it('Klik on AFT link', function () {
        vendorDetailsPage.clickOnAFTLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao AFT link URL', function () {
        vendorDetailsPage.checkAFTURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Provera da li se na strani nalazi Overview link', function () {
        vendorDetailsPage.checkOverviewLink();
    });

    it('Provera da li se na strani nalazi Products link', function () {
        vendorDetailsPage.checkProductsLink();
    });

    it('Provera da li se na strani nalazi Employees link', function () {
        vendorDetailsPage.checkEmployeesLink();
    });

    it('Provera da li se na strani nalazi About link', function () {
        vendorDetailsPage.checkAboutTitle();
    });

    it('Klik on More link', function () {
        vendorDetailsPage.clickOnMore();
        browser.sleep(2000);
    });

    it('Proveravanje more sekcije', function () {
        vendorDetailsPage.checkMoreDetails();
    });

    it('Provera da li se na strani nalazi 15 diskusija', function () {
        vendorDetailsPage.count15dics();
    });

    // cekeri za side menu i search u headeru
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

    it('Provera da li je dobar default avatar in header', function () {
        docLibraryCheck.checkUserAvatarInHeader();
    });

    it('Klik na user avatar da otvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
    });

    it('Provera da li se ucitao Inbox link u user meniju', function () {
        docLibraryCheck.checkInboxInUserMenu();
    });

    it('Klik na Inbox link', function () {
        docLibraryCheck.clickOnInboxLink();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    });

    it('Provera da li se ucitao Inbox URL', function () {
        docLibraryCheck.checkInboxURL();
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });
        browser.sleep(2000);
    });

    it('Klik na user avatar da otvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
    });

    it('Provera da li se ucitao My Profile link u user meniju', function () {
        docLibraryCheck.checkMyProfileInUserMenu();
    });

    it('Klik na My Profile link', function () {
        docLibraryCheck.clickOnMyProfileLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao My Profile URL', function () {
        docLibraryCheck.checkMyProfileURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klik na user avatar da otvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
    });

    it('Provera da li se ucitao Org link u user meniju', function () {
        docLibraryCheck.checkOrgLinkInUserMenu();
    });

    it('Klik na My org link', function () {
        docLibraryCheck.clickOnMyOrgLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao org URL', function () {
        docLibraryCheck.checkMyOrgURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klik na user avatar da otvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
    });

    it('Provera da li se ucitao Account Settings link u user meniju', function () {
        docLibraryCheck.checkAccountSettingsInUserMenu();
    });

    it('Klik na Account Settings link', function () {
        docLibraryCheck.clickOnAccountSettingsLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Account Settings URL', function () {
        docLibraryCheck.checkAccountSettingsURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klik na user avatar da otvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
    });

    it('Provera da li se ucitao sign out link u user meniju', function () {
        docLibraryCheck.checkSignOutUserMenu();
    });

    it('Klik na user avatar da zatvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
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

    it('Klik na Document Library link', function () {
        docLibraryCheck.clickOnDocumentLibraryLink();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Document Library URL', function () {
        docLibraryCheck.checkDocumentLibraryURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

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
    // ovde se zavrsavaju cekeri za side menu i search u headeru

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});
