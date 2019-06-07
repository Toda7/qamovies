var register = require('../registracija/registracija-po.js');
var footPrivacy = require('./footPrivacy-po.js')

describe('Public Privacy Policy Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Privacy Policy link', function(){
        footPrivacy.clickOnLink();
    });

    it('Provera Privacy Policy URL-a', function(){
        footPrivacy.checkPrivacyURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});