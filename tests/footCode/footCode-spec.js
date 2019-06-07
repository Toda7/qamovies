var register = require('../registracija/registracija-po.js');
var footCode = require('./footCode-po.js')

describe('Public Code of Conduct Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Code of Conduct link', function(){
        footCode.clickOnLink();
    });

    it('Provera Code of Conduct URL-a', function(){
        footCode.checkCodeURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});