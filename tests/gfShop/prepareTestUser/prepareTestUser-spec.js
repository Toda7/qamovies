var PrepareTestUser = require('./PrepareTestUser-po.js');

describe('Prepare Test User', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 

    it('Dolazak na home page', function(){
        PrepareTestUser.LandOnHomePage();
    });

    it('Klik on Sign In button', function(){
        PrepareTestUser.clickOnSignIn();
    });

        afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});