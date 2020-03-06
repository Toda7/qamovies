var reputationTimelinePage = require('./reputationTimelinePage-po.js');

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

});