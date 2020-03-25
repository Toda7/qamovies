var groupEditMembersTabLoadMore = require('./groupEditMembersTabLoadMore-po.js');
var loadMoreOnDocLibPage = require('../loadMoreOnDocLibPage/loadMoreOnDocLibPage-po.js');
var groupEdit = require('../groupEdit/groupEdit-po.js');

describe('Load more na Members tabu na Edit Group page', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak stranu AFT grupe ', function () {
        groupEdit.landOnGroupPage();
        browser.sleep(2000);
    });

    it('Click na MANAGE GROUP', function () {
        groupEdit.clickManageGroup();
        browser.sleep(2000);
    });

    it('Click na Members tab', function () {
        groupEditMembersTabLoadMore.clickOnMembersTab();
        browser.sleep(2000);
    });

    it('Cekira da li se ucitalo 15 usera na listi', function () {
        groupEditMembersTabLoadMore.count15People();
        browser.sleep(2000);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 2; step++) {
            loadMoreOnDocLibPage.scrollDown();
            browser.sleep(1000);
        }
    });

    it('Cekira da li se ucitalo 30 usera na listi', function () {
        groupEditMembersTabLoadMore.count30People();
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
        groupEditMembersTabLoadMore.count45People();
        browser.sleep(2000);
    });



    afterAll(function () {
        browser.waitForAngularEnabled(true);
    });

});