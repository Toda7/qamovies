var dashPrivacyPolicy = require('./dashPrivacyPolicy-po')

describe('PrivacyPolicy Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        dashPrivacyPolicy.landOnHomePage();
    });

    it('Klik na PrivacyPolicy link u footeru', function(){
        dashPrivacyPolicy.clickOnPrivacyPolicy();
    });

    it('Provera PrivacyPolicy URL-a', function(){
        dashPrivacyPolicy.checkPrivacyPolicyUrl();
    });


    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});