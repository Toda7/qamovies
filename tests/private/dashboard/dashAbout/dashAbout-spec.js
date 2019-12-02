var dashAbout = require('./dashAbout-po')

describe('About Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashAbout.landOnHomePage();
    });

    it('Klik na About link u footeru', function(){
        dashAbout.clickOnAbout();
    });

    it('Da li se ucitao Text na strani', function(){
        dashAbout.checkTextOnPage();
    });

    it('Provera About URL-a', function(){
        dashAbout.checkAboutUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});