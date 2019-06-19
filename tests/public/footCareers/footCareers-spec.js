var register = require('../registracija/registracija-po');
var footCareers = require('./footCareers-po')

describe('Public Careers Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Careers link', function(){
        footCareers.clickOnLink();
    });

    it('Provera Vendors URL-a', function(){
        footCareers.checkCareersURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});