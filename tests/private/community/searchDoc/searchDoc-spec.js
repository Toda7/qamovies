var searchDoc = require('./searchDoc-po.js');

describe('Document search', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    });

    it('Dolazak na Home stranu', function(){
        searchDoc.landOnHome();
    });

    it('Dolazak na Doc Library stranu', function(){
        searchDoc.landOnDocLibrary();
    });

    it('Klikni na Search Doc polje', function(){
        searchDoc.clickOnSearchDocField();
    });

    it('Unesi text u search polje', function(){
        searchDoc.enterSearchWord();
    });

    it('Provera Searcha', function(){
        searchDoc.checkSuccess();
    });


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