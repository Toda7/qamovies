var register = require('../registracija/registracija-po.js');
var footTerms = require('./footTerms-po.js')

describe('Public Terms of Service Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Terms of Service link', function(){
        footTerms.clickOnLink();
    });

    it('Provera Terms of Service URL-a', function(){
        footTerms.checkTermsURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});