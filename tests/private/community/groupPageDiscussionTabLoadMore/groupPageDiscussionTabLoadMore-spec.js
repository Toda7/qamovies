var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');
var groupPageDiscussionTabLoadMore = require('./groupPageDiscussionTabLoadMore-po.js');

describe('Load more na Discussion tabu na Group page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitalo 15 diskusija na listi', function () {
        groupPageDiscussionTabLoadMore.count15Discussions();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 8; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });

    it('Cekira da li se ucitalo 30 diskusija na listi', function () {
        groupPageDiscussionTabLoadMore.count30Discussions();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 8; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });

    it('Cekira da li se ucitalo 45 diskusija na listi', function () {
        groupPageDiscussionTabLoadMore.count45Discussions();
        browser.sleep(2000);
    });



    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });

});