var dashTermsOfService = require('./dashTermsOfService-po')

describe('TermsOfService Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashTermsOfService.landOnHomePage();
    });

    it('Klik na TermsOfService link u footeru', function(){
        dashTermsOfService.clickOnTermsOfService();
    });

    it('Provera Terms Of Service URL-a', function(){
        dashTermsOfService.checkTermsOfServiceUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});