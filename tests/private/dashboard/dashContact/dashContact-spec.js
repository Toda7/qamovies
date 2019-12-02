var dashContact = require('./dashContact-po')

describe('Contact Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashContact.landOnHomePage();
    });

    it('Klik na Contact link u footeru', function(){
        dashContact.clickOnContact();
    });

    it('Provera View Finder marketing URL-a', function(){
        dashContact.checkContactUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});