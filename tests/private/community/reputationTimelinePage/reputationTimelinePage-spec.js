var reputationTimelinePage = require('./reputationTimelinePage-po.js');
var myProfilePage = require('../myProfilePage/myProfilePage-po.js');

describe('Cekiranje Reputation Timeline strane', function () {
     
    beforeAll(function () {
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Home stranu', function () {
        reputationTimelinePage.landOnFIProfessionalsHome();
    });

    it('Klik na Reputation Timeline', function(){
        reputationTimelinePage.clickReputationTimeline();
        browser.sleep(3000);
    });

    it('Cekiranje Reputation Score title', function(){
        reputationTimelinePage.repScoreTextTitle();
        browser.sleep(1000);
    });

     it('Cekiranje Reputation Score texta 1', function(){
        reputationTimelinePage.repScoreText1();
        browser.sleep(1000);
    });

    it('Cekiranje Reputation Score texta 2', function(){
        reputationTimelinePage.repScoreText2();
        browser.sleep(1000);
    });

    it('Cekiranje Reputation Score texta 3', function(){
        reputationTimelinePage.repScoreText3();
        browser.sleep(1000);
    });

    it('Cekiranje Where do you rank? title', function(){
        reputationTimelinePage.whereDoYouRankTitle();
        browser.sleep(1000);
    });

    it('Cekiranje Where do you rank? Linka', function(){
        reputationTimelinePage.whereDoYouRankLink();
        browser.sleep(1000);
    });

    it('Klik na Visit the Leaderborad link', function(){
        reputationTimelinePage.clickVisitTheLeaderboradLink();
        browser.sleep(1000);
    });

    it('Cekiranje URL za Reputation Leaderboard i vracanje na Timeline stranu', function(){
        reputationTimelinePage.checkReputationLeaderboardURL();
        browser.navigate().back();
        browser.sleep(1000);
    });

    it('Cekiranje da li imamo 15 logova na strani', function(){
        reputationTimelinePage.count15logs();
        browser.sleep(3000);
    });

    it('Scroll page', function(){
        reputationTimelinePage.scrollPage();
        browser.sleep(1000);
    });

    it('Cekiranje da li imamo 30 logova na strani', function(){
        reputationTimelinePage.count30logs();
        browser.sleep(3000);
    });

    // it('Klik na Space na tastaturi za Load More na strani', function () {
    //     var step;
    //     for (step = 0; step < 2; step++) {
    //         myProfilePage.scrollPage();
    //         browser.sleep(1000);
    //     }
    // });

    // it('Scroll page', function(){
    //     reputationTimelinePage.scrollPage();
    //     browser.sleep(1000);
    // });

    // it('Scroll page', function(){
    //     reputationTimelinePage.scrollPage();
    //     browser.sleep(1000);
    // });

    it('Cekiranje da li imamo 45 logova na strani', function(){
        reputationTimelinePage.count45logs();
        browser.sleep(1000);
    });



});