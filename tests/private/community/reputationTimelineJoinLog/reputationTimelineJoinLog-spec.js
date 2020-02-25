var reputationTimelineJoinLog = require('./reputationTimelineJoinLog-po.js');

describe('Reputation Timeline cekiranje Join loga', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Home stranu', function () {
        reputationTimelineJoinLog.landOnHomePage();
    });

    it('Klik na user menu', function(){
        reputationTimelineJoinLog.clickOnUserMenu();
    });

    it('Klik na Sign out', function(){
        reputationTimelineJoinLog.clickOnSignOut();
    });

    it('Klik na Sign in', function () {
        reputationTimelineJoinLog.clickOnSignIn();
        browser.sleep(3000);
    });

    it('Unos emaila', function () {
        reputationTimelineJoinLog.enterEmail();
    });

    it('Unos passworda', function () {
        reputationTimelineJoinLog.enterPass();
    });

    it('Submit', function () {
        reputationTimelineJoinLog.submit();
    });

    it('Idi na reputationtime line', function () {
        reputationTimelineJoinLog.landOnReputationPage();
    });

    it('Cekiranje Join Loga', function () {
        reputationTimelineJoinLog.checkJoinLog();
    });

    it('Cekiranje Increse score poruke', function () {
        reputationTimelineJoinLog.checkIncreseScoreMsg();
    });


});