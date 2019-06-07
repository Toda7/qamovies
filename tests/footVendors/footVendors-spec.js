var register = require('../registracija/registracija-po');
var footVendors = require('./footVendors-po')

describe('Public Vendors Link iz Footera', function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);//stavlja se na pocetak fajla da ne bi cekao Angular element
    }); 
   
    it('Dolazak na home stranu', function(){
        register.landOnHomePage();
    });

    it('Klik na Vendors link', function(){
        footVendors.clickOnLink();
    });

    it('Provera Vendors URL-a', function(){
        footVendors.checkVendorsURL();
    });

    afterAll(function(){
        browser.waitForAngularEnabled(true); 
    });
});