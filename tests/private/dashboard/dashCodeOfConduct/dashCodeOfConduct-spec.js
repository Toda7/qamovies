var dashCodeOfConduct = require('./dashCodeOfConduct-po')

describe('Code Of Conduct Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashCodeOfConduct.landOnHomePage();
    });

    it('Klik na Code Of Conduct link u footeru', function(){
        dashCodeOfConduct.clickOnCodeOfConduct();
    });

    it('Provera Code Of Conduct URL-a', function(){
        dashCodeOfConduct.checkCodeOfConductUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});