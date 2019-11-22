var reputationSystemAndLeaderboard = require('./reputationSystemAndLeaderboard-po.js');

describe('Reputation System and Leaderboard', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Home stranu', function(){
        reputationSystemAndLeaderboard.landOnHome();
    });

    it('Klik na Reoutation Timeline link', function(){
        reputationSystemAndLeaderboard.clickReputationTimeline();
    });

    it('Klik na LeaderboardLink link', function(){
        reputationSystemAndLeaderboard.clickLeaderboardLink();
        browser.getAllWindowHandles().then(function (handles) {
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
        })
    });

    // it('Dolazak na Doc Library stranu', function(){
    //     searchDoc.landOnDocLibrary();
    // });

    // it('Klikni na Search Doc polje', function(){
    //     searchDoc.clickOnSearchDocField();
    // });

    // it('Unesi text u search polje', function(){
    //     searchDoc.enterSearchWord();
    // });

    // it('Provera Searcha', function(){
    //     searchDoc.checkSuccess();
    //     browser.getAllWindowHandles().then(function (handles) {
    //     browser.driver.switchTo().window(handles[1]);
    //     browser.driver.close();
    //     browser.driver.switchTo().window(handles[0]);
    //     });
    // });


    // it('Klik na User Menu', function(){
    //     searchDoc.clickAvatarMenu();
    // });

    // it('Klik na Sign Out', function(){
    //     searchDoc.signOut();
    // });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});