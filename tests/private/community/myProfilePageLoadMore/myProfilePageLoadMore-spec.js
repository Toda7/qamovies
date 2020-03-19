var myProfilePageLoadMore = require('./myProfilePageLoadMore-po.js');

describe('Load More na My Profile strani', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na My Profile stranu', function(){
        myProfilePageLoadMore.landOnMyProfile();
        browser.sleep(2000);
    });

    it('Provera da li se na strani pojavilo 15 diskusija', function(){
        myProfilePageLoadMore.checkIfFifteenDiscussionsOnPage();
        browser.sleep(500);
    });

    it('Klik na Space na tastaturi za Load More na strani', function () {
        var step;
        for (step = 0; step < 7; step++) {
            myProfilePageLoadMore.scrollPage();
            browser.sleep(1000);
        }
    });

    it('Provera da li se na strani pojavilo jos 15 diskusija', function(){
        myProfilePageLoadMore.checkIfThirtyDiscussionsOnPage();
        browser.sleep(2000);
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});
