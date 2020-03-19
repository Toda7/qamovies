var reputationTimelineLoadMore = require('./reputationTimelineLoadMore-po.js');
var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');


describe('Reputation Timeline load more', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Home stranu', function () {
        reputationTimelineLoadMore.landOnFIProfessionalsHome();
    });

    it('Klik na Reputation Timeline', function () {
        reputationTimelineLoadMore.clickReputationTimeline();
        browser.sleep(3000);
    });

    it('Cekiranje da li imamo 15 logova na strani', function () {
        reputationTimelineLoadMore.count15logs();
        browser.sleep(3000);
    });

    it('Scroll page', function () {
        reputationTimelineLoadMore.scrollPage();
        browser.sleep(1000);
    });

    it('Cekiranje da li imamo 30 logova na strani', function () {
        reputationTimelineLoadMore.count30logs();
        browser.sleep(3000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 2; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });

    it('Cekiranje da li imamo 45 logova na strani', function () {
        reputationTimelineLoadMore.count45logs();
        browser.sleep(1000);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });
});