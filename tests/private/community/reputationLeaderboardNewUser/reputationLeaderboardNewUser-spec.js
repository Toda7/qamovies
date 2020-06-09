var reputationLeaderboardNewUser = require('./reputationLeaderboardNewUser-po.js');
var reputationTimelinePage = require('../reputationTimelinePage/reputationTimelinePage-po.js');
var reputationTimelineJoinLogNewUser = require('../reputationTimelineJoinLogNewUser/reputationTimelineJoinLogNewUser-po.js');
var reputationTimelineThankLogs = require('../reputationTimelineThankLogs/reputationTimelineThankLogs-po.js');

describe('Provera Reputation Leaderborad strane za novog usera', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Dashboard stranu', function () {
        reputationTimelineJoinLogNewUser.landOnHomePage();
    });

    it('Klik na user menu', function () {
        reputationTimelineJoinLogNewUser.clickOnUserMenu();
    });

    it('Klik na Sign out', function () {
        reputationTimelineJoinLogNewUser.clickOnSignOut();
        browser.sleep(2000);
    });

    it('Klik na Sign in', function () {
        reputationTimelineJoinLogNewUser.clickOnSignIn();
        browser.sleep(4000);
    });

    it('Unos emaila', function () {
        reputationTimelineJoinLogNewUser.enterEmail();
    });

    it('Unos passworda', function () {
        reputationTimelineJoinLogNewUser.enterPass();
    });

    it('Submit', function () {
        reputationTimelineJoinLogNewUser.submit();
        browser.sleep(3000);
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

    it('Cekira da li se ucitao Your Reputation section', function () {
        reputationLeaderboardNewUser.checkYourReputationSection();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Want to earn more rep title', function () {
        reputationLeaderboardNewUser.checkWantToEarnMoreRepTitle();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitao Want to earn more rep text', function () {
        reputationLeaderboardNewUser.checkWantToEarnMoreRepText();
        browser.sleep(2000);
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(2000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
        browser.sleep(4000);
    });

    it('Unos emaila', function () {
        reputationTimelineThankLogs.enterEmail2();
    });

    it('Unos passworda', function () {
        reputationTimelineThankLogs.enterPass2();
    });

    it('Submit', function () {
        reputationTimelineThankLogs.submit();
        browser.sleep(2000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });

});
