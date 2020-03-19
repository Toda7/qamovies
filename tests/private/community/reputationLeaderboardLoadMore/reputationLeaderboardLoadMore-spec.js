var reputationLeaderboardLoadMore = require('./reputationLeaderboardLoadMore-po.js');
var reputationTimelinePage = require('../reputationTimelinePage/reputationTimelinePage-po.js');
var reputationTimelineJoinLogNewUser = require('../reputationTimelineJoinLogNewUser/reputationTimelineJoinLogNewUser-po.js');
var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');

describe('Reputation Leaderborad load more', function () {

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

    it('Cekira da li se ucitalo 15 usera na listi', function () {
        reputationLeaderboardLoadMore.count15People();
        browser.sleep(2000);
    });

    it('Scroll da se ucita jos 15 usera', function () {
        reputationLeaderboardLoadMore.scrollPage();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitalo 30 usera na listi', function () {
        reputationLeaderboardLoadMore.count30People();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 2; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });

    it('Cekira da li se ucitalo 45 usera na listi', function () {
        reputationLeaderboardLoadMore.count45People();
        browser.sleep(2000);
    });



    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });

});