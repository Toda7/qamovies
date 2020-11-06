var register = require('../registracija/registracija-po.js');
var staticPrivacyPolicy = require('./staticPrivacyPolicy-po.js')
var staticTermsOfService = require('../staticTermsOfService/staticTermsOfService-po');

describe('Public Privacy Policy strana', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Privacy Policy link', function(){
        staticPrivacyPolicy.clickOnLink();
    });

    it('Otvori intercom', function(){
        staticTermsOfService.openIntercom();
        browser.sleep(2000);
    });

    it('Zatvori intercom', function(){
        staticTermsOfService.closeIntercom();
    });

    it('Provera Privacy Policy URL-a', function(){
        staticPrivacyPolicy.checkPrivacyURL();
    });

    it('Provera Texta na strani', function(){
        staticPrivacyPolicy.checkText();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});