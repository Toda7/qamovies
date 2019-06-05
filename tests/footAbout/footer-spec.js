var register = require('../registracija/registracija-po');
var footer = require('./footer-po')

describe('Public Linkovi iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na About link', function(){
        footer.clickOnLink();
    });

    it('Provera About URL-a', function(){
        footer.checkAboutURL();
    });

    

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});