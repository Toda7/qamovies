var reputationLeaderboardLoadMore = require('../reputationLeaderboardLoadMore/reputationLeaderboardLoadMore-po.js');
var reputationTimelinePage = require('../reputationTimelinePage/reputationTimelinePage-po.js');
var reputationTimelineJoinLogNewUser = require('../reputationTimelineJoinLogNewUser/reputationTimelineJoinLogNewUser-po.js');
var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');
var reputationLeaderboardPage = require('./reputationLeaderboardPage-po.js');
var docLibraryCheck = require('../docLibraryCheck/docLibraryCheck-po.js');
var reputationLeaderboardNewUser = require('../reputationLeaderboardNewUser/reputationLeaderboardNewUser-po.js');

describe('Reputation Leaderborad Page link i text', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Dashboard stranu', function () {
        reputationTimelineJoinLogNewUser.landOnHomePage();
    });

    it('Idi na Reputation timeline stranu', function () {
        reputationTimelineJoinLogNewUser.landOnReputationPage();
        browser.sleep(2000);
    });

    it('Klik na Visit the Leaderborad link', function () {
        reputationTimelinePage.clickVisitTheLeaderboradLink();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Reputation Leaderboard title', function () {
        reputationLeaderboardNewUser.checkReputationLeaderboardTitle();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Reputation Leaderboard text1', function () {
        reputationLeaderboardNewUser.checkReputationLeaderboardText1();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Reputation Leaderboard text2', function () {
        reputationLeaderboardNewUser.checkReputationLeaderboardText2();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao "Your Reputation" section', function () {
        reputationLeaderboardPage.checkYourReputationSection();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Want To Earcn More Rep? title', function () {
        reputationLeaderboardNewUser.checkWantToEarnMoreRepTitle();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Want To Earcn More Rep? text', function () {
        reputationLeaderboardNewUser.checkWantToEarnMoreRepText();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Rank', function () {
        reputationLeaderboardPage.checkRank();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Members', function () {
        reputationLeaderboardPage.checkRank();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Score', function () {
        reputationLeaderboardPage.checkRank();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitalo 15 usera na listi', function () {
        reputationLeaderboardLoadMore.count15People();
        browser.sleep(2000);
    });

    // cekeri za side menu i search u headeru
    it('Provera da li se placeholder in search field u headeru', function () {
        docLibraryCheck.checkSearchInHeader();
        browser.sleep(1000);
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
        browser.sleep(1000);
    });

    it('Klik na user avatar da otvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Inbox link u user meniju', function () {
        docLibraryCheck.checkInboxInUserMenu();
        browser.sleep(1000);
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
        browser.sleep(1000);
    });

    it('Provera da li se ucitao My Profile link u user meniju', function () {
        docLibraryCheck.checkMyProfileInUserMenu();
        browser.sleep(1000);
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
        browser.sleep(1000);
    });

    it('Provera da li se ucitao Org link u user meniju', function () {
        docLibraryCheck.checkOrgLinkInUserMenu();
        browser.sleep(1000);
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
        browser.sleep(2000);
    });

    it('Provera da li se ucitao Account Settings link u user meniju', function () {
        docLibraryCheck.checkAccountSettingsInUserMenu();
        browser.sleep(1000);
    });

    it('Klik na Account Settings link', function () {
        docLibraryCheck.clickOnAccountSettingsLink();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao Account Settings URL', function () {
        docLibraryCheck.checkAccountSettingsURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Klik na user avatar da otvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
        browser.sleep(2000);
    });

    it('Provera da li se ucitao sign out link u user meniju', function () {
        docLibraryCheck.checkSignOutUserMenu();
        browser.sleep(1000);
    });

    it('Klik na user avatar da zatvorimo user menu', function () {
        docLibraryCheck.clickOnUserAvatarToOpenDropMenu();
        browser.sleep(1000);
    });

    it('Provera da li se ucitao FOR YOU link u side meniju', function () {
        docLibraryCheck.checkForYouInSideMenu();
        browser.sleep(1000);
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
        browser.sleep(1000);
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
        browser.sleep(1000);
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
        browser.sleep(1000);
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
    // ovde se zavrsavaju cekeri za side menu i search u headeru


    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });

});
