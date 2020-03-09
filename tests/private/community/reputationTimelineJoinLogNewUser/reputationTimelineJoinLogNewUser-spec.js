var reputationTimelineJoinLogNewUser = require('./reputationTimelineJoinLogNewUser-po.js');
var reputationTimelineThankLogs = require('../reputationTimelineThankLogs/reputationTimelineThankLogs-po.js');

describe('Reputation Timeline cekiranje Join loga za novog usera', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Home stranu', function () {
        reputationTimelineJoinLogNewUser.landOnHomePage();
    });

    it('Klik na user menu', function(){
        reputationTimelineJoinLogNewUser.clickOnUserMenu();
    });

    it('Klik na Sign out', function(){
        reputationTimelineJoinLogNewUser.clickOnSignOut();
    });

    it('Klik na Sign in', function () {
        reputationTimelineJoinLogNewUser.clickOnSignIn();
        browser.sleep(3000);
    });

    it('Unos emaila', function () {
        reputationTimelineJoinLogNewUser.enterEmail();
    });

    it('Unos passworda', function () {
        reputationTimelineJoinLogNewUser.enterPass();
    });

    it('Submit', function () {
        reputationTimelineJoinLogNewUser.submit();
    });

    it('Idi na reputationtime line', function () {
        reputationTimelineJoinLogNewUser.landOnReputationPage();
    });

    it('Cekiranje Join Loga', function () {
        reputationTimelineJoinLogNewUser.checkJoinLog();
    });

    it('Cekiranje Increse score poruke', function () {
        reputationTimelineJoinLogNewUser.checkIncreseScoreMsg();
    });

    it('Klik na user menu', function () {
        reputationTimelineThankLogs.clickOnUserMenu2();
        browser.sleep(2000);
    });

    it('Klik na Sign out', function () {
        reputationTimelineThankLogs.clickOnSignOut2();
        browser.sleep(3000);
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


});